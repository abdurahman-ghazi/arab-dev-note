<script setup lang="ts">
import { MoonIcon, StarIcon } from '@heroicons/vue/24/solid'
</script>

<template>
    <header class='h-16 w-screen'>
            <div class='flex md:flex-row justify-between text-sm h-full items-center md:w-2/3 p-6 md:px-6 mx-auto backdrop-blur text-white text-md'>
                <!-- Right Section -->
                <NuxtLink to="/"><p class='font-bold shadow-slate-50 px-2 py-1 cursor-pointer'>ملاحظاتي</p></NuxtLink>
                <!-- Left Section -->
                <div class='flex flex-row gap-6 items-center'>
                <p>البرنامج</p>
                <p>المنشورات</p>
                <p>تواصل بنا</p>
                <!-- Islamic Icon -->
                <div class="flex flex-row relative">    
                <StarIcon class="h-3 w-3 text-yellow-700 top-0 right-0 absolute"/>
                <MoonIcon class="h-7 w-7 text-yellow-700"/>
                </div>
                </div>
            </div>
        </header>
</template>
