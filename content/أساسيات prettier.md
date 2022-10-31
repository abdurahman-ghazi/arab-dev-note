---
title: "إستعمال Prettier"
updated: "3 ربيع الثاني 1444 ﻬ"
heroImage: "https://raw.githubusercontent.com/uiwjs/file-icons/master/icon/prettier.svg"
---

# بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ


## إضافة prettier الى مشروع :mechanical_arm:

اولا نقوم بتثبيته في المشروع 

```sh
yarn add prettier -D
```

بعد ذلك نقوم بتعديل package.json بإضافة script جديد على حسب اللغة المستعملة

```json
"scripts": {
    "format": "prettier --write '**/*.{vue,html,.md}'"
  },
```

بعد ذلك نقوم باضافة ملف .prettierignore  حتى نقصي مجلد node_modules فنحن لا نريد عمل فورمات format لكل الملفات

```
node_modules
```

نستطيع ايضا ان نضع قوانين ك اضافة semicolon على سبيل المثال و ذلك بانشاء ملف .prettierrc


```json
{
  "semi": true
}
```


الآن من أجل عمل format نكتب

```sh
yarn format
```
