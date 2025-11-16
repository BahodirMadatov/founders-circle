<template>
  <section class="py-20">
    <div class="max-w-screen-xl mx-auto px-6">
      <h3 class="text-2xl font-bold mb-4">Partners</h3>
      <p class="text-slate-600 mb-8">Founders Circle is proudly co-organized and supported by:</p>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        <div v-for="(logo, i) in logos" :key="i" class="flex items-center justify-center p-4 bg-white/60 backdrop-blur rounded-xl shadow-sm hover:shadow-lg transition-all">
          <img :src="logo.src" :alt="logo.alt" class="h-12 sm:h-14 object-contain grayscale hover:grayscale-0 transition-all" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Partners',
  data(){
    return {
      logos: [
        { src: '/images/undp.png', alt: 'UNDP' },
        { src: '/images/aut.jpg', alt: 'AUT' },
        { src: '/images/yoshlarvent.jpg', alt: 'Yoshlar Ventures' },
        { src: '/images/aisha.jpg', alt: 'Aisha' },
        { src: '/images/header_logo.jpg', alt: 'Founders Circle' }
      ]
    }
  }
}
</script>

<style scoped>
/* logos are shown in grayscale, reveal color on hover */
</style>
