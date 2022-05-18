<template>
  <div
    class="md:pt-12 md:flex md:w-11/12 xl:w-10/12 gap-5 xl:gap-10 mx-auto"
    style="background-color: #f8f8f8"
  >
    <div class="md:w-8/12 lg:w-9/12">
      <div>
        <iframe
          class="youtube-size"
          src="https://www.youtube.com/embed/YjmLFdXiCJU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="">
          <h1
            class="relative inline font-bold text-2xl lg:text-3xl xl:text-4xl"
          >
            <!-- <pre>{{ detailKelas }}</pre> -->
            {{ detailKelas.materi[0].name }}
          </h1>
          <ul class="list-disc">
            <li class="text-gray-700 font-semibold">
              <!-- {{ detailKelas.materi.name }} -->
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="
        md:w-4/12
        lg:w-3/12
        mt-10
        md:mt-0
        border
        md:border-0 md:bg-white
        shadow-md
        pt-4
        lg:pt-8 lg:px-2
        rounded-lg
      "
    >
      <div class="w-11/12 mx-auto">
        <h1 class="text-2xl md:text-xl xl:text-2xl font-semibold">
          {{ detailMateri.materi }}
        </h1>
        <ul v-for="item in detailKelas.materi" :key="item.id">
          <li
            class="
              bg-materi
              flex
              items-center
              text-lg
              md:text-base
              lg:text-lg
              xl:text-xl
              gap-4
              px-6
              py-3
              rounded-3xl
              font-medium
              my-2
              md:my-3
              lg:my-4
            "
          >
            <i class="fas fa-play-circle"></i
            ><NuxtLink :to="`/kelas/${detailKelas.slug}/${item.name}`">{{
              item.name
            }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import products from '~/mock/products.json'
export default {
  data() {
    return {
      detailKelas: [],
      detailMateri: [],
    }
  },
  created() {
    const data = products.filter(
      (item) => item.slug === this.$route.params.title
    )
    // const detailMateri = data.materi.find(
    //   (materi) => materi.name === this.$route.params.materi
    // )

    this.detailKelas = data[0]
    // this.detailMateri = detailMateri
    console.log(this.detailKelas)
    console.log('data :', data)
  },
  methods: {},
}
</script>

<style>
.bg-materi {
  background-color: #e5e9f2;
  color: #4c506d;
}

.bg-materi:hover {
  background-color: #7aa8ea;
  color: white;
}

.youtube-size {
  width: 100%;
  height: 200px;
}

@media only screen and (min-width: 600px) {
  .youtube-size {
    width: 100%;
    height: 220px;
  }
}

@media only screen and (min-width: 768px) {
  .youtube-size {
    width: 100%;
    height: 260px;
  }
}

@media only screen and (min-width: 992px) {
  .youtube-size {
    width: 100%;
    height: 340px;
  }
}
</style>