/** @format */

const files = require.context('./', false, /.js$/)
const modules = {}

files.keys().forEach(key => {
  if (key === './index.js') return
  const moduleName = key.match(/(?<=\.\/).+(?=\.js)/)[0]
  modules[moduleName] = files(key).default
})

export default modules
