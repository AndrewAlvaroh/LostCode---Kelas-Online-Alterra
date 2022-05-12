<template>
  <div>
    <div class="h-screen flex">
      <div
        class="hidden md:flex w-1/2 justify-around items-center"
        style="background-color: #f4fdfe"
      >
        <div>
          <img src="/img/content2.png" class="w-8/12 mx-auto" alt="" />
          <h1 class="font-bold text-4xl font-sans text-center mt-6">
            Tempat belajar yang asyik
          </h1>
        </div>
      </div>
      <div class="flex w-full md:w-1/2 justify-center items-center bg-white">
        <form class="bg-white">
          <h1 class="font-bold text-4xl mb-1" style="color: #1a8ac9">
            Selamat Datang
          </h1>
          <p class="text-sm font-normal text-gray-600 mb-7">
            Silahkan Masukan Email dan Password anda
          </p>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              class="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Email Address"
            />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              class="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            style="background-color: #00bcf1"
            class="
              block
              w-full
              mt-4
              py-2
              rounded-2xl
              text-white
              font-semibold
              mb-2
            "
          >
            Login
          </button>
          <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer"
            >Forgot Password ?</span
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'authLayout',
}
</script>

<style>
</style>