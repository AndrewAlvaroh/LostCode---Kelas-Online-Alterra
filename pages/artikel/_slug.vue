<template>
  <div>
    <main class="my-10">
      <div class="w-11/12 lg:w-7/12 mx-auto my-3">
        <NuxtLink to="/artikel">
          <i class="fas fa-angle-left"> Back</i></NuxtLink
        >
      </div>

      <div
        class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
        style="height: 24em"
      >
        <div
          class="absolute left-0 bottom-0 w-full h-full z-10"
          style="
            background-image: linear-gradient(
              180deg,
              transparent,
              rgba(0, 0, 0, 0.7)
            );
          "
        ></div>
        <img
          :src="artikel.image"
          class="
            absolute
            left-0
            top-0
            w-full
            h-full
            z-0
            object-cover
            opacity-80
          "
        />
        <div class="p-4 absolute bottom-0 left-0 z-20">
          <a
            href="#"
            class="
              px-4
              py-2
              bg-blue-800
              rounded-lg
              font-semibold
              text-gray-200
              inline-flex
              items-center
              justify-center
              mb-2
            "
            >{{ artikel.continent }}</a
          >

          <h2
            class="
              text-4xl
              font-semibold
              text-gray-100
              leading-tight
              opacity-100
            "
          >
            {{ artikel.title }}
          </h2>

          <div class="flex mt-3">
            <img
              src="https://randomuser.me/api/portraits/men/97.jpg"
              class="h-10 w-10 rounded-full mr-2 object-cover"
            />
            <div>
              <p class="font-semibold text-gray-200 text-sm">Mike Sullivan</p>
              <p class="font-semibold text-gray-400 text-xs">
                {{ artikel.updatedAt }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="
          px-4
          lg:px-0
          mt-12
          text-gray-700
          max-w-screen-md
          mx-auto
          text-lg
          leading-relaxed
        "
      >
        <p class="pb-6">
          {{ artikel.description }}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem minus fugiat corporis distinctio mollitia aut labore
          illo praesentium hic odit deserunt quam tempora enim, reiciendis animi
          consequuntur debitis fuga magnam neque est nam reprehenderit laborum.
          Voluptatum atque cum odit, eligendi delectus provident earum eveniet
          illo odio minus a iste ipsam rerum tenetur obcaecati nam doloribus hic
          necessitatibus minima, est dolor non similique mollitia! Veritatis
          expedita distinctio quisquam, eaque natus voluptatum! Perferendis hic
          eum ipsa ab necessitatibus molestiae aperiam, commodi amet alias
          doloribus aut modi asperiores nesciunt itaque eos iure natus veniam
          iste dolorum, excepturi quod delectus ea? Assumenda consectetur sit
          cupiditate adipisci ipsum necessitatibus, rerum earum doloremque ea?
          Eum maiores, eos repellendus vero ut quidem, non fuga, accusantium
          dicta assumenda nulla nesciunt id ipsum laboriosam magni. Ab, in
          sapiente? Minus laudantium exercitationem, veritatis vero facilis
          debitis iusto illum beatae ipsa esse omnis autem, corrupti fugit ab
          velit corporis. Harum, ratione dignissimos. Modi laudantium nam
          aspernatur quo natus, quas beatae odio placeat rerum ratione dicta ab
          voluptates perspiciatis voluptatum magni voluptas aliquam, repellendus
          amet quae velit voluptatibus obcaecati? Iusto beatae quod blanditiis
          fugiat modi voluptate qui molestias similique cupiditate odit quaerat
          ab commodi assumenda quis quam, praesentium id eligendi sit ipsum.
        </p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const artikel = await $axios.$get(
      `https://api.nuxtjs.dev/mountains/${params.slug}`
    )
    return { artikel }
  },
}
</script>

<style>
</style>