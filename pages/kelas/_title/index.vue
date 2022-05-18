<template>
  <div class="md:w-11/12 mx-auto">
    <section class="md:mt-12">
      <div class="md:hidden">
        <iframe
          class="youtube-size"
          :src="detailKelas.video1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="w-11/12 mx-auto py-4">
          {{ detailKelas.title }}
          <NuxtLink
            :to="`/kelas/${detailKelas.slug}/${detailKelas.materi1}`"
            class="
              block
              w-full
              text-center
              font-semibold
              text-white
              py-3
              rounded-lg
            "
            style="background-color: #00bcf1"
            >Gabung Kelas
          </NuxtLink>
        </div>
      </div>

      <div class="md:flex w-full">
        <div class="w-11/12 md:w-5/12 mx-auto">
          <div class="font-bold text-2xl lg:text-3xl xl:text-4xl">
            <h1 class="relative inline">
              {{ detailKelas.title }}
              <img src="/img/component2.png" class="w-11/12" alt="component1" />
            </h1>
          </div>

          <div
            class="
              grid grid-cols-2
              lg:grid-cols-3
              gap-2
              lg:gap-3
              w-full
              mt-6
              lg:mt-14
            "
          >
            <div
              class="
                flex
                items-center
                rounded
                py-2
                px-1
                shadow
                hover:shadow-base
                shadow-sm
                gap-2
              "
            >
              <img src="/img/component4.png" alt="comp" class="h-8" />
              <p class="text-sm font-medium">Waktu Flexibel</p>
            </div>
            <div
              class="
                flex
                items-center
                rounded
                py-2
                px-1
                shadow
                hover:shadow-base
                shadow-sm
                gap-2
              "
            >
              <img src="/img/component4.png" alt="comp" class="h-8" />
              <p class="text-sm font-medium">Waktu Flexibel</p>
            </div>
            <div
              class="
                flex
                items-center
                rounded
                py-2
                px-1
                shadow
                hover:shadow-base
                shadow-sm
                gap-2
              "
            >
              <img src="/img/component4.png" alt="comp" class="h-8" />
              <p class="text-sm font-medium">Waktu Flexibel</p>
            </div>
          </div>
        </div>

        <div class="hidden md:block md:w-6/12">
          <iframe
            class="youtube-size"
            :src="detailKelas.video1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div class="w-11/12 mx-auto py-4">
            <NuxtLink
              :to="`/kelas/${detailKelas.slug}/${detailKelas.materi1}`"
              class="
                block
                w-full
                text-center
                font-semibold
                text-white
                py-3
                rounded-lg
              "
              style="background-color: #00bcf1"
              >Gabung Kelas
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="w-11/12 mt-7 mx-auto flex justify-between">
      <div class="md:w-5/12">
        <h1 class="text-lg md:text-xl lg:text-2xl font-semibold">Deskripsi</h1>
        <h4 class="text-fsm">
          {{ detailKelas.desc }}
        </h4>
      </div>
      <div class="md:w-3/12">
        <img :src="detailKelas.imgProject" :alt="detailKelas.title" /> <br />
        <img :src="detailKelas.imgProject" :alt="detailKelas.title" />
      </div>
    </section>
  </div>
</template>

<script>
import products from '~/mock/products.json'
export default {
  data() {
    return {
      detailKelas: [],
    }
  },
  created() {
    const data = products.filter(
      (item) => item.slug === this.$route.params.title
    )
    this.detailKelas = data[0]
    console.log(this.detailKelas)
  },
  methods: {},
}
</script>

<style>
.youtube-size {
  width: 100%;
  height: 200px;
}
@media only screen and (min-width: 600px) {
  .youtube-size {
    width: 100%;
    height: 220px;
    border-radius: 10px;
  }
}
@media only screen and (min-width: 768px) {
  .youtube-size {
    width: 100%;
    height: 260px;
    border-radius: 10px;
  }
}
@media only screen and (min-width: 992px) {
  .youtube-size {
    width: 100%;
    height: 340px;
    border-radius: 10px;
  }
}
</style>
© 2022 GitHub, Inc.
Terms
Privacy
Security