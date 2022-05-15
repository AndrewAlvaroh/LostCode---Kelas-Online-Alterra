<template>
  <div>
    <div class="md:mt-12">
      <iframe
        class="youtube-size"
        src="https://www.youtube.com/embed/YjmLFdXiCJU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div class="">
        <h1 class="relative inline font-bold text-2xl lg:text-3xl xl:text-4xl">
          Video – Setting up and Push
        </h1>
        <ul class="list-disc">
          <li class="text-gray-700 font-semibold">
            Version Control and Branch Management (Git)
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