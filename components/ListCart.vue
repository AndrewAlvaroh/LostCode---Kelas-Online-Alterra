<template>
  <div>
    <div class="w-10/12 mx-auto border-2 border-black">
      <div v-for="item in cart" :key="item.id">
        <div class="flex gap-5 w-8/12 mx-auto py-8">
          <div class="w-3/12">
            <img :src="item.imgUrl" :alt="item.title" class="rounded-lg" />
          </div>
          <div class="w-9/12">
            <h1 class="text-2xl font-bold mt-4">{{ item.title }}</h1>

            <div class="flex justify-between">
              <div class="flex gap-3 mt-4">
                <button
                  @click="MinQty(item.id)"
                  class="bg-gray-400 hover:bg-gray-300 py-1 px-3 rounded-md"
                >
                  -
                </button>
                <h3>{{ item.qty }} Bulan</h3>
                <button
                  @click="plusQty(item.id)"
                  class="bg-gray-400 hover:bg-gray-300 py-1 px-3 rounded-md"
                >
                  +
                </button>
              </div>
              <button @click="DeleteItem(item.id)">
                <i class="fas fa-minus-circle text-red-500 text-2xl"></i>
              </button>
            </div>
            <NuxtLink :to="`/kelas/${item.slug}/asd`">
              <ButtonPrimary
                class="mt-4"
                ButtonPrimary="Gabung Kelas"
              ></ButtonPrimary>
            </NuxtLink>
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
    ...mapGetters(['cart']),
  },
  methods: {
    ...mapActions(['plusQty', 'MinQty', 'DeleteItem']),
  },
}
</script>

<style>
</style>