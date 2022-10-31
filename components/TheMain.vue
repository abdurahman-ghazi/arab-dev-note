<script setup lang="ts">
    const { data: posts } = await useAsyncData('posts', () => queryContent('/').find())
</script>

<template>
	<main class='w-screen'>
            <div class='mt-20 md:w-2/3 md:mx-auto mx-3 backdrop-blur-sm bg-white/30 p-5'>
              <div class='flex flex-row gap-4'>
                <h1 class='text-2xl font-bold items-center'>آخر التدوينات</h1>
                <!-- <button class='text-sm bg-yellow-700 px-2 py-1 rounded-md mb-8'>شاهد الكل</button> -->
              </div>
              	<div v-for="post in posts" :key="post._id">
                	<NuxtLink :to="post._path">
						<div class='flex flex-row gap-4 mt-4 items-center font-semibold text-zinc-900 hover:text-black'>
							<div class='h-8 w-8 rounded-xl bg-zinc-100 overflow-hidden' ><img :src="post.heroImage" class='object-fill p-1' /></div>
							<h1 class='text-md transition ease-in-out delay-100 hover:bg-zinc-100/10 cursor-pointer px-2 py-1'>{{post.title}}</h1>
						</div>
					</NuxtLink>
				</div>
				<div>
              <div class='flex flex-row gap-4 mt-16'>
                <!-- <h1 class='text-2xl font-bold'>إلكترونيات</h1> -->
                <!-- <button class='text-sm bg-yellow-700 px-2 py-1 rounded-md mb-8'>شاهد الكل</button> -->
              </div>
            </div>
        </div>
          </main>
</template>