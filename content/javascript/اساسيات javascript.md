# بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ

## شرح local storage

لإضافة القيم و مفاتيحها في local storage لدينا 3 طرق
```
window.localStorage.setItem("color", "#F00");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";
```
لإستدعاء القيم لدينا 3 طرق أيضا فقط نقوم بطلب المفتاح من local storage
```
window.localStorage.getItem("color");
window.localStorage.color;
window.localStorage["color"];
```
الآن لحذف قيمة في local storage سهل جدا
```
window.localStorage.removeItem("color");
```
و لحذف كل القيم 
```
window.localStorage.clear();
```
ولمعرفة ما يوجد في المفتاح رقم 0 على سبيل المثال
```
window.localStorage.key(0)
```
