import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // Use default layout slots if needed
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Register global components if needed
    // Components can be imported directly in markdown files using <script setup>
  }
} satisfies Theme
