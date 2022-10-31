---
title: "إستعمال vue composition api"
date: "2 ربيع الثاني 1444 ﻬ"
heroImage: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
---

# بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ

## فقه vuejs : Composition Api

### البداية : انشاء  مشروع vue الطريقة الاولى (الافضل)

تثبيت vue cli

```
sudo yarn global add @vue/cli
```

بعد ذلك نطبع الامر

```
vue create .
```

النقطة  تعني انشئ المشروع في المجلد الحالي فلا ينشئ مجلد جديد ليضع فيه الملفات

بعد ذلك يمكنك اختيار الاعدادات التي تريد

### البداية : انشاء  مشروع vue الطريقة الثانية

```
yarn create vite
```
بعد ذلك نسمي المشروع 
ثم نختار framework .. حسنا سأختار vue
و من ثم نختار vue او vue-ts اي بمعنى اختيار ما اذا كنا سنستعمل javascript أو typescript
و اخيرا نقوم بالدخول الى المشروع و تثبيت متطلباته و  تشغيله
```
cd my-project
yarn add
yarn dev
```



### انشاء متغير

```vue
<script setup>
import { ref } from 'vue'

const message = ref('السلام عليكم')
</script>

<template>
  <h1>{{ message }}</h1>
</template>
```

هنا يمكن استبدال "السلام عليكم" ب 1 , true , null

الطريقة الثانية : لكنها لا زالت تجريبية ... نظيف reactivityTransform هكذا 

```
// vite.config.js
export default {
  plugins: [
    vue({
      reactivityTransform: true
    })
  ]
}
```

بعد ذلك نستخدم المتغيرات بسهولة 

```
<script setup>
let count = $ref(0)

console.log(count)

function increment() {
  count++
}
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>
```

لكن ماذا اذا كان لدينا عدة متغيرات هكذا 

```
const { supported, storage, setSync, remove } = useLocalStorage(key,input)
```

ببساطة نظيف $()

```
const { supported, storage, setSync, remove } = $(useLocalStorage(key,input))
```

### انشاء object ويكون عن طريق reactive

```
<script setup>
import { reactive } from 'vue'

const person = reactive({ name: "ahmad", age: 25, gender: "male" })
</script>

<template>
  <p> Person name is: {{ person.name }}</p>
  <p> Person age is: {{ person.age }}</p>
  <p> Person gender is: {{ person.gender }}</p>
</template>
```

### استعمال localStorage في vue

اولا تثبيت  vue-composable

```
pnpm add vue-composable
```

بعد ذلك نستعملها

```
import { useLocalStorage } from "vue-composable";

const key = ref("key_name_in_localStorage");
const tabSync = ref(false);
const { supported, storage, setSync, remove } = useLocalStorage(key, "default value of key");
```
يمكن استخدام storage داخل **script tag** تاغ هكذا

```
const output = computed(() => DOMPurify.sanitize(marked.parse(storage.value)))
```

او يمكنك استخدام storage داخل **template tag** هكذا على سبيل المثال

```
<textarea :value="storage"></textarea>
```

### حيلة Show/Hide

اولا ننشئ المتغير الذي نتحكم في قيمته

```
// switch between Editing and viewing
const switchType = ref("Editor");
```

ثانيا ننشئ الدالة التي تغير المتغير

```
// toggle between Editing and Viewing
const switcher = () => {
  switchType.value =  switchType.value === "Editor" ? "Viewer" : "Editor";
}
```

ثالثا ننشئ الزر الذي نندي به الدالة

```
<button @click="switcher">switcher</button>
```

اخيرا نظيف v-if من اجل Show/Hide

```
<textarea v-if="switchType=='Editor'"></textarea>
<div v-if="switchType=='Viewer'"></div>
```

### استعمال heroicons

نقوم بتثبيتها
```
pnpm add @heroicons/vue
```
ثم نستدعي الايقونة  ونظيفها 
```
<script setup>
import { PencilIcon } from '@heroicons/vue/24/outline'
</script>


<template>
	<PencilIcon class="h-6 w-6"/>
</template>
```

### انيميشن باستخدام motion one

اولا نثبت motion one

```
pnpm add motion
```

بعد ذلك نقوم باستدعاء animation package و ننشئ دالة نربطها مع زر على سبيل المثال

```
<script setup>
import {animate} from "motion"

const scaleAnimation = () => {
    animate(".scaleAnimation",  { scale: [0.9, 1] }, {
      duration: 0.5,
      easing: 'ease-out',
    });
  }
</script>

<template>
<button class="scaleAnimation" @click="scaleAnimation()">
</template>
```

### استعمال darkmode عن طريق vueuse و tailwindcss

اولا نقوم بتثبيت vueuse 

```
pnpm add @vueuse/core
```

بعد ذلك نستدعي usedark و usetoggle

```
import { useDark, useToggle } from '@vueuse/core'
```

ثم نضع متغيرات هكذا 

```
const isDark = useDark()
const toggleDark = useToggle(isDark)
```

الآن دور تايلويند : باضافة هذا التعديل نستطيع اضافة كلاس هكذا dark:{class}

```
// tailwind.config.cjs
module.exports = {
	darkMode: 'class',
}
```

يمكننا الآن انشاء زر للقلب بين dark و light mode

```
<button
class="bg-slate-800 dark:bg-white dark:text-slate-800 p-3 shadow-xl m-2 mt-5 text-white"
@click="toggleDark()"
>
<MoonIcon v-if="isDark" class="h-6 w-6" />
<SunIcon v-else class="h-6 w-6" />
</button>
```

اخيرا نظيف الكلاسات الخاصة ب dark mode و lightmode

```
<div class="bg-white text-black dark:bg-slate-900 dark:text-white">
</div>
```

### استعمال vitepress (لا يدعم العربية . اذن لا استعمله)


```
pnpm init
pnpm add vitepress -D
mkdir docs && echo '# السلام عليكم' > docs/index.md
```
بعد ذلك نضيف هذا الكود الى `package.json`

```
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  },
  ...
}
```

ثم
 
```
yarn docs:dev
```

الآن من أجل تعديل الموقع سننشئ مجلد .vitepress داخل docs ثم ننشئ بداخله  ملف config.js

```
export default {
  title: 'الموسوعة العلمية',
  description: 'الموسوعة العلمية في مجال الإلكترونيات'
}

```

لتعديل css ننشئ ملف index.js داخل مجلد theme الذي هو بداخل .vitepress 

```
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme

```

فيمكننا بهذا تعديل css بداخل custom.css

```
/* .vitepress/theme/custom.css */
:root {
  --vp-c-brand: #646cff;
  --vp-c-brand-light: #747bff;
}

```


###  استخدام json data كقاعدة بيانات

على سبيل المثال ننشئ ملف data.json داخل src

نذهب الى components/Helloworld.vue ثم نكتب

```
<script setup>
import {ref} from "vue"

import sourceData from "@/data.json"

const allData = ref(sourceData)
const threads = ref(sourceData.threads)

console.log(allData)
</script>

<template>
<h1>{{allData}}</h1>
<p>{{threads}}</p>
</template>
```

رمز @ في import دلالة على مجلد src

### اضافة تايلويند tailwind

نقوم بتثبيت packages ونضيف tailwind config بهذه الطريقة

```
yarn install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
بعد ذلك نعدل tailwind.config.js  هكذا

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
بعد ذلك اضف هذا الى src/assets/main.css و او احذف كل شيئ و اضفه

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
