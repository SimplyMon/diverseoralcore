<template>
  <section id="services" class="services">
    <div class="services__container">
      <h2>Our Dental <span>Services</span></h2>
      <p class="services__intro">
        Comprehensive care for every smile. From preventive checkups to advanced
        cosmetic procedures — we’ve got you covered.
      </p>

      <div class="services__cards">
        <div class="service-card">
          <img
            src="../../Assets/images/teeth-cleaning.png"
            alt="Teeth Cleaning"
            class="service-image"
          />
          <h3>Teeth Cleaning</h3>
          <p>
            Keep your smile fresh and healthy with regular cleanings and
            preventive care.
          </p>
        </div>
        <div class="service-card">
          <img
            src="../../Assets/images/cosmetics.png"
            alt="Cosmetic Dentistry"
            class="service-image"
          />
          <h3>Cosmetic Dentistry</h3>
          <p>
            Whitening, veneers, and more to help you achieve your dream smile.
          </p>
        </div>
        <div class="service-card">
          <img
            src="../../Assets/images/braces.png"
            alt="Braces & Aligners"
            class="service-image"
          />
          <h3>Braces & Aligners</h3>
          <p>
            Straighten your teeth discreetly and effectively with modern
            orthodontic options.
          </p>
        </div>
      </div>

      <router-link to="/services" class="btn btn--secondary">
        See All Services
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const cards = document.querySelectorAll(".service-card");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => {
    card.style.animationPlayState = "paused";
    observer.observe(card);
  });
});
</script>

<style scoped>
.services {
  background: #f9fbfc;
  padding: 4rem 1.5rem;
  font-family: "Poppins", sans-serif;
  text-align: center;
}

.services__container {
  max-width: 1200px;
  margin: auto;
}

.services h2 {
  font-size: 2.2rem;
  color: #131b42;
  margin-bottom: 1rem;
}

.services h2 span {
  color: #06b6d4;
}

.services__intro {
  font-size: 1.1rem;
  color: #475569;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.services__cards {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  margin-bottom: 2rem;
}

.service-card {
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

.service-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
}

.service-card h3 {
  font-size: 1.25rem;
  color: #06b6d4;
  margin: 1rem 0 0.5rem;
}

.service-card p {
  color: #475569;
  font-size: 1rem;
  line-height: 1.5;
  padding: 0 1rem 1.5rem;
}

/* Button */
.btn--secondary {
  padding: 0.75rem 1.6rem;
  border-radius: 999px;
  border: 2px solid #06b6d4;
  color: #06b6d4;
  background-color: white;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s ease;
  display: inline-block;
}

.btn--secondary:hover {
  background-color: #e0faff;
}
/* ANIMATION */
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

.service-card {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
}

.service-card:nth-child(1) {
  animation-delay: 0.3s;
}
.service-card:nth-child(2) {
  animation-delay: 0.5s;
}
.service-card:nth-child(3) {
  animation-delay: 0.7s;
}

/* Responsive Grid */
@media (min-width: 768px) {
  .services__cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
