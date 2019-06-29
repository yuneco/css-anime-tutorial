export default {
  wait (ms) {
    return new Promise(resolve => {
      window.setTimeout(resolve, ms)
    })
  }
}
