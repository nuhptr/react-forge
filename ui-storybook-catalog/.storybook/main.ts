import type { StorybookConfig } from "@storybook/react-vite"

/**
 * Konfigurasi Storybook untuk katalog ui-storybook-catalog.
 *
 * Story berada di folder `stories/` di luar `src/` supaya tidak ikut
 * pemeriksaan tipe aplikasi Vite (`tsc -b`).
 */
const config: StorybookConfig = {
    stories: ["../stories/**/*.stories.@(ts|tsx)"],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
}

export default config
