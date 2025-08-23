<template>
  <section class="core-values">
    <div class="values__container">
      <h2>Our <span>Core Values</span></h2>
      <p class="values__intro">
        These values guide every decision we make — in patient care, teamwork,
        and community.
      </p>

      <div class="values__grid">
        <div class="value-card">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 11c0-2.21-1.79-4-4-4H4v8h4c2.21 0 4-1.79 4-4zM20 7h-4c-2.21 0-4 1.79-4 4s1.79 4 4 4h4V7z"
              />
            </svg>
          </div>
          <h3>Trust</h3>
          <p>We build lasting relationships through honesty and reliability.</p>
        </div>

        <div class="value-card">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 1.343-3 3 0 2 3 5 3 5s3-3 3-5c0-1.657-1.343-3-3-3z"
              />
            </svg>
          </div>
          <h3>Compassion</h3>
          <p>We care for every patient with empathy and respect.</p>
        </div>

        <div class="value-card">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m2-4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
              />
            </svg>
          </div>
          <h3>Innovation</h3>
          <p>We embrace modern tools and techniques to improve care.</p>
        </div>

        <div class="value-card">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <h3>Excellence</h3>
          <p>We hold ourselves to the highest standard in everything we do.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const cards = document.querySelectorAll(".value-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.2 }
  );
  cards.forEach((card, index) => {
    card.style.animationDelay = `${0.3 + index * 0.2}s`;
    observer.observe(card);
  });
});
</script>

<style scoped>
.core-values {
  padding: 4rem 1.5rem;
  font-family: "Poppins", sans-serif;
  background: #f9fafb;
}

.values__container {
  max-width: 1200px;
  margin: auto;
  text-align: center;
}

.core-values h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #131b42;
}

.core-values h2 span {
  color: #06b6d4;
}

.values__intro {
  font-size: 1.1rem;
  color: #475569;
  margin: 1rem auto 3rem;
  max-width: 700px;
}

.values__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.value-card {
  background: #fff;
  border-radius: 0.75rem;
  padding: 2rem 1.5rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.value-card.animate {
  opacity: 1;
  transform: translateY(0);
}

.value-card .icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
  color: #06b6d4;
}

.value-card .icon svg {
  width: 100%;
  height: 100%;
  stroke-width: 2;
}

.value-card h3 {
  font-size: 1.3rem;
  color: #06b6d4;
  margin-bottom: 0.5rem;
}

.value-card p {
  font-size: 1rem;
  color: #475569;
  line-height: 1.6;
}

@media (min-width: 768px) {
  .values__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .values__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
