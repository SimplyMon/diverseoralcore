<template>
  <section
    id="about"
    class="about"
    ref="aboutSection"
    :class="{ 'animate-enter': inView }"
  >
    <div class="about__container">
      <div class="about__grid">
        <div class="about__intro">
          <h2 class="section-title">About <span>Us</span></h2>
          <p>
            At Diverse Oral Core, we deliver excellence in dental care with
            cutting-edge technology and a welcoming atmosphere. Your comfort and
            smile are our top priorities, and our expert team makes every visit
            seamless—from routine checkups to advanced procedures. Meet our
            Doctors and experience professional care built on precision, trust,
            and results.
          </p>
          <p>
            Your comfort and smile are our top priorities. Our expert staff make
            every visit seamless, whether it’s a routine checkup or an advanced
            procedure.
          </p>
        </div>

        <div class="team">
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

                <!-- CONTROLS -->
                <button
                  class="carousel-btn prev"
                  @click="prevDentist"
                  aria-label="Previous dentist"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                </button>

                <button
                  class="carousel-btn next"
                  @click="nextDentist"
                  aria-label="Next dentist"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                  </svg>
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

// Section animation
const aboutSection = ref(null);
const inView = ref(false);

onMounted(() => {
  autoSlideInterval = setInterval(nextDentist, 6000);

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        inView.value = true;
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.2 }
  );

  if (aboutSection.value) observer.observe(aboutSection.value);
});

onUnmounted(() => {
  clearInterval(autoSlideInterval);
});
</script>

<style scoped>
/* Section animation */
.about {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.about.animate-enter {
  opacity: 1;
  transform: translateY(0);
}

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
  margin-bottom: 1rem;
}

.section-title span {
  color: #06b6d4;
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
  position: relative;
}

.dentist-card {
  position: relative;
  width: 100%;
}

/* SLIDE ANIMATION */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease;
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
  object-fit: contain;
  transition: transform 0.4s ease;
}

.dentist-card__img-wrapper:hover .dentist-card__img {
  transform: scale(1.02);
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
  z-index: 2;
  pointer-events: none;
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

/* === CAROUSEL BUTTONS === */
.carousel-btn {
  --btn-offset: 12px;
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
  z-index: 3;
  display: grid;
  place-items: center;
  box-shadow: 0 4px 14px rgba(2, 8, 23, 0.15);
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
    min-height: auto;
  }
}

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
