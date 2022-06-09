import type { Plugin } from 'vite'
import { supportScriptName } from './lib'

export default (): Plugin => {
  return {
    name: 'vite:setup-name-support',
    enforce: 'pre',
    async transform(code, id) {
      if (!/\.vue$/.test(id)) {
        return null
      }

      return supportScriptName.call(this, code, id)
    },
  }
}
