Expansion based on [vite-plugin-vue-setup-extend](https://github.com/vbenjs/vite-plugin-vue-setup-extend)

# vite-plugin-vue-setup-extend-plus

Make the vue script setup syntax support the name attribute

## Iterative updates are made in [unplugin-vue-setup-extend-plus](https://www.npmjs.com/package/unplugin-vue-setup-extend-plus) during the later period.

## CHANGELOG

### [0.1.0]

- Automatically convert based on name and inheritAttrs
## Feature 

- support name
- support inheritAttrs
- precise breakpoints
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
