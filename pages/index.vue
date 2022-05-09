<template>
  <div>
    <section class="px-6 bg-primary">
      <div class="flex justify-center md:hidden">
        <img src="img/content1.png" alt="content1" class="w-11/12" />
      </div>
      <div class="md:flex lg:w-12/12 items-center">
        <div class="lg:w-1/12"></div>
        <section class="md:w-1/2 lg:w-5/12">
          <div>
            <h5
              class="font-semibold text-sm lg:text-base"
              style="color: #1a8ac9"
            >
              Together we can do!
            </h5>
            <div class="font-bold text-4xl lg:text-5xl">
              <h1 class="relative inline">
                Mulai Perjalanan
                <img
                  src="img/component1.png"
                  class="h-10 absolute -top-5 -right-8"
                />
              </h1>
              <span class="block"> </span>
              Kuasai Skill <br />
              <h1 class="relative">
                Digitalmu
                <img
                  src="/img/component2.png"
                  class="w-11/12"
                  alt="component1"
                />
              </h1>
            </div>

            <h5 class="text-sm lg:text-base text-gray-600 pt-3 font-medium">
              Platform untuk siapapun yang ingin memulai kuasai skill digital
              dan berkembang dalam waktu singkat dengan cara yang mudah dan
              efektif tanpa perlu latar belakang IT
            </h5>
          </div>
          <ButtonPrimary
            ButtonPrimary="Daftar Kelas Online"
            class="inline-block mt-4"
          />
        </section>
        <div class="md:flex justify-center hidden md:w-1/2 lg:w-6/12">
          <img src="img/content1.png" alt="content1" class="lg:w-11/12" />
        </div>
      </div>
    </section>

    <section class="py-10">
      <div class="text-center">
        <h5 class="font-semibold text-sm lg:text-base" style="color: #1a8ac9">
          Masih ragu untuk memulai?
        </h5>
        <br />
        <h1 class="text-xl md:text-2xl lg:text-3xl font-bold">
          Apa Aja keuntungan <br />
          mengikuti bootcamp kami
        </h1>
      </div>
      <div style="background-color: #fdfdfd" class="mt-2 py-5">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 w-10/12 mx-auto">
          <div
            class="
              card
              bg-transparent
              hover:bg-white
              rounded-md
              p-3
              lg:p-4
              shadow-none
              hover:shadow-md
              duration-200
            "
          >
            <img src="img/component3.png" class="h-10 md:h-14" alt="" />
            <h5 class="font-semibold mt-1 md:text-md xl:text-lg">Gratis</h5>
            <p class="text-xs md:text-sm xl:text-md">
              Peserta bisa mendaftar gratis dan memilih lebih dari 1 program
            </p>
          </div>

          <div
            class="
              card
              bg-transparent
              hover:bg-white
              rounded-md
              p-3
              lg:p-4
              shadow-none
              hover:shadow-md
              duration-200
            "
          >
            <img src="img/component4.png" class="h-10 md:h-14" alt="" />
            <h5 class="font-semibold mt-1 md:text-md xl:text-lg">
              Waktu Flexibel
            </h5>
            <p class="text-xs md:text-sm xl:text-md">
              belajar kapanpun dan dimanapun
            </p>
          </div>
          <div
            class="
              card
              bg-transparent
              hover:bg-white
              rounded-md
              p-3
              lg:p-4
              shadow-none
              hover:shadow-md
              duration-200
            "
          >
            <img src="img/component5.png" class="h-10 md:h-14" alt="" />
            <h5 class="font-semibold mt-1 md:text-md xl:text-lg">Sertifikat</h5>
            <p class="text-xs md:text-sm xl:text-md">
              Menunjang portofolio tentang penguasaan Skill di Bidang Teknologi.
            </p>
          </div>
          <div
            class="
              card
              bg-transparent
              hover:bg-white
              rounded-md
              p-3
              lg:p-4
              shadow-none
              hover:shadow-md
              duration-200
            "
          >
            <img src="img/component6.png" class="h-10 md:h-14" alt="" />
            <h5 class="font-semibold mt-1 md:text-md xl:text-lg">
              Build Portofolio
            </h5>
            <p class="text-xs md:text-sm xl:text-md">
              Dapat menunjukan bukti dari skill yang dipelajarinya berupa
              project real
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Button from '~/components/ButtonPrimary.vue'
export default {
  components: { Button },
  name: 'IndexPage',
}
</script>

<style>
.bg-primary {
  background-color: #f4fdfe;
}
</style>
