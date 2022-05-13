<template>
  <div
    class="
      grid grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-3
      lg:gap-5
      xl:gap-6
      w-11/12
      mx-auto
    "
  >
    <div v-for="item in products" :key="item.id">
      <div
        class="
          w-full
          bg-white
          rounded-2xl
          overflow-hidden
          shadow-lg
          hover:shadow-xl
          duration-500
          cursor-pointer
        "
      >
        <div class="p-2 mx-auto">
          <img
            :src="item.imgUrl"
            class="rounded-xl w-40 mx-auto"
            :alt="item.title"
          />
        </div>

        <div class="p-5">
          <h1 class="text-lg xl:text-xl font-semibold">
            {{ item.title }}
          </h1>
          <p class="mt-2 text-lg xl:text-xl font-medium text-gray-600">
            Rp. {{ item.price }}
          </p>
          <div class="flex w-full items-center mt-3 md:mt-4 lg:mt-5 xl:mt-6">
            <NuxtLink to="/kelas/detailkelas" class="w-10/12 xl:px-2">
              <ButtonPrimary ButtonPrimary="Lihat Kelas" />
            </NuxtLink>

            <button @click="addToCart(item)">
              <ButtonCart class="w-2/12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['products']),
  },
  methods: {
    ...mapActions(['getProducts', 'addToCart']),
  },
  mounted() {
    this.getProducts()
  },
}
</script>

<style>
</style>