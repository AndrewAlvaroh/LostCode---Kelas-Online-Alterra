<template>
  <div>
    <p v-if="$nuxt.isOnline">Onlen</p>
    <p v-if="$nuxt.isOffline">Oplen</p>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style>
.bg-primary {
  background-color: #f4fdfe;
}
</style>
