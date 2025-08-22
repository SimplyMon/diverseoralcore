<template>
  <section class="about-landing">
    <div class="about-landing__container">
      <!-- IMAGE LEFT -->
      <div class="about-landing__image">
        <img src="../../Assets/images/about2.png" alt="Smiling patient" />
      </div>

      <div class="about-landing__content">
        <h2>We Make <span>Smiles Brighter</span></h2>
        <p class="tagline">Fast, friendly, and expert dental care.</p>

        <div class="about-landing__stats">
          <div class="stat">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
          <div class="stat">
            <h3>18k+</h3>
            <p>Happy Patients</p>
          </div>
          <div class="stat">
            <h3>86+</h3>
            <p>Expert Dentists</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.about-landing {
  padding: 4rem 1.5rem;
  font-family: "Poppins", sans-serif;
}

.about-landing__container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 2rem;
  text-align: center;
}

/* IMAGE */
.about-landing__image img {
  width: 100%;
  max-width: 450px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* CONTENT */
.about-landing__content h2 {
  font-size: 2rem;
  color: #131b42;
  margin-bottom: 0.5rem;
}

.about-landing__content h2 span {
  color: #06b6d4;
}

.about-landing__content .tagline {
  font-size: 1.1rem;
  color: #475569;
  margin-bottom: 2rem;
}

/* STATS */
.about-landing__stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.stat h3 {
  font-size: 2rem;
  color: #06b6d4;
  font-weight: 700;
}

.stat p {
  font-size: 1rem;
  color: #334155;
}

/* BUTTON */
.btn--secondary {
  border: 2px solid #131b42;
  color: #131b42;
  background-color: white;
  padding: 0.75rem 1.6rem;
  border-radius: 999px;
  font-weight: 600;
  transition: 0.3s ease;
}

.btn--secondary:hover {
  background-color: #e0faff;
}

/* DESKTOP */
@media (min-width: 768px) {
  .about-landing__container {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
  .about-landing__stats {
    justify-content: flex-start;
  }
}
</style>
