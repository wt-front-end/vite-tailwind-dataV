const req = import.meta.glob('../api/**/*.js')

const requireAll = (requireContext) => {
  for (const path in requireContext) {
    requireContext[path]().then((mod) => {
      console.log('mod', mod)
      for (const key in mod) {
        api[key] = mod[key]
      }
    })
  }
}

const api = {}
requireAll(req)

console.log(111,api)
export default api
