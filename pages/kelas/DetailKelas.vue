<template>
  <div class="md:w-11/12 mx-auto">
    <section class="md:mt-12">
      <div class="md:hidden">
        <iframe
          class="youtube-size"
          src="https://www.youtube.com/embed/YjmLFdXiCJU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="w-11/12 mx-auto py-4">
          <NuxtLink
            to="/"
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
              Mastering React JS: Progressive Web Apps (E-Commerce)
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
            src="https://www.youtube.com/embed/YjmLFdXiCJU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div class="w-11/12 mx-auto py-4">
            <NuxtLink
              to="/cart"
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

    <section class="w-11/12 mt-7 mx-auto">
      <div class="md:w-5/12">
        <h1 class="text-lg md:text-xl lg:text-2xl font-semibold">Deskripsi</h1>
        <h4 class="text-fsm">
          Agile development adalah sekumpulan cara kerja dalam mengembangkan
          produk digital yang didasarkan pada beberapa prinsip utama, yaitu
          pengembangan produk jangka pendek dan membutuhkan adaptasi yang cepat
          terhadap kebutuhan pasar. Dengan mengikuti kelas ini, kamu akan
          mendapatkan : - Materi lengkap dari kelas agile sanbercode ( termasuk
          update konten ) - Uji pemahaman dengan melaksanakan tugas yang
          diberikan secara harian - Uji pemahaman dasar mengenai scrum dengan
          mengikuti sertifikasi fundamental Scrum (dibantu oleh trainer) - Studi
          kasus untuk menguji kemampuan melakukan pengembangan produk digital
          secara agile - Berbagai template dokumentasi yang didesain khusus
          untuk pengembangan produk digital secara agile - Praktek menyusun
          daftar kebutuhan dan melakukan prioritisasi backlog - Akses ke sesi
          live bersama trainer sebanyak 2 kali pertemuan - Sertifikat setelah
          penyelesaian kelas Agile dari sanbercode
        </h4>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
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