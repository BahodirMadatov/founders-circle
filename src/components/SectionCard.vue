<template>
  <div :class="['bg-white/80 backdrop-blur-sm shadow-md rounded-xl p-6', extraClass]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SectionCard',
  props: { extraClass: { type: [String, Object, Array], default: '' } }
}
</script>

<style scoped>
/* intentionally minimal - visual controlled by Tailwind */
</style>
