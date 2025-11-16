<template>
  <section class="relative overflow-hidden py-24">
    <div class="absolute inset-0 -z-10 bg-mesh opacity-30"></div>
    <div class="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <div class="inline-flex items-center gap-3 bg-white/60 backdrop-blur rounded-full px-3 py-1 text-sm font-medium text-slate-700">Community • Tashkent</div>
        <h1 class="mt-6 text-5xl md:text-6xl font-extrabold leading-tight text-slate-900">Founders Circle</h1>
        <h2 class="mt-4 text-3xl font-semibold text-slate-700 max-w-lg">A grassroots community for early-stage founders — collaboration, learning, and mutual support.</h2>

        <p class="mt-6 text-lg text-slate-600 max-w-xl">Co-organized by UNDP, Yoshlar Ventures, and the Office of Innovation & Entrepreneurship (OIE) at the American University of Technology. Regular informal meetups, demos, and networking to help founders learn and grow.</p>

        <div class="mt-8 flex gap-3">
          <a href="#meetup" class="px-6 py-3 rounded-lg bg-gradient-to-r from-sky-600 to-sky-500 text-white font-semibold shadow hover:scale-[1.02] transition-all">Next Meetup</a>
          <a href="https://joinfounders.uz/" target="_blank" class="px-6 py-3 rounded-lg border border-slate-200 text-slate-800 font-medium hover:shadow-lg transition-all">Register</a>
        </div>
      </div>

      <div class="relative flex justify-end">
        <div class="hidden md:block absolute -right-20 -top-16 w-72 h-full rounded-full bg-gradient-to-br from-sky-100 to-orange-50 opacity-60 blur-3xl"></div>
        <div class="relative w-full max-w-md rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.01] transition-all">
          <img src="/images/hero.jpg" alt="hero" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: 'Hero' }
</script>

<style scoped>
.bg-mesh{
  background-image: radial-gradient(circle at 10% 20%, rgba(14,165,233,0.06), transparent 10%), radial-gradient(circle at 80% 80%, rgba(251,146,60,0.04), transparent 12%);
}
</style>
