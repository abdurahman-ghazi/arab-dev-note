## استعمال next auth

نقوم بتثبيت next-auth في مشروعنا


```
yarn add next-auth
```
### استعمال Github لتسجيل الدخول

ثم اذهب الى https://github.com/settings/developers و اضغط  `new OAuth app`

سمي التطبيق اي اسم تريد في `Application name`
سنضع http://localhost:3000 في `Homepage URL` ثم نغيره الى اسم الموقع الخاص بنا فيما بعد
ثم نضع http://localhost:3000/api/auth/callback في `Authorization callback URL` ثم نغيره الى اسم الموقع الخاص بنا فيما بعد
ثم نضغط `Register application`

سنحصل من هناك على GITHUB_ID و GITHUB_SECRET فنحتفظ بهما

ننشئ بعد ذلك ملف اسمه .env.local و نضع فيه التالي

```
NEXTAUTH_URL=http://localhost:3000
GITHUB_ID=088660c680b60fb512ae
GITHUB_SECRET=c42b30b3f51048d3e79899a42d65e25f9e2e9fe8f
```
ننشئ بعد ذلك ملف `[...nextauth].js` في `pages/api/auth` 

```
import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";

const options = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],
}

rest apiexport default (req, res) => NextAuth(req, res, options)
```

نضيف `SessionProvider` في `pages/_app.js`

```
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
```
اخيرا اضف هذا الكود في `Header.js` او  `Navbar.js` كما تريد 

```
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Header () {
  const { data: session } = useSession();

  const handleSignin = (e) => {
    e.preventDefault()
    signIn()
  }

  const handleSignout = (e) => {
    e.preventDefault()
    signOut()
  }
```

