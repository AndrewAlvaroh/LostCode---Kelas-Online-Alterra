<template>
  <div class="bg-primary">
    <section class="px-6">
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

    <section>
      <h5>
        <h5 class="font-semibold text-sm lg:text-base" style="color: #1a8ac9">
          Together we can do!
        </h5>
      </h5>
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
