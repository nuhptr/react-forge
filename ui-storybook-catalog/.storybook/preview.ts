import type { Preview } from "@storybook/react-vite"

/**parameter global untuk seluruh story.*/
const preview: Preview = {
    parameters: {
        layout: "centered",
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

export default preview
