<template>
  <nav
    class="
      relative
      flex flex-wrap
      items-center
      justify-between
      xl:px-8
      py-3
      bg-primary
    "
  >
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        md:flex md:items-center
        justify-between
        w-full
      "
    >
      <div
        class="w-full relative flex px-3 justify-between md:w-3/12 items-center"
      >
        <NuxtLink to="/">
          <img src="img/logo.png" alt="logo" class="h-4 lg:h-5" />
        </NuxtLink>
        <button
          class="
            text-gray-700
            cursor-pointer
            text-xl
            leading-none
            px-3
            py-1
            border border-solid border-transparent
            rounded
            bg-transparent
            block
            md:hidden
            outline-none
            focus:outline-none
          "
          type="button"
          v-on:click="toggleNavbar()"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div
        v-bind:class="{ hidden: !showMenu, flex: showMenu }"
        class="md:flex md:flex-grow items-center lg:w-5"
      >
        <ul class="flex flex-col md:flex-row list-none ml-auto md:items-center">
          <li class="nav-item">
            <NuxtLink
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                font-medium
                md:text-sm
                lg:text-base
                leading-snug
                text-gray-700
                hover:opacity-75
              "
              to="/kelas"
            >
              Kelas Online
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                font-medium
                md:text-sm
                lg:text-base
                leading-snug
                text-gray-700
                hover:opacity-75
              "
              to="/karya-kita"
            >
              Karya Kita
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                font-medium
                md:text-sm
                lg:text-base
                leading-snug
                text-gray-700
                hover:opacity-75
              "
              to="/artikel"
            >
              Artikel
            </NuxtLink>
          </li>
          <div class="flex items-center">
            <li class="nav-item">
              <NuxtLink
                class="
                  px-3
                  py-2
                  flex
                  items-center
                  text-xs
                  font-medium
                  md:text-sm
                  lg:text-base
                  leading-snug
                  text-gray-700
                "
                to="/cart"
              >
                <i class="fas fa-cart-plus text-xl">{{ totalQty }}</i>
              </NuxtLink>
            </li>
            <!-- <li class="nav-item">
              <NuxtLink
                class="
                  px-3
                  py-2
                  flex
                  items-center
                  text-xs
                  font-medium
                  md:text-sm
                  lg:text-base
                  leading-snug
                  text-gray-700
                "
                to="/login"
              >
                <ButtonPrimary ButtonPrimary="Login" />
              </NuxtLink>
            </li> -->
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Navbar-Layout',
  data() {
    return {
      showMenu: false,
    }
  },
  computed: {
    ...mapGetters(['cart']),
    totalQty() {
      return this.cart.reduce((a, b) => a + b.qty, 0)
    },
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu
    },
  },
}
</script>

<style>
</style>