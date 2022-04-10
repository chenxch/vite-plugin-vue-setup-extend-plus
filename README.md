Expansion based on [vite-plugin-vue-setup-extend](https://github.com/vbenjs/vite-plugin-vue-setup-extend)

[PR](https://github.com/vbenjs/vite-plugin-vue-setup-extend/pull/8)

# vite-plugin-vue-setup-name-support

Make the vue script setup syntax support the name attribute

## Install (yarn or npm)

**node version:** >=12.0.0

**vite version:** >=2.0.0

```bash
yarn add vite-plugin-vue-setup-extend-plus -D
```

or

```bash
npm i vite-plugin-vue-setup-extend-plus -D
```

## Usage

- Config plugin in vite.config.ts. In this way, the required functions can be introduced as needed

```ts
import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend-plus'

export default defineConfig({
  plugins: [vue(), vueSetupExtend()],
})
```

- SFC

```html
<template>
  <div>hello world {{ a }}</div>
</template>

<script lang="ts" setup name="App" inheritAttrs="false">
  const a = 1
</script>
```

## Sample project

[Vben Admin](https://github.com/anncwb/vue-vben-admin)

## License

MIT
