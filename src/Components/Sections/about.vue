<template>
  <section id="about" class="about">
    <div class="about__container">
      <!-- 2-COLUMN LAYOUT -->
      <div class="about__grid">
        <!-- LEFT: INTRO TEXT -->
        <div class="about__intro">
          <h2>About <span>Us</span></h2>
          <p>
            At Diverse Oral Core, we are committed to excellence in dental care.
            With a warm atmosphere and cutting-edge technology, we provide
            personalized, compassionate, and stress-free treatment for patients
            of all ages.
          </p>
          <p>
            Your comfort and smile are our top priorities. Our highly trained
            staff ensure every visit is seamless, whether it's a routine checkup
            or a more advanced procedure.
          </p>
        </div>

        <!-- RIGHT: DENTIST PROFILE SLIDER -->
        <div class="team">
          <p>Our Professional & Skilled Dentists Team</p>

          <transition name="slide" mode="out-in">
            <div class="dentist-card" :key="dentists[currentIndex].name">
              <img
                :src="dentists[currentIndex].image"
                :alt="dentists[currentIndex].name"
                class="dentist-card__img"
              />
              <div class="dentist-card__content">
                <h4>{{ dentists[currentIndex].name }}</h4>
                <p>{{ dentists[currentIndex].bio }}</p>
              </div>
              <div class="carousel-controls">
                <button @click="prevDentist">‹ Prev</button>
                <button @click="nextDentist">Next ›</button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
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

const nextDentist = () => {
  currentIndex.value = (currentIndex.value + 1) % dentists.value.length;
};

const prevDentist = () => {
  currentIndex.value =
    (currentIndex.value - 1 + dentists.value.length) % dentists.value.length;
};
</script>

<style scoped>
.about {
  background: #ffffff;
  padding: 4rem 1.5rem;
  font-family: "Poppins", sans-serif;
  color: #151a42;
}

.about__container {
  max-width: 1200px;
  margin: auto;
}

.about__grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about__intro h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.about__intro h2 span {
  color: #06b6d4;
}

.about__intro p {
  font-size: 1.1rem;
  color: #475569;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.team {
  text-align: center;
  position: relative; /* Needed for absolute positioning of transitions */
  min-height: 500px; /* Prevent layout jump during transitions */
}

.team p {
  font-size: 1.5rem;
  color: #0ea5e9;
}

/* Slide animation */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.dentist-card {
  background: #f9fafb;
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;
}

.dentist-card__img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 1rem;
  margin-bottom: 1rem;
  border: 3px solid #06b6d4;
}

.dentist-card__content h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #151a42;
}

.dentist-card__content p {
  color: #475569;
  font-size: 1rem;
  line-height: 1.5;
}

.carousel-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.carousel-controls button {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 999px;
  background-color: #0ea5e9;
  color: white;
  cursor: pointer;
  transition: 0.2s ease;
}

.carousel-controls button:hover {
  background-color: #0284c7;
}

/* Responsive Layout */
@media (min-width: 768px) {
  .about__grid {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4rem;
  }

  .about__intro {
    flex: 1;
    padding-right: 2rem;
  }

  .team {
    flex: 1;
  }
}
</style>
