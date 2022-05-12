<template>
  <div>
    <div class="my-12 w-11/12 mx-auto">
      <!-- <button @click="$fetch">Refresh</button> -->
      <p v-if="$fetchState.pending">Loading ...</p>
      <p v-else-if="$fetchState.error">An error occurred :(</p>
      <section class="grid md:grid-cols-2 gap-5 md:gap-7 lg:gap-10 md:gap-7">
        <div
          class="card flex gap-3"
          v-for="artikel in artikels"
          :key="artikel.title"
        >
          <div class="w-4/12">
            <img
              :src="artikel.image"
              :alt="artikel.title"
              class="rounded-md h-30 md:h-44"
            />
          </div>
          <div class="w-7/12 md:w-full">
            <p class="text-xs xl:text-sm text-gray-400 font-medium md:mt-2">
              {{ artikel.updatedAt }}
            </p>
            <NuxtLink
              :to="`/artikel/${artikel.slug}`"
              class="text-md md:text-base lg:text-lg xl:text-xl font-bold"
            >
              {{ artikel.title }}
            </NuxtLink>
            <p class="text-xs md:text-sm">
              {{ artikel.description }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      artikels: [],
    }
  },
  async fetch() {
    this.artikels = await fetch('https://api.nuxtjs.dev/mountains').then(
      (res) => res.json()
    )
  },
}
</script>

<style>
</style>