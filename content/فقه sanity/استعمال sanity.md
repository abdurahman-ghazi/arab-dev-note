## البدأ باستعمال sanity

الدخول الى موقع sanity.io و الضغط على زر get started

ثم نسجل حساب جديد او ندخل عن طريق github على سبيل المثال

ثم سنسأل عن بعض الاسئلة لنجب اذن

بعد ذلك سنحصل على مثل هذه الصورة sanity install img in download folder و نقوم بقص الامر الموجود و نثبته في الحاسوب

بعد ذلك نضغط على enter سيأخذ ذلك بعض الوقت

### انشاء schema

الان يجب انشاء schema على سبيل المثال

```
// schemas/product.js
export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'countInStock',
      title: 'CountInStock',
      type: 'number',
    },
  ],
}
```

بعد هذا نظيف product.js الى schema بهته الطريقة

```
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import product from './product';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    product,
  ]),
});
```

### طريقة استدعاء البيانات من sanity في مشروع nuxt

تم شرح cors config في canva

نقوم بتثبيت sanity 

```
pnpm add @nuxtjs/sanity
```

ثم نظيفه في modules

```
import { defineNuxtConfig } from 'nuxt'
export default defineNuxtConfig({
  modules: ['@nuxtjs/sanity'],
  sanity: {
    projectId: 'myProject'
  }
})
```

