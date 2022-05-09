<template>
  <div>
    <button
      class="py-2 px-6 rounded-xl text-white font-semibold hover:opacity-75"
      style="background-color: #00bcf1"
    >
      {{ ButtonPrimary }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['ButtonPrimary'],
}
</script>

<style>
</style>