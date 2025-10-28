import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Clt-Element",
  base: '/Celeste-element/',
  description: "仿Element-Plus组件库",
  vite: {
    plugins: [
      VueMacros.vite({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vueJsx: vueJsx(),
        },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '开始使用', link: '/overview' },
      { text: 'API示例', link: '/api-examples' }
    ],

    sidebar: [
      {
        text: 'Overview组件总览',
        items: [
          { text: 'Overview组件总览', link: '/overview' },
        ]
      },
      {
        text: 'Basic',
        items: [
          { text: 'Button按钮', link: '/components/button' },
          { text: 'Collapse折叠面板', link: '/components/collapse' },
          { text: 'Dropdown下拉菜单', link: '/components/dropdown' },
          { text: 'Icon图标', link: '/components/icon' },
          { text: 'Input输入框', link: '/components/input' },
          { text: 'Message消息提示', link: '/components/message' },
          { text: 'Switch开关', link: '/components/switch' },
          { text: 'Select选择器', link: '/components/select' },
          { text: 'Tooltip文字提示', link: '/components/tooltip' },
          { text: 'Form表单', link: '/components/form' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
