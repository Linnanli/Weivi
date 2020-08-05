export const timeout = (time) => {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve()
      clearTimeout(timer)
    }, time)
  })
}
