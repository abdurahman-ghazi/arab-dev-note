---
title: "تعديلات neovim"
updated: "2 ربيع الثاني 1444 ﻬ"
heroImage: "https://raw.githubusercontent.com/keeferrourke/la-capitaine-icon-theme/master/apps/scalable/vim.svg"
---

# بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ

## اولا يجب تثبيت vim-plug و هذا سهل في linux :rocket:

```bash
sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs \
       https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
```

## ثانيا ننسخ هذا في init.vim

**ملاحظة** : كل ما يسبقه علامة الإقتباس المزدوجة " عبارة عن تعليق comment

```
set number
set mouse=a
set encoding=UTF-8
filetype plugin indent on
" show existing tab with 4 spaces width
set tabstop=4
" when indenting with '>', use 4 spaces width
set shiftwidth=4
" On pressing tab, insert 4 spaces
set expandtab

call plug#begin()

Plug 'neoclide/coc.nvim', {'branch': 'release'}
Plug 'preservim/nerdtree'
Plug 'ryanoasis/vim-devicons'
Plug 'folke/tokyonight.nvim', { 'branch': 'main' }
Plug 'frazrepo/vim-rainbow'
Plug 'dsznajder/vscode-es7-javascript-react-snippets', { 'do': 'yarn install --frozen-lockfile && yarn compile' }
Plug 'yaegassy/coc-tailwindcss3', {'do': 'yarn install --frozen-lockfile'}
Plug 'prettier/vim-prettier', { 'do': 'yarn install --frozen-lockfile --production' }

call plug#end()

" activate vim rainbow
let g:rainbow_active = 1

" NERDTree shortcuts
nnoremap <leader>n :NERDTreeFocus<CR>
nnoremap <C-n> :NERDTree<CR>
nnoremap <C-t> :NERDTreeToggle<CR>
nnoremap <C-f> :NERDTreeFind<CR>


" Setting theme
colorscheme tokyonight

" Ctrl-Y for copying into the clipboard and Ctrl-P to paste from the clipboard
nnoremap <C-y> "+y
vnoremap <C-y> "+y
nnoremap <C-p> "+gP
vnoremap <C-p> "+gP

" autocomplete for quotes and so on
inoremap " ""<left>
inoremap ' ''<left>
inoremap ( ()<left>
inoremap [ []<left>
inoremap { {}<left>

```

## ثالثا تثبيت plugins داخل neovim
```
:PlugInstall
```

```
:LspInstall tailwindcss
```

