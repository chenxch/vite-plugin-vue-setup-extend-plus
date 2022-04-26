import { parse, compileScript } from '@vue/compiler-sfc'
import MagicString from 'magic-string'

export function supportScriptName(code: string, id: string) {
  let s: MagicString | undefined
  const FILENAME_RE = /.*\/(\S*)/
  const str = () => s || (s = new MagicString(code))
  const { descriptor } = parse(code)
  if (!descriptor.script && descriptor.scriptSetup) {
    const result = compileScript(descriptor, { id })
    const name = result.attrs.name
    const lang = result.attrs.lang
    const inheritAttrs = result.attrs.inheritAttrs
    if (name) {
      str().appendLeft(
        0,
        `<script ${lang ? `lang="${lang}"` : ''}>
import { defineComponent } from 'vue'
export default defineComponent({
  name: '${name}',
  ${inheritAttrs ? `inheritAttrs: ${inheritAttrs !== 'false'},` : ''}
})
</script>\n`,
      )
    }

    const map = str().generateMap({ hires: true })
    const filename = FILENAME_RE.exec(id)![1]

    map.file = filename
    map.sources = [filename]

    return {
      map,
      code: str().toString(),
    }
  } else {
    return null
  }
}
