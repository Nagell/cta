# Animated CTA Project

## [Demo](https://cta-animated.web.app/)

This is a test project with a tiny self-made component library (compliant with atomic design) and an animated svg image.  
The animation itself was made using [SVGator](https://www.svgator.com/), however it had to be manually reworked and optimized for the web.

I encourage you to check it out: [raw](https://github.com/Nagell/cta/blob/master/src/assets/images/cta-background.svg?short_path=b7c0b38) / [blob](https://github.com/Nagell/cta/blob/master/src/assets/images/cta-background.svg)  
as well as the the pretty good effect I was able to achieve for buttons in mobile view.

![buttons](/docs/buttons.jpg)

For this one open the [demo](https://cta-animated.web.app/) and use mobile view in chrome dev tools. It's very satisfying, if you ask me ;)

## Tech-Stack

- [Vue 3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
  - [TailwindCSS Container Queries](https://github.com/tailwindlabs/tailwindcss-container-queries)
  - [container-query-polyfill](https://github.com/GoogleChromeLabs/container-query-polyfill) - for those browsers which do not yet support them
- [PostCSS](https://postcss.org/)

### Comment on container queries

Since this is a very new feature, I decided to use polyfill for it. Although it works, it is far from perfect.  
The locally hosted version works fine, but the deployed one has some issues on Firefox.  
In the meantime (at the time of writing), it looks like the Firefox team is also working on this feature and will release it next month.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support For `.vue` Imports in TS

<details>
  <summary>Click to open and read more</summary>
  
TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking.  
In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant.  
You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   - Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   - Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

</details>

## Next Steps

- if more icons will be added, a conversion to an icon font should be considered
- with more components an implementation of [Storybook](https://storybook.js.org/docs/vue/get-started/introduction) would improve the review process
