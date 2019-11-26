export let timeout

const debounce = (time, callback) => {
  
  clearTimeout(timeout)

  timeout = setTimeout(() => {
    callback()
  }, time);
}

export const HOST = process.env.NODE_ENV !== 'production' ? 'http://localhost:3333' : 'https://sebbe.dev'

export const URL = process.env.PUBLIC_URL || ''

export default debounce