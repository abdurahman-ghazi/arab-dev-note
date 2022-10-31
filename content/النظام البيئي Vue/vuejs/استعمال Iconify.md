---
title: "إستعمال iconify في vue"
date: "1 ربيع الثاني 1444 ﻬ"
heroImage: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
---

# بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ

## الطريقة الاسهل iconify vue component 

طريقة التثبيت 

```
yarn add @iconify/vue
```
طريقة الاستعمال 

```
<script setup lang="ts">
import {Icon} from '@iconify/vue'
</script>

<template>
<Icon icon="fa:twitter-square" width="96" :inline="true" :horizontalFlip="true" color="#15CA82"  />
</template>
```
لإيجاد الأيقونات يجب تفحص https://icones.js.org/

و يمكن اضافة بعض التعديلات ك width inline و اخرى

و لكن يوجد امر سلبي في هته الطريقة fetches icon when mounted 

يعني ان الايقونات لن تكون حاضرة عند تركيب الموقع بل سيستدعيها بعد تركيب الموقع مما سيسبب مشاكل لأصحاب الانترنت الضعيفة


## الطريقة الثانية UNPLUGIN ICONS

طريقة التثبيت 

```
yarn add unplugin-icons
```
و نظيف اما المكتبة التي نرغب في استخدامها - مثال :

```
yarn add @iconify-json/mdi
```
او يمكننا تثبيب كل شيء و لكن حجمها كبير 120mb

```
yarn add @iconify-json
```

بعد ذلك نظيف الايقونات هكذا
```
<script setup>
import IconAccountBox from '~icons/mdi/account-box'
</script>

<template>
<IconAccountBox />
</template>
```

لم ننتهي بعد نحتاج الى بعض التعديلات

في تطبيق vite علينا تثبيت :

```
yarn add @vue/compiler-sfc
```

نذهب الى vite.config.js

```
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Icons({compiler: 'vue3'}), vue()],
})

```


## مصادر

Iconify - https://iconify.design/
Icones - https://icones.js.org/
Unplugin-icon - https://github.com/antfu/unplugin-icons
Nuxt Icon - https://github.com/nuxt-modules/icon
UnoCSS - https://uno.antfu.me/
Astro Icon - https://github.com/natemoo-re/astro-icon
Web Components - https://docs.iconify.design/iconify-i...
VS Code Extension - https://github.com/antfu/vscode-iconify

