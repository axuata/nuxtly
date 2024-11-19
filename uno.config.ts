import presetUno from '@unocss/preset-uno'
import { defineConfig, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({ /* options */ }),
    presetUno(),
  ],
})