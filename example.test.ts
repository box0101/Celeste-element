import { describe, expect, test, vi, Mocked } from 'vitest'
import { testFn, request } from './utils'
import axios from 'axios'

vi.mock('axios')
const mockedAxios = axios as Mocked<typeof axios>

describe( 'function', () => {
  test('create a mock function', () => {
    const callbackTest = vi.fn()
    testFn(2, callbackTest)
    expect(callbackTest).toHaveBeenCalled()
    testFn(3, callbackTest)
    expect(callbackTest).toHaveBeenCalledWith(2)
  })

  test('spy on method', () => {
    const obj = {
      getName: () => 1
    }
    const spy = vi.spyOn(obj, 'getName')
    obj.getName()
    expect(spy).toHaveBeenCalled()
    obj.getName()
    expect(spy).toHaveBeenCalledTimes(2)
  })

  test('mock third party module', async () => {
    mockedAxios.get.mockResolvedValue({ data: 123 })
    const result = await request()
    
    expect(result).toBe(123)
  })
})