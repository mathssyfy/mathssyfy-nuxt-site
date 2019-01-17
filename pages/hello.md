# Nuxt.js

## Installation

``` bash
yarn global add @vue/cli @vue/cli-init
vue init nuxt-community/starter-template <project-name>
cd <nom-du-projet>
yarn
```

Démarrer le projet:
``` bash
yarn dev
```

## Ajouter stylus

Bien sûr on peut utiliser d'autres pré-processeurs comme Sass ou Less, mais j'aime bien Stylus ;-)

Dans le fichier: `/assets/styles/theme.styl`

```stylus
html, body
  padding 0
  margin 0

body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  font-size 16px
  color black
```
Puis:
```bash
yarn add stylus stylus-loader -D
```

Puis dans `nuxt.config.js`, avec notre fichier de styles dans 'assets`:

```javascript
css: [
   '@/assets/styles/theme.styl'
 ],
```

## Ajouter Markdow-it

```bash
yarn add @mathssyfy/markdown
```
Dans `nuxt.config.js`, par exemple:
```javascript
modules: [
    '@mathssyfy/markdown'
  ],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-container',
      'markdown-it-emoji',
      'markdown-it-prism',
    ]
  },
```
Bien sûr si vous utilisez cette configuration, il faut ajouter les dépendances:

```bash
yarn add markdown-it-container markdown-it-emoji markdown-it-prism
```
Puis le thème pour Prism:

```javascript
css: [
    '@/assets/styles/theme.styl',
    'prismjs/themes/prism-dark.css'
  ],
```

## Quelques tests

On va partir de zéro pour les templates:

Dans le dossier `./pages/` on va créer un fichier `hello.md` (bon ok ce n'est pas le bon endroit pour mettre du markdown, mais c'est pour tester !)

``` markdown
# Hello tout le monde ;)
```

Dans le fichier `index.vue`, effacer tout, puis:

```javascript
<template>
  <div v-html="hello"></div>
</template>

<script>
  import hello from './hello.md'

  export default {
    computed: {
      hello() {
        return hello
      }
    }
  }
</script>
```

## Créer des composants globaux
Créer un plugin  : `~/plugins/global.js`

```javascript
import Vue from 'vue'
import Markdown from '@mathssyfy/plugin-markdown'

Vue.component("Markdown", Markdown)
```

Puis dans `nuxt.config.js`

```javascript
plugins: [
    '@/plugins/global.js'
  ],
```

On peut au passage créer un plugin `global-components-loader.js` pour charger automatiquement nos components:

```javascript
import Vue from 'vue'
import _ from 'lodash'

const components = require.context('@/components', false, /[A-Z]\w+\.(vue)$/) 
_.forEach(components.keys(), fileName => {
    const componentConfig = components(fileName)
    const componentName = fileName.split('/').pop().split('.')[0]
    Vue.component(componentName, componentConfig.default || componentConfig)
})
```

Puis dans `nuxt.config.js`

```javascript
plugins: [
  '~/plugins/global-components-loader.js',
    '@/plugins/global.js'
  ],
```

D'après: [https://stackoverflow.com/questions/52989867/nuxt-global-components-according-to-layout]