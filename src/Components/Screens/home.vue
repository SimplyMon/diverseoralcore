<!-- second version -->
<!-- asd -->
<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <h1>Your Smile. <span>Is Our Priority.</span></h1>
        <p>
          Fast, friendly dental care — cleanings, cosmetic work & more. Expert
          team. Personalized treatment. Zero stress.
        </p>
        <p><strong>Diverse Oral Core:</strong> Where great smiles start.</p>
        <div class="hero__stats">
          <div class="stat">
            <h3>10+</h3>
            <p>Years of Experience</p>
          </div>
          <div class="stat">
            <h3>18k+</h3>
            <p>Satisfied Customers</p>
          </div>
          <div class="stat">
            <h3>86+</h3>
            <p>Skilled Dentists</p>
          </div>
        </div>

        <div class="hero__buttons">
          <a href="#services" class="btn btn--secondary" id="view-services">
            View Services
          </a>
          <router-link to="/book" class="btn btn--secondary">
            Book Appointment
          </router-link>
        </div>
      </div>

      <div class="hero__image">
        <div class="img-wrap rounded-shadow">
          <img src="../../Assets/images/hero.png" alt="Patient smiling" />
        </div>
      </div>
    </div>
  </section>

  <AboutSection />
  <ServicesSection />
  <WhatmakesSection />
  <PromotionalSection />
</template>

<script setup>
import ServicesSection from "../Sections/services.vue";
import AboutSection from "../Sections/about.vue";
import WhatmakesSection from "../Sections/whatmakes.vue";
import PromotionalSection from "../Sections/promotional.vue";
</script>

<style scoped>
.hero {
  background: linear-gradient(to bottom, #ffffff, #f0faff);
  padding: 4rem 1.5rem;
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
}

.hero__container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 2.5rem;
}

/* ===== ANIMATIONS ===== */
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(50px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero__content {
  max-width: 580px;
  text-align: center;
  opacity: 0;
  animation: fadeInLeft 1s ease-out forwards;
}

.hero__image {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: fadeInRight 1s ease-out forwards;
  animation-delay: 0.3s;
}

.stat {
  text-align: center;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}

.stat:nth-child(1) {
  animation-delay: 0.6s;
}
.stat:nth-child(2) {
  animation-delay: 0.8s;
}
.stat:nth-child(3) {
  animation-delay: 1s;
}

.hero__content h1 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #131b42;
}

.hero__content h1 span {
  color: #06b6d4;
}

.hero__content p {
  font-size: 1.1rem;
  color: #475569;
  margin: 1.25rem 0 2rem;
  line-height: 1.6;
}

.hero__buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  font-size: 1rem;
  padding: 0.75rem 1.6rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s ease;
  display: inline-block;
}

#view-services {
  background-color: #131b42;
  color: white;
}

#view-services:hover {
  background-color: #06b6d4;
}

.btn--secondary {
  border: 2px solid #131b42;
  color: #131b42;
  background-color: white;
}

.btn--secondary:hover {
  background-color: #e0faff;
}

/* IMAGE */
.img-wrap {
  max-width: 450px;
  width: 100%;
  height: auto;
}

.img-wrap img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

.hero__stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}

.stat h3 {
  font-size: 2rem;
  color: #06b6d4;
  font-weight: 700;
}

.stat p {
  font-size: 1rem;
  color: #475569;
  margin-top: 0.25rem;
}

/* Desktop */
@media (min-width: 768px) {
  .hero__container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .hero__content {
    text-align: left;
  }

  .hero__buttons {
    justify-content: flex-start;
  }

  .img-wrap {
    max-width: 530px;
  }
  .hero__stats {
    justify-content: flex-start;
  }

  .stat {
    text-align: left;
  }
}
/* Mobile */
@media (max-width: 767px) {
  .hero__image {
    display: none;
  }
}
</style>
