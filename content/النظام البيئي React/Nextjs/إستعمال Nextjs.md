## انشاء موقع الكتروني ب nextjs + tailwind

```
yarn create next-app --example with-tailwindcss chiraz
cd chiraz
yarn dev
```


### تضمين محتوى تويتر 
```
yarn add react-twitter-embed
```
ثم نضيف هذا 
```
 <TwitterTimelineEmbed
  sourceType="profile"
  screenName="abdurahmn_ghazi"
  options={{height: 1000}}
/> 
```

### اضافة font

اضافة `font family` في `tailwind.config.js`

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        fontFamily:{
          tajawal: 'Tajawal, sans-serif'
        },
    },
  },
  plugins: [],
}
```

اضافة هذا في `globals.css` الموجود في مجلد `styles`

```
@layer base{
	@font-face {
		font-family:  'Tajawal';
		src:  url('/fonts/Tajawal-Regular.ttf');
	}
}
```

ولا تنسى تحميل و اضافة الفونت التي تريدها `Tajawal-Regular.ttf` في `public/fonts` 
و اخيرا تستطيع اضافة كلاس `font-tajawal`

## اضافة  nextjs Image 

اولا نقوم ب import 

```
import Image from 'next/image'
```
ثم بعد ذلك نظيف الصورة مع بعض التعديلات

```
<div className="relative h-64">
	<Image
	src="/images/sanity/click_on_project.png"
	layout="fill"
	objectFit="contain"
	/>
</div>
```
اذا اردنا ان تكون الصورة اول ما يحمل في الصفحة يجب اضافة priority بهذا الشكل 

```
<Image
	...
	priority
/>
```

نستطيع اضافة width و height ولكن هذا سيجعل الصورة غير متجاوبة  و قبيحة 

```
<Image
	...
	width={500}
        height={500}
/>
```

## اضافة heroicons

اولا نثبتها

```
yarn add @heroicons/react
```
ثم نظيفها

```
import { BeakerIcon } from '@heroicons/react/24/solid'

function MyComponent() {
  return (
    <div>
      <BeakerIcon className="h-6 w-6 text-blue-500"/>
      <p>...</p>
    </div>
  )
}
```

## إستخدام contentLayer

اولا التثبيت

```
yarn add contentlayer next-contentlayer
```

## ادارة البيانات بسهولة

انشئ data/metadata.ts

```
const metadata = {
  title: "مدونة الهندسة",
};

export default metadata;
```
بعد ذلك نذهب الى index.js على سبيل المثال و نكتب هكذا 

```
import metadata from '../data/metadata'

<title>{metadata.title}</title>
```
