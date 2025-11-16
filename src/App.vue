<template>
  <div id="app" class="min-h-screen font-sans text-slate-800 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white to-white">
    <header class="border-b">
      <div class="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-lg overflow-hidden bg-white shadow-sm flex items-center justify-center">
            <img src="/images/header_logo.jpg" alt="logo" class="w-10 h-10 object-contain" />
          </div>
          <div>
            <h1 class="text-lg font-semibold">Founders Circle</h1>
            <p class="text-xs text-slate-500">Tashkent · Founders & Builders</p>
          </div>
        </div>
        <nav class="hidden md:flex gap-6 text-sm text-slate-600">
          <a href="#hero" class="hover:text-slate-900 link-underline">Home</a>
          <a href="#about" class="hover:text-slate-900 link-underline">About</a>
          <a href="#how" class="hover:text-slate-900 link-underline">Format</a>
          <a href="#meetup" class="hover:text-slate-900 link-underline">Next Meetup</a>
          <a href="#partners" class="hover:text-slate-900 link-underline">Partners</a>
        </nav>
      </div>
    </header>

    <main>
      <Hero />

      <section id="about" class="py-20">
        <div class="max-w-screen-xl mx-auto px-6">
          <div class="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 class="text-3xl font-bold">About the initiative</h2>
              <p class="mt-6 text-slate-700 text-lg">In Uzbekistan, early-stage founders often face similar challenges: finding a team, validating ideas, getting early feedback, and connecting with the right people. Founders Circle exists to solve exactly that by creating a supportive environment every two weeks where founders share, learn and connect.</p>
            </div>

            <div class="grid sm:grid-cols-2 gap-6">
              <SectionCard>
                <h4 class="font-semibold">Share work</h4>
                <p class="mt-2 text-slate-600 text-sm">Share prototypes, progress, or early concepts and get direct feedback.</p>
              </SectionCard>
              <SectionCard>
                <h4 class="font-semibold">Find teammates</h4>
                <p class="mt-2 text-slate-600 text-sm">Meet potential co-founders and collaborators among peers.</p>
              </SectionCard>
            </div>
          </div>
        </div>
      </section>

      <section id="how" class="py-20 bg-slate-50">
        <div class="max-w-screen-xl mx-auto px-6">
          <h3 class="text-2xl font-bold mb-6">How the Sessions Work</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <SectionCard class="text-center">
              <div class="text-4xl">✅</div>
              <h4 class="mt-3 font-semibold">10 founders</h4>
              <p class="mt-2 text-slate-600 text-sm">Compact, focused sessions so everyone gets time.</p>
            </SectionCard>
            <SectionCard class="text-center">
              <div class="text-4xl">⏱️</div>
              <h4 class="mt-3 font-semibold">3 minutes</h4>
              <p class="mt-2 text-slate-600 text-sm">Quick demos or presentations — garage prototypes to early MVPs.</p>
            </SectionCard>
            <SectionCard class="text-center">
              <div class="text-4xl">🍕</div>
              <h4 class="mt-3 font-semibold">Pizza & chat</h4>
              <p class="mt-2 text-slate-600 text-sm">Open conversation and networking after the pitches.</p>
            </SectionCard>
          </div>
        </div>
      </section>

      <section id="meetup" class="py-20">
        <div class="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 class="text-3xl font-bold">Next Meetup</h3>
            <div class="mt-4 text-slate-700">
              <p>📆 <strong>November 28</strong></p>
              <p>🕕 <strong>6:00 PM (UTC+5)</strong></p>
              <p>📍 <strong>American University of Technology, Tashkent</strong></p>
            </div>
            <div class="mt-6 flex gap-3">
              <a class="px-6 py-3 rounded-lg bg-sky-600 text-white font-semibold hover:scale-[1.02] transition-all" href="https://joinfounders.uz/" target="_blank">Register</a>
              <a class="px-6 py-3 rounded-lg border border-slate-200 text-slate-700" href="https://t.me/founders_circle" target="_blank">Telegram</a>
            </div>
          </div>
          <div>
            <p class="text-slate-700">Come with a prototype, a story, or just curiosity. We keep sessions light and practical so you can learn and connect fast.</p>
          </div>
        </div>
      </section>

      <Partners />

      <Gallery />
    </main>

    <footer class="border-t">
      <div class="max-w-screen-xl mx-auto px-6 py-8 text-center text-slate-600">© Founders Circle — community for early-stage founders in Tashkent</div>
    </footer>
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import SectionCard from './components/SectionCard.vue'
import Partners from './components/Partners.vue'
import Gallery from './components/Gallery.vue'

export default {
  name: 'App',
  components: { Hero, SectionCard, Partners, Gallery }
}
</script>

<style>
/* global layout constraints */
#app { max-width: none; }
</style>
