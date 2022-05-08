<template>
  <nav
    class="
      relative
      flex flex-wrap
      items-center
      justify-between
      px-2
      py-3
      bg-primary
      mb-3
    "
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="
          w-full
          relative
          flex
          justify-between
          lg:w-auto
          px-4
          lg:static lg:block lg:justify-start
        "
      >
        <a
          class="
            text-sm
            font-bold
            leading-relaxed
            inline-block
            mr-4
            py-2
            whitespace-nowrap
            uppercase
            text-gray-700
          "
          href="#pablo"
        >
          Logoo
        </a>
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
            lg:hidden
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
        class="lg:flex lg:flex-grow items-center"
      >
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                text-gray-700
                hover:opacity-75
              "
              href="#pablo"
            >
              <i
                class="
                  fab
                  fa-facebook-square
                  text-lg
                  leading-lg
                  text-gray-700
                  opacity-75
                "
              /><span class="ml-2">Share</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                text-gray-700
                hover:opacity-75
              "
              href="#pablo"
            >
              <i
                class="
                  fab
                  fa-twitter
                  text-lg
                  leading-lg
                  text-gray-60700
                  opacity-75
                "
              /><span class="ml-2">Tweet</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                text-gray-700
                hover:opacity-75
              "
              href="#pablo"
            >
              <i
                class="
                  fab
                  fa-pinterest
                  text-lg
                  leading-lg
                  text-gray-700
                  opacity-75
                "
              /><span class="ml-2">Pin</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar-Layout',
  data() {
    return {
      showMenu: false,
    }
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