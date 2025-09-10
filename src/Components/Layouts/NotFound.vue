<template>
  <div class="not-found" role="main" aria-labelledby="nf-title">
    <!-- decorative layers -->
    <div class="bg-stars" aria-hidden="true"></div>
    <div class="bg-grid" aria-hidden="true"></div>
    <div class="blob blob-1" aria-hidden="true"></div>
    <div class="blob blob-2" aria-hidden="true"></div>

    <section class="card" tabindex="-1">
      <h1 id="nf-title" class="digits" aria-label="404">
        <span>4</span><span>0</span><span>4</span>
      </h1>

      <p class="tagline">
        Whoops! This page doesn’t exist yet — check back soon.
      </p>

      <router-link class="cta" to="/" aria-label="Go back home">
        <span class="sparkle" aria-hidden="true"></span>
        Go back home
      </router-link>

      <p class="hint">Or check the URL—maybe a tiny typo snuck in 👀</p>
    </section>

    <div class="comet" aria-hidden="true"></div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  mounted() {
    this.$el.querySelector(".card")?.focus();
  },
};
</script>

<style scoped>
/* -------- Theme tokens -------- */
:root,
:host {
  --bg: #0b0e1a;
  --fg: #e8ecff;
  --muted: #a3add3;
  --accent-1: #7b5cff;
  --accent-2: #21d4fd;
  --accent-3: #b721ff;
  --glass: rgba(255, 255, 255, 0.06);
  --glass-brd: rgba(255, 255, 255, 0.12);
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
}

/* -------- Layout -------- */
.not-found {
  position: relative;
  min-height: 100svh;
  display: grid;
  place-items: center;
  padding: clamp(20px, 3vw, 48px);
  background: radial-gradient(
      1200px 800px at 20% -10%,
      #1a1440 0%,
      transparent 60%
    ),
    radial-gradient(1000px 700px at 120% 110%, #001c31 0%, transparent 60%),
    var(--bg);
  overflow: hidden;
  color: var(--fg);
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji";
}

.card {
  position: relative;
  z-index: 3;
  width: min(680px, 92vw);
  padding: clamp(20px, 3.5vw, 36px);
  border-radius: 20px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.03)
  );
  backdrop-filter: blur(8px);
  border: 1px solid var(--glass-brd);
  box-shadow: var(--shadow);
  text-align: center;
  outline: none;
}

/* -------- Digits -------- */
.digits {
  font-weight: 800;
  letter-spacing: -0.03em;
  font-size: clamp(72px, 15vw, 160px);
  line-height: 0.8;
  margin: 0 0 6px;
  display: flex;
  justify-content: center;
  gap: clamp(6px, 1.5vw, 14px);
  user-select: none;
  background: linear-gradient(
    135deg,
    var(--accent-2),
    var(--accent-1),
    var(--accent-3)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 10px 24px rgba(123, 92, 255, 0.35));
}
.digits span {
  display: inline-block;
  transform-origin: 50% 80%;
  animation: wobble 2.8s ease-in-out infinite;
}
.digits span:nth-child(2) {
  animation-delay: 0.12s;
}
.digits span:nth-child(3) {
  animation-delay: 0.24s;
}

.tagline {
  margin: 6px 0 18px;
  color: var(--muted);
  font-size: clamp(14px, 1.6vw, 18px);
}

.hint {
  margin-top: 16px;
  font-size: 12px;
  opacity: 0.7;
}

/* -------- CTA Button -------- */
.cta {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid var(--glass-brd);
  background: radial-gradient(
      120% 120% at 0% 0%,
      rgba(33, 212, 253, 0.25),
      transparent 60%
    ),
    radial-gradient(
      120% 120% at 100% 100%,
      rgba(183, 33, 255, 0.2),
      transparent 60%
    ),
    rgba(255, 255, 255, 0.06);
  text-decoration: none;
  color: var(--fg);
  font-weight: 700;
  transition: transform 0.18s ease, box-shadow 0.18s ease,
    border-color 0.18s ease;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  will-change: transform;
}
.cta:hover,
.cta:focus-visible {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.35);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
}
.cta:active {
  transform: translateY(0);
}

/* sparkle ping */
.sparkle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(33, 212, 253, 0.7), 0 0 0 0 rgba(183, 33, 255, 0.7);
  animation: ping 2.2s infinite ease-out;
}

/* -------- Background candy -------- */
.bg-stars,
.bg-grid,
.blob,
.comet {
  position: absolute;
  pointer-events: none;
}

.bg-stars {
  inset: -20% -10%;
  background: radial-gradient(
      1px 1px at 10% 20%,
      rgba(255, 255, 255, 0.8) 99%,
      transparent 100%
    ),
    radial-gradient(
      1px 1px at 30% 80%,
      rgba(255, 255, 255, 0.7) 99%,
      transparent 100%
    ),
    radial-gradient(
      1px 1px at 55% 30%,
      rgba(255, 255, 255, 0.75) 99%,
      transparent 100%
    ),
    radial-gradient(
      1px 1px at 80% 60%,
      rgba(255, 255, 255, 0.65) 99%,
      transparent 100%
    ),
    radial-gradient(
      1px 1px at 70% 10%,
      rgba(255, 255, 255, 0.8) 99%,
      transparent 100%
    ),
    radial-gradient(
      1px 1px at 20% 65%,
      rgba(255, 255, 255, 0.7) 99%,
      transparent 100%
    ),
    radial-gradient(
      1px 1px at 90% 25%,
      rgba(255, 255, 255, 0.75) 99%,
      transparent 100%
    );
  opacity: 0.6;
  animation: drift 80s linear infinite;
}

.bg-grid {
  inset: -100% -40%;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.06) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 40px 40px, 40px 40px;
  transform: perspective(800px) rotateX(60deg) translateY(20%);
  filter: blur(1px) drop-shadow(0 30px 60px rgba(0, 0, 0, 0.35));
  opacity: 0.18;
  animation: gridScroll 16s linear infinite;
}

.blob {
  width: 48vmax;
  height: 48vmax;
  border-radius: 50%;
  filter: blur(60px) saturate(140%);
  mix-blend-mode: screen;
  z-index: 1;
  opacity: 0.45;
}
.blob-1 {
  top: -20vmax;
  left: -10vmax;
  background: radial-gradient(
      circle at 30% 30%,
      rgba(33, 212, 253, 0.28),
      transparent 60%
    ),
    radial-gradient(
      circle at 70% 70%,
      rgba(183, 33, 255, 0.28),
      transparent 60%
    );
  animation: float 22s ease-in-out infinite;
}
.blob-2 {
  bottom: -22vmax;
  right: -12vmax;
  background: radial-gradient(
      circle at 70% 40%,
      rgba(123, 92, 255, 0.28),
      transparent 60%
    ),
    radial-gradient(
      circle at 40% 80%,
      rgba(33, 212, 253, 0.22),
      transparent 60%
    );
  animation: float 26s ease-in-out -6s infinite;
}

.comet {
  --size: 10px;
  width: var(--size);
  height: var(--size);
  top: 15%;
  left: -10%;
  background: radial-gradient(
    circle at 30% 30%,
    #fff 0,
    #b8d8ff 60%,
    transparent 70%
  );
  border-radius: 50%;
  box-shadow: -40px 0 12px 2px rgba(184, 216, 255, 0.35),
    -80px 0 8px 1px rgba(184, 216, 255, 0.2);
  transform: rotate(15deg);
  animation: streak 7.5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
  opacity: 0.75;
}

/* -------- Animations -------- */
@keyframes wobble {
  0%,
  100% {
    transform: rotate(0deg) translateY(0);
  }
  20% {
    transform: rotate(-4deg) translateY(-4px);
  }
  40% {
    transform: rotate(3deg) translateY(4px);
  }
  60% {
    transform: rotate(-2deg) translateY(-2px);
  }
  80% {
    transform: rotate(2deg) translateY(2px);
  }
}

@keyframes ping {
  0% {
    box-shadow: 0 0 0 0 rgba(33, 212, 253, 0.7), 0 0 0 0 rgba(183, 33, 255, 0.7);
  }
  70% {
    box-shadow: 0 0 0 18px rgba(33, 212, 253, 0),
      0 0 0 36px rgba(183, 33, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(2%, -2%, 0) scale(1.05);
  }
}

@keyframes drift {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20%);
  }
}

@keyframes gridScroll {
  0% {
    background-position: 0 0, 0 0;
  }
  100% {
    background-position: 0 40px, 40px 0;
  }
}

@keyframes streak {
  0% {
    transform: translate3d(0, 0, 0) rotate(15deg);
    opacity: 0;
  }
  8% {
    opacity: 0.85;
  }
  50% {
    transform: translate3d(140vmax, 40vmin, 0) rotate(15deg);
    opacity: 0;
  }
  100% {
    transform: translate3d(140vmax, 40vmin, 0) rotate(15deg);
    opacity: 0;
  }
}

/* -------- Reduced motion & small screens -------- */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
  .blob,
  .bg-stars,
  .bg-grid,
  .comet {
    display: none !important;
  }
}

@media (max-width: 420px) {
  .hint {
    display: none;
  }
}
</style>
