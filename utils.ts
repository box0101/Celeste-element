import axios from "axios"

export function testFn(num: number, callback: Function) {
  if(num < 10) {
    callback(num)
  }
}

export async function request() {
  const result = await axios.get('fake.url')
  return result.data
}