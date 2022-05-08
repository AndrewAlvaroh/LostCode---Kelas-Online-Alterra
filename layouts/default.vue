<template>
  <v-app>
    <Navbar />
    <nuxt />
    <Footer />
  </v-app>
</template>


<script>
import Footer from '~/components/Footer.vue'
import Navbar from '~/components/Navbar.vue'

export default {
  name: 'DefaultVue',
  components: { Navbar, Footer },
}
</script>
<script>
