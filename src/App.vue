<template>
  <div id="app" class="min-h-screen font-sans text-slate-800">
    <header class="border-b py-4">
      <div class="container mx-auto px-6 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br  flex items-center justify-center">
            <img src="/images/header_logo.jpg" alt="">
          </div>
          <div>
            <h1 class="text-xl font-semibold">Founders Circle</h1>
          </div>
        </div>
        <nav class="hidden md:flex gap-6 text-sm text-slate-600">
          <a href="#hero" class="hover:text-slate-900">Home</a>
          <a href="#about" class="hover:text-slate-900">About</a>
          <a href="#how" class="hover:text-slate-900">Format</a>
          <a href="#meetup" class="hover:text-slate-900">Next Meetup</a>
          <a href="#partners" class="hover:text-slate-900">Partners</a>
        </nav>
      </div>
    </header>

    <main class="container mx-auto px-6 py-10">
      <!-- Hero -->
      <section id="hero" class="relative overflow-visible mt-6">
        <div class="hero-gradient p-10 rounded-lg card-shadow relative overflow-hidden">
          <div class="hero-decor"></div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-20">
            <div class="max-w-xl">
              <div class="inline-flex items-center gap-3 bg-white/60 backdrop-blur rounded-full px-3 py-1 text-sm font-medium text-slate-700">Community • Tashkent</div>
              <h2 class="mt-6 text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 anim-fade-up">Founders Circle</h2>
              <p class="mt-4 text-lg text-slate-700 anim-fade-up anim-fade-up-delay-1">A grassroots community for early-stage startup founders — collaboration, learning, and mutual support.</p>

              <div class="mt-6 grid sm:grid-cols-2 gap-4">
                <div class="bg-white p-5 rounded-lg border border-slate-100 hover-raise anim-fade-up anim-fade-up-delay-2">
                  <h4 class="font-semibold">Our mission is simple</h4>
                  <p class="mt-2 text-sm text-slate-600">Connect founders. Inspire founders. Empower founders.</p>
                </div>
                <div class="bg-white p-5 rounded-lg border border-slate-100 hover-raise anim-fade-up anim-fade-up-delay-3">
                  <h4 class="font-semibold">No suits. No formality.</h4>
                  <p class="mt-2 text-sm text-slate-600">Just ideas, people, and pizza. Regular meetups for demos and networking.</p>
                </div>
              </div>

              <div class="mt-6 flex gap-3">
                <a class="px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded shadow link-underline anim-fade-up" href="#meetup">Next Meetup</a>
                <a class="px-5 py-3 border border-slate-200 rounded text-slate-700 link-underline anim-fade-up anim-fade-up-delay-1" href="https://joinfounders.uz/" target="_blank">Register</a>
              </div>
            </div>

            <div class="flex justify-center">
              <div class="relative hero-figure w-full max-w-md">
                <div class="rounded-xl overflow-hidden bg-white card-shadow anim-float">
                  <img src="/images/hero.jpg" alt="Founders Circle hero" class="w-full h-100% object-cover" />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About -->
      <section id="about" class="mt-12">
        <div class="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 class="text-3xl font-bold anim-fade-up">About the initiative</h3>
            <p class="mt-4 text-slate-700 text-lg anim-fade-up anim-fade-up-delay-1">In Uzbekistan, early-stage founders often face similar challenges: finding a team, validating ideas, getting early feedback, and connecting with the right people. Founders Circle exists to solve exactly that.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-6 bg-white rounded-lg border border-slate-100 feature-card hover-raise anim-fade-up anim-fade-up-delay-2">
              <h4 class="font-semibold">Share work</h4>
              <p class="mt-2 text-slate-600 text-sm">Share prototypes, progress, or early concepts and get direct feedback.</p>
            </div>
            <div class="p-6 bg-white rounded-lg border border-slate-100 feature-card hover-raise anim-fade-up anim-fade-up-delay-3">
              <h4 class="font-semibold">Find teammates</h4>
              <p class="mt-2 text-slate-600 text-sm">Meet potential co-founders and collaborators among peers.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- How the Sessions Work -->
      <section id="how" class="mt-12">
        <h3 class="text-2xl font-bold">How the Sessions Work</h3>
        <div class="mt-6 grid md:grid-cols-3 gap-6">
          <div class="p-6 bg-white rounded-lg border border-slate-100 feature-card anim-fade-up">
            <div class="text-3xl font-bold text-sky-500">✅</div>
            <h4 class="mt-3 font-semibold">10 founders</h4>
            <p class="mt-2 text-slate-600 text-sm">Compact, focused sessions so everyone gets time.</p>
          </div>
          <div class="p-6 bg-white rounded-lg border border-slate-100 feature-card anim-fade-up anim-fade-up-delay-1">
            <div class="text-3xl font-bold text-sky-500">⏱️</div>
            <h4 class="mt-3 font-semibold">3 minutes</h4>
            <p class="mt-2 text-slate-600 text-sm">Quick demos or presentations — garage prototypes to early MVPs.</p>
          </div>
          <div class="p-6 bg-white rounded-lg border border-slate-100 feature-card anim-fade-up anim-fade-up-delay-2">
            <div class="text-3xl font-bold text-sky-500">🍕</div>
            <h4 class="mt-3 font-semibold">Pizza & chat</h4>
            <p class="mt-2 text-slate-600 text-sm">Open conversation and networking after the pitches.</p>
          </div>
        </div>
      </section>

      <!-- Next Meetup -->
      <section id="meetup" class="mt-12">
        <div class="grid md:grid-cols-2 gap-6 items-center">
          <div class="p-8 bg-white rounded-lg border border-slate-100 card-shadow anim-fade-up">
            <h3 class="text-2xl font-bold">Next Meetup</h3>
            <div class="mt-4 text-slate-700">
              <p>📆 <strong>November 28</strong></p>
              <p>🕕 <strong>6:00 PM (UTC+5)</strong></p>
              <p>📍 <strong>American University of Technology, Tashkent</strong></p>
            </div>
            <div class="mt-6">
              <a class="inline-block px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded link-underline" href="https://joinfounders.uz/" target="_blank">Register</a>
              <a class="inline-block ml-3 px-5 py-3 border border-slate-200 rounded text-slate-700 link-underline" href="https://t.me/founders_circle" target="_blank">Telegram</a>
            </div>
          </div>
          <div>
            <p class="text-slate-700">Come with a prototype, a story, or just curiosity. We keep sessions light and practical so you can learn and connect fast.</p>
          </div>
        </div>
      </section>

      <!-- Partners -->
      <section id="partners" class="mt-12">
        <h3 class="text-2xl font-bold">Partners</h3>
        <p class="mt-3 text-slate-700">Founders Circle is proudly co-organized and supported by:</p>
        <div class="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
          
            <a href="https://www.undp.org/uzbekistan" target="_blank" class="flex items-center justify-center p-6 bg-white border rounded">
              <img src="/images/undp.png" alt="UNDP" class="h-16 sm:h-20 object-contain" />
            </a>
          
          
            <a href="https://aut-edu.uz/" target="_blank" class="flex items-center justify-center p-6 bg-white border rounded">
              <img src="/images/aut.jpg" alt="AUT" class="h-16 sm:h-20 object-contain" />
            </a>
          
            <a href="https://yoshlarventures.uz/en/" target="_blank" class="flex items-center justify-center p-6 bg-white border rounded">
              <img src="/images/yoshlarvent.jpg" alt="Yoshlar Ventures" class="h-16 sm:h-20 object-contain" />
            </a>
          
            <a href="https://aisha.group/en" target="_blank" class="flex items-center justify-center p-6 bg-white border rounded">
              <img src="/images/aisha.jpg" alt="Aisha" class="h-16 sm:h-20 object-contain rounded-full" />
            </a>
          
        </div>
      </section>

      <!-- Gallery / Previous Meetups -->
      <section id="gallery" class="mt-12">
        <h3 class="text-2xl font-bold">Previous Meetups</h3>
        <p class="mt-2 text-slate-700">Founders Circle has already hosted multiple sessions bringing together passionate builders, students, and early-stage entrepreneurs. Our past gatherings featured live demos, product showcases, and spontaneous collaborations — all in a warm, friendly environment.</p>

        <div class="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/images/photo_2025-11-14_14-03-19.jpg" alt="meetup 1" class="gallery-thumb" />
          <img src="/images/photo_2025-11-14_14-03-37.jpg" alt="meetup 2" class="gallery-thumb" />
          <img src="/images/photo_2025-11-14_14-03-43.jpg" alt="meetup 3" class="gallery-thumb" />
          <img src="/images/photo_2025-11-14_14-03-50.jpg" alt="meetup 4" class="gallery-thumb" />
        </div>
      </section>
    </main>

    <footer class="border-t py-6">
      <div class="container mx-auto px-6 text-center text-sm text-slate-600">© Founders Circle — community for early-stage founders in Tashkent</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Keep global styles minimal; Tailwind handles the rest. */
#app { max-width: 1100px; margin: 0 auto }
</style>
