<template>
  <section id="about" class="about">
    <div class="about__container">
      <!-- 2-COLUMN LAYOUT -->
      <div class="about__grid">
        <!-- LEFT: INTRO TEXT -->
        <div class="about__intro">
          <h2 class="section-title">About <span>Us</span></h2>
          <p>
            At Diverse Oral Core, we are committed to excellence in dental care.
            With a welcoming atmosphere and cutting-edge technology, we deliver
            personalized, stress-free treatment for patients of all ages.
          </p>
          <p>
            Your comfort and smile are our top priorities. Our expert staff make
            every visit seamless, whether it’s a routine checkup or an advanced
            procedure.
          </p>
        </div>

        <!-- RIGHT: DENTIST PROFILE SLIDER -->
        <div class="team">
          <h3 class="team__title">Meet Our Professional Dentists</h3>

          <transition name="slide" mode="out-in">
            <div class="dentist-card" :key="dentists[currentIndex].name">
              <div class="dentist-card__img-wrapper">
                <img
                  :src="dentists[currentIndex].image"
                  :alt="dentists[currentIndex].name"
                  class="dentist-card__img"
                />
                <div class="dentist-card__overlay">
                  <h4>{{ dentists[currentIndex].name }}</h4>
                  <p>{{ dentists[currentIndex].bio }}</p>
                </div>

                <!-- CONTROLS ON LEFT & RIGHT -->
                <button
                  class="carousel-btn prev"
                  @click="prevDentist"
                  aria-label="Previous dentist"
                >
                  ‹
                </button>
                <button
                  class="carousel-btn next"
                  @click="nextDentist"
                  aria-label="Next dentist"
                >
                  ›
                </button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import hero1 from "@/Assets/images/about1.png";
import hero2 from "@/Assets/images/about2.png";
import hero3 from "@/Assets/images/about3.png";

const dentists = ref([
  {
    name: "Dr. Maria Santos",
    image: hero3,
    bio: "Orthodontist with 10+ years of experience aligning smiles with modern braces and aligners.",
  },
  {
    name: "Dr. Jane Robles",
    image: hero2,
    bio: "Cosmetic Dentist who specializes in veneers, whitening, and aesthetic smile makeovers.",
  },
  {
    name: "Dr. Miguel De Vera",
    image: hero1,
    bio: "General Dentist focused on preventive care, restorations, and patient education.",
  },
]);

const currentIndex = ref(0);
let autoSlideInterval = null;

const nextDentist = () => {
  currentIndex.value = (currentIndex.value + 1) % dentists.value.length;
};

const prevDentist = () => {
  currentIndex.value =
    (currentIndex.value - 1 + dentists.value.length) % dentists.value.length;
};

onMounted(() => {
  autoSlideInterval = setInterval(() => {
    nextDentist();
  }, 5000);
});

onUnmounted(() => {
  clearInterval(autoSlideInterval);
});
</script>

<style scoped>
/* === BASE STYLES === */
.about {
  background: linear-gradient(135deg, #ffffff, #f8fafc);
  padding: 5rem 1.5rem;
  font-family: "Inter", sans-serif;
  color: #131b42;
}

.about__container {
  max-width: 1200px;
  margin: auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.section-title span {
  color: #0ea5e9;
}

.about__intro p {
  font-size: 1.05rem;
  color: #475569;
  margin-bottom: 1.2rem;
  line-height: 1.7;
}

/* === GRID === */
.about__grid {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

/* === TEAM SLIDER === */
.team {
  text-align: center;
  position: relative;
  min-height: auto;
}

.team__title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #131b42;
}

/* SLIDE ANIMATION */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(80px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-80px);
}

/* === DENTIST CARD === */
.dentist-card__img-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
}

.dentist-card__img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 1rem;
  object-fit: contain; /* show the whole image */
  transition: transform 0.4s ease;
}

.dentist-card__img-wrapper:hover .dentist-card__img {
  transform: scale(1.02); /* gentle, modern hover */
}

/* === OVERLAY INFO === */
.dentist-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(19, 27, 66, 0.8);
  color: #fff;
  opacity: 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: opacity 0.4s ease;
  z-index: 2; /* sit below buttons */
  pointer-events: none; /* don’t block arrow clicks */
}

.dentist-card__img-wrapper:hover .dentist-card__overlay {
  opacity: 1;
}

.dentist-card__overlay h4 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.dentist-card__overlay p {
  font-size: 1rem;
  line-height: 1.5;
  max-width: 85%;
}

/* === CAROUSEL BUTTONS (hidden by default, show on hover) === */
.carousel-btn {
  --btn-offset: 12px; /* tweak this if needed */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  font-size: 1.5rem;
  border: none;
  border-radius: 999px;
  background: #131b42;
  color: #ffffff;
  cursor: pointer;
  transition: opacity 0.3s ease, background 0.25s ease, transform 0.2s ease,
    box-shadow 0.2s ease;
  z-index: 3; /* above overlay */
  display: grid;
  place-items: center;
  box-shadow: 0 4px 14px rgba(2, 8, 23, 0.15);

  /* hidden by default */
  opacity: 0;
  pointer-events: none;
}

.dentist-card__img-wrapper:hover .carousel-btn {
  opacity: 1;
  pointer-events: auto;
}

.carousel-btn.prev {
  left: var(--btn-offset);
}
.carousel-btn.next {
  right: var(--btn-offset);
}

.carousel-btn:hover {
  background: #0284c7;
  transform: translateY(-50%) scale(1.06);
}

.carousel-btn:focus-visible {
  outline: 3px solid #0ea5e9;
  outline-offset: 2px;
}

/* === RESPONSIVE === */
@media (min-width: 768px) {
  .about__grid {
    flex-direction: row;
    align-items: center;
    gap: 5rem;
  }

  .about__intro {
    flex: 1;
    padding-right: 2rem;
  }
  .team {
    flex: 1;
    min-height: 480px;
  }
}

/* Optional: nudge button offset on very small screens */
@media (max-width: 380px) {
  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 1.25rem;
  }
  .carousel-btn.prev {
    left: 8px;
  }
  .carousel-btn.next {
    right: 8px;
  }
}
</style>
