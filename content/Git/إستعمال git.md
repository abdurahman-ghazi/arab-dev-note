---
title: "إستعمالات git"
date: "2 ربيع الثاني 1444 ﻬ"
heroImage: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_git2.svg"
---

# بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ


## الحالة git status

 - للإطلاع على حالة المشروع : يعني ما هي الملفات التي تم تعديلها و ما الى ذلك

```
git status
```
## عملية stage و unstage

- لإضافة الملفات إلى staging area

```
git add index.html
// or
git add .
git add *
```

- لحذف الملفات من staging area 

```
git reset index.html
// or 
git reset // all files
```


النقطة او النجمة تعنيان إضافة كل الملفات و المجلدات

## التعامل مع remote repo

- لمعرفة remote repo

```
git remote -v
```

- لتحميل الملفات من remote repo ل local repo 

```
git pull origin
```

## عرض و حذف commits

```
# Show Log File (commits)
git log

# Reset Head
git reset --hard "Commit Hash Here"

# Push Edits From Local To Remote With Force Flag
git push origin main --force
```




## التعامل مع الفرع  branch

### عرض الفرع Show Branches

```
git branch
```

### تغيير الفرع Switch To Branch

```
git checkout "Branch Name"
```

### حذف الفرع Delete Branch


```
git branch -d "Branch Name"
```
هنا لن يحذف branch اذا كانت بالملفات تعديلات , هنا نحذف الملف بقوة عن طريق -D 

### إنشاء الفرع و الإنتقال اليه Create Branch And Switch To It

```
git checkout -b "Branch Name"
```

### تغيير اسم الفرع Move / Rename Branch

```
git branch -m "New Branch Name"
```

### دمج الفرع مع الفرع الحالي Merge Branch With Current Branch

```
git merge "Branch Name You Need To Merge"
```

## استعمال clean و restore

```
# Restore Staged Files / Unstage
git restore --staged "File Name Here"

# Show Files That Will Be removed
git clean -n

# Remove Files that are not in Staging Area
git clean -f
```

## التعامل مع stash

عن طريق stash يمكن حفظ الملفات التي لا نريد دفعها حاليا على سبيل المثال 

**ملاحظة** : لا يمكن استعمال stash الا بعد commit واحد على الأقل و نظيف إلى ال stash بعد دفع الملف إلى staging area

```
# Create Text File With "Hello World" String Inside It
echo "Hello World" > about_readme.txt

# Add File To Staging Area
git add about_readme.txt

# Save Work To Stash
git stash

# Save Work To Stash With Description
git stash save "Description Here"

# List Items in Stash
git stash list

# Get Work From Last Stash
git stash pop

# Get Specific Stash Using ID
git stash pop stash@{2}

# Delete Stash Using ID
git stash drop stash@{1}

# Show Lastest Added Stash Content
git stash show

# Empty The Stash
git stash clear
```

## التعامل مع tags

```
# Show All Tags
git tag

# Add New Lightweight Tag
git tag "Version Name Or Tag Name Here ex: v1.0"

# Add New Annotated Tag
git tag -a "Version Name Or Tag Name Here" -m "Description Or Message"

# Push Tag To Remote
git push origin "Tag Name Here ex: v1.0"

# List All Tags Starting With v1.
git tag -l "v1.*"

# Delete Tag
git tag -d "Version Name Or Tag Name Here ex: v1.0"

# Delete Tag From Remote
git push origin --delete "Version Name Or Tag Name Here"
```

لإنشاء release نذهب الى موقع github و نقوم بكل شيئ هناك

## التعديلات config

- عرض التعديلات

```
git config -l
// or
git config --list 
```
- عرض الايميل و اسم المستخدم

```
git config --global user.name
git config --global user.email
```

- اعطاءهم قيمة 


```
git config --global user.name "abdurahman-ghazi"
git config --global user.email "abdurahman-ghazi@email.com"
```

- حذف القيمة منهم

```
git config --global user.name ""
// or
git config --global --unset user.name
```
- لإجراء تعديلات على git ندخل على home/usename/.gitconfig و نعدل عليه و نظيف اليه alias على سبييل المثال

## انشاء موقع على  github page

ننشئ مستودع و نسميه هكذا باستعمال username

```
abdurahman-ghazi.github.io
```

## لدفع البرنامج الى github

```
git add .
git commit -m "اضافة localStorage"
git push -u origin main
```
ثم ندخل الاسم و التوكن الذي يعتبر password

```
username: abdurahman-ghazi
password: xyz
```
## دفع ملف dist فقط

أولا تثبيب gh-pages

```
yarn add gh-pages -D
```

ثم نظيف deploy الى scripts

```
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

و أخيرا 

```
yarn deploy
```

## إنشاء ssh key

نحتاج هذه الطريقة لتفادي كتابة username و password(token) في كل مرة 

```
ssh-keygen -t rsa -b 4096 -C "abdurahman-ghazi@email.com"
```

ثم نظغط enter و نكتب كلمة السر و نكررها , طبعا عليك حفظ كلمة السر لأنك ستستعملها في كل مرة

نقوم بطباعة key هكذا 

```
cat /home/ghazi/.ssh/id_rsa.pub
```

نقوم بنسخه و نذهب إلى github.com نسجل الدخول ثم نذهب الى settings => ssh and gpg keys و نضغط new ssh key 

اخيرا نقوم بلصق key في الخانة key 

في title اكتب اي شيئ و نضغظ add ssh key 


الآن لتجربة الاتصال

```
ssh -T git@github.com
```

**ملاحظة هامة** : لن يعمل ssh الا اذا كان origin نوعه ssh و ليس https

مثال :

```
git@github.com:abdurahman-ghazi/markdown-arabic-vue.git
```

و ليس 

```
https://github.com/abdurahman-ghazi/markdown-arabic-vue.git
```

طبعا لمعرفة origin 

```
git remote show origin
```

لحذف origin 

```
git remote remove origin
```

لإضافة origin 

```
git remote add origin git@github.com:abdurahman-ghazi/markdown-arabic-vue.git
```
