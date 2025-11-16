<template>
  <section class="py-20">
    <div class="max-w-screen-xl mx-auto px-6">
      <h3 class="text-2xl font-bold mb-4">Previous Meetups</h3>
      <p class="text-slate-600 mb-6">Our past gatherings featured live demos, product showcases, and spontaneous collaborations.</p>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <a v-for="(img, i) in images" :key="i" href="#" class="block overflow-hidden rounded-xl">
          <div class="relative overflow-hidden">
            <img :src="img" class="w-full h-48 object-cover transform transition-all hover:scale-105" />
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Gallery',
  data(){
    return {
      images: [
        '/images/photo_2025-11-14_14-03-19.jpg',
        '/images/photo_2025-11-14_14-03-37.jpg',
        '/images/photo_2025-11-14_14-03-43.jpg',
        '/images/photo_2025-11-14_14-03-50.jpg'
      ]
    }
  }
}
</script>

<style scoped>
</style>
