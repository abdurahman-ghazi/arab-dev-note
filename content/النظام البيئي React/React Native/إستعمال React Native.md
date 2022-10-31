## انشاء تطبيق جوال ب React Native

```
sudo npm i -g expo-cli
npx create-expo-app my-app
expo start
```

- ثم قم بتحميل expo go من متجر google play store

### استعمال TailwindCss 

```
yarn add tailwindcss-react-native
yarn add --dev tailwindcss
```

بعدها أنشئ `tailwind.config.js` 

```
// tailwind.config.js
module.exports = {
+ content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```


اضافة هذا السطر داخل return في `babel.config.js`

```
plugins: ["tailwindcss-react-native/babel"],
```

اضافة هذا السطر في الاعلى في `App.js`

```
import { TailwindProvider } from 'tailwindcss-react-native';
```

اضافة `<TailwindProvider>` بهذا الشكل

```
+ <TailwindProvider>  
<View style={styles.container}>  
... 
</View>  
+ </TailwindProvider>
```

### استعمال React Navigation

```
expo install react-native-screens react-native-safe-area-context
```

اضافة هذا السطر في الاعلى في `App.js`

```
import { NavigationContainer } from '@react-navigation/native';
```

اضافة `<NavigationContainer>` بهذا الشكل و يلف حتى `</TailwindProvider>`

```
<NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
```

ثم

```
yarn add @react-navigation/native-stack
```

اضافة هذا السطر في الاعلى في `App.js`

```
import { createNativeStackNavigator } from '@react-navigation/native-stack';
```

اضافة `<Stack.Navigator>` بهذا الشكل داخل `</TailwindProvider>`

```
<TailwindProvider>                                                                      
<Stack.Navigator>                                                                     
<Stack.Screen name="Home" component={HomeScreen} />                                 
</Stack.Navigator>                                                                    
</TailwindProvider> 
```

اضافة هذا السطر تحت imports

```
const Stack = createNativeStackNavigator();
```
#### تعديل Header في React Navigation

```
const navigation = useNavigation();

useLayoutEffect(()=> {
	navigation.setOptions({
		headerShown: false,
	});
}, []);
```

