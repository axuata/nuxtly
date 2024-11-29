import presetUno from '@unocss/preset-uno';
import presetIcons from '@unocss/preset-icons';
import { defineConfig } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({ /* options */ }),
  ],
});