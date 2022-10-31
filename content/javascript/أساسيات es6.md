# بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ

## شرح Arrow Function

نبدا بالدالة العادية و تكتب هكذا  regular function

```
function test() {
   return 2;
}
console.log(test());
```

و نستطيع كتابتها بهذه الطريقة 

```
let test = function() {
   return 2;
} 
console.log(test());
```

و الآن دور الدالة السهمية arrow function

```
let test = () => {
   return 2;
}
console.log(test());
```

سهلة جدا قمنا بحذف كلمة function و اضفنا سهم بعد القوسين => 

بل نستطيع اختصارها ايضا ... اذا كان لدينا one statement و ذلك يكون بحذف return و العارضتين


```
let test = () => 2;
let test = _ => 2;
console.log(test());
```

الآن لنظف parameter واحد  لل function العادية 

```
let test = function(param) {
   return param * 2;
} 
console.log(test(5));
```

ثم  للarrow function

```
let test = (param) => param * 2;
let test = param => param * 2;
console.log(test(5));
```

و اخيرا اذا كان لدينا اكثر من parameter فلا نستطيع الاستغناء عن الاقواس

```
let test = (param1, param2) => param1 * param2;
console.log(test(5, 5));
```

### ملاحظة : حسب ما قال اسامة الزيرو ... regular function ليست  بديل لل arrow function و انما لكل استعماله الخاص


## شرح Call Stack, Web API, Event Loop, Callback Queue

لدينا شيء اسمه call Stack و هو من يحدد اي سطر يشتغل اولا ... يعني هو من يرتب execution فإذا و جد Web API دفعه الى  Callback Queue للإنتظار



## شرح asynchronous و synchronous

الجافاسكريبت عبارة عن لغة single threaded بمعنى انها تقوم بشيئ واحد في الوقت الواحد 

معنى synchronous programming هو ان اي شيئ تكتبه يجب ان ينتهي حتى يعمل الذي بعده

اما في asynchronous programming فيمكن فعل عدة اشياء في نفس الوقت


## شرح  Promise

### معلومات هامة

اولا promise معناها وعد يعني يمكن للعملية  ان تنجح او تفشل 

ثانيا promise عبارة عن object

ثالثا promise عملية غير متزامنة asynchronous يعني انه يمكن ان تتم في نفس وقت عملية اخرى

### كتابة promise

```
const myPromise = new Promise(function (resolve, reject) {

});
```

عليك ان تعلم ان Promise() تقبل parameter و هو عبارة عن function تسمى executer function و هي بذاتها تقبل 2 prameter بداخلها resolve و reject .. طبعا يمكنك تسميتهما كما تشاء

الآن resolve دلالة على نجاح العملية ... اما reject دلالة على فشل العملية مثال

### مثال باستخدام then فقط

```
const myPromise = new Promise(function (resolve, reject) {
	let connect = true;
	if (connect) {
		resolve("connection Established");
	} else {
		reject(Error("connection failed"));
	}
});
```

لكننا لم ننته بعد يا صديقي  علينا ان نحدد ما الذي سيحصل اذا تحقق الوعد (resolved) او لم يتحقق(rejected) و ذلك باستعمال .then

```
myPromise.then(
	(resolved) => console.log(resolved), // Connection Established printed in console
	(rejected) => console.log(rejected)  // Error printed in console
);
```

اذا كانت connect = true فسنحصل على connection Established اما اذا كانت false فسنحصل على Error 

سوف تعطينا resolved القيمة الموجودة داخل resolve داخل if 
سوف تعطينا rejected ال error الموجودة داخل reject داخل else 

### مثال باستخدام then و catch

```
myPromise.then((resolved) => console.log(resolved)).catch((rejected) => console.log(rejected));
```
