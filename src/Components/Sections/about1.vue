<template>
  <section class="mission-vision">
    <div class="mv__container">
      <h2>Our <span>Mission & Vision</span></h2>
      <p class="mv__intro">
        Clear goals guide everything we do — from patient care to community
        impact.
      </p>

      <div class="mv__content">
        <!-- Mission -->
        <div class="mv__card">
          <div class="mv__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="9" stroke-width="2" />
              <circle cx="12" cy="12" r="3" stroke-width="2" />
              <path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke-width="2" />
            </svg>
          </div>
          <h3>Our Mission</h3>
          <p>
            To provide exceptional dental care that blends comfort, trust, and
            modern technology — ensuring healthier smiles and confident
            patients.
          </p>
        </div>

        <!-- Vision -->
        <div class="mv__card">
          <div class="mv__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="10" stroke-width="2" />
              <circle cx="12" cy="12" r="4" stroke-width="2" />
              <path
                d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z"
                stroke-width="2"
              />
            </svg>
          </div>
          <h3>Our Vision</h3>
          <p>
            To be the most trusted dental partner in our community, redefining
            the patient experience with innovation and compassion.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const cards = document.querySelectorAll(".mv__card");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card, index) => {
    card.style.animationDelay = `${0.3 + index * 0.3}s`;
    observer.observe(card);
  });
});
</script>

<style scoped>
.mission-vision {
  padding: 4rem 1.5rem;
  font-family: "Poppins", sans-serif;
  background: #f9fafb;
}

.mv__container {
  max-width: 1200px;
  margin: auto;
}

.mission-vision h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #131b42;
  text-align: center;
}

.mission-vision h2 span {
  color: #06b6d4;
}

.mv__intro {
  font-size: 1.1rem;
  color: #475569;
  margin: 1rem auto 3rem;
  max-width: 700px;
  text-align: center;
}

.mv__content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.mv__card {
  background: #fff;
  border-left: 4px solid #06b6d4;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  opacity: 0;
  transform: translateY(30px);
  text-align: center;
}

.mv__icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
  color: #06b6d4;
}

.mv__icon svg {
  width: 100%;
  height: 100%;
  stroke: currentColor;
}

.mv__card h3 {
  font-size: 1.4rem;
  color: #06b6d4;
  margin-bottom: 0.8rem;
}

.mv__card p {
  color: #475569;
  font-size: 1rem;
  line-height: 1.6;
}

/* Animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mv__card.animate {
  animation: fadeInUp 0.8s ease-out forwards;
}

@media (min-width: 768px) {
  .mv__content {
    flex-direction: row;
  }

  .mv__card {
    flex: 1;
  }
}
</style>
