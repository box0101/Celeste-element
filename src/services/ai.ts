/**
 * AI 服务模块
 * 提供文本润色功能
 */

export interface StreamPolishOptions {
  prompt?: string
  onChunk: (chunk: string) => void
  onComplete: (fullText: string) => void
  onError: (error: string) => void
  controller?: AbortController
}

/**
 * 调用智谱 AI (GLM) API 进行文本润色（流式输出）
 * @param text 需要润色的文本
 * @param options 流式处理选项
 */
export const polishTextStream = async (
  text: string,
  options: StreamPolishOptions
): Promise<void> => {
  const { prompt, onChunk, onComplete, onError, controller } = options

  try {
    if (!text || !text.trim()) {
      onError('输入内容不能为空')
      return
    }

    const finalApiKey = import.meta.env.VITE_ZHIPU_API_KEY

    if (!finalApiKey || !finalApiKey.trim()) {
      throw new Error('请先配置 VITE_ZHIPU_API_KEY 环境变量')
    }

    // 使用自定义 prompt 或默认 prompt
    const systemPrompt = '你是一个专业的文案助手。只返回处理后的结果，不要添加任何解释、说明或额外文字。'
    const userPrompt = prompt ? `${prompt}${text}` : `润色这段文本，只返回润色后的结果：${text}`

    const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${finalApiKey}`
      },
      body: JSON.stringify({
        model: 'glm-4-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 2000,
        stream: true
      }),
      signal: controller?.signal
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error?.message || `API 请求失败: ${response.status}`)
    }

    // 处理 SSE 流
    const reader = response.body?.getReader()
    const decoder = new TextDecoder()
    let fullText = ''

    if (!reader) {
      throw new Error('无法获取响应流')
    }

    try {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const { done, value } = await reader.read()

        if (done) {
          onComplete(fullText)
          break
        }

        const chunk = decoder.decode(value, { stream: true })
        const lines = chunk.split('\n')

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6)
            if (data === '[DONE]') continue

            try {
              const json = JSON.parse(data)
              const content = json.choices?.[0]?.delta?.content
              if (content) {
                fullText += content
                onChunk(content)
              }
            } catch (e) {
              // 忽略解析错误
            }
          }
        }
      }
    } finally {
      reader.releaseLock()
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : '流式请求失败'
    if (onError) {
      onError(errorMessage)
    }
  }
}

