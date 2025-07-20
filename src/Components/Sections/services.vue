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
          <div class="service-icon">🪥</div>
          <h3>Teeth Cleaning</h3>
          <p>
            Keep your smile fresh and healthy with regular cleanings and
            preventive care.
          </p>
        </div>
        <div class="service-card">
          <div class="service-icon">😁</div>
          <h3>Cosmetic Dentistry</h3>
          <p>
            Whitening, veneers, and more to help you achieve your dream smile.
          </p>
        </div>
        <div class="service-card">
          <div class="service-icon">🦷</div>
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

<style scoped>
.services {
  background: #f0faff;
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
  color: #151a42;
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
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #0ea5e9;
}

.service-card h3 {
  font-size: 1.25rem;
  color: #0ea5e9;
  margin-bottom: 0.5rem;
}

.service-card p {
  color: #475569;
  font-size: 1rem;
  line-height: 1.5;
}

/* Button */
.btn--secondary {
  padding: 0.75rem 1.6rem;
  border-radius: 999px;
  border: 2px solid #0ea5e9;
  color: #0ea5e9;
  background-color: white;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s ease;
  display: inline-block;
}

.btn--secondary:hover {
  background-color: #e0faff;
}

/* Responsive Grid */
@media (min-width: 768px) {
  .services__cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
