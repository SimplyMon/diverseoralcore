<template>
  <section class="our-story">
    <div class="story__container">
      <h2>Our <span>Story</span></h2>
      <p class="story__text">
        Diverse Oral Core started with a simple goal: to make dental visits
        something patients look forward to, not fear. With a commitment to
        comfort, modern technology, and trust, we’ve grown into a clinic that
        puts people first — one smile at a time.
      </p>

      <!-- Collage Grid -->
      <div class="story__gallery">
        <img src="../../Assets/images/about1.png" alt="Clinic" />
        <img src="../../Assets/images/about2.png" alt="Team" />
        <img src="../../Assets/images/about3.png" alt="Patient" />
        <img src="../../Assets/images/braces.png" alt="Technology" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const section = document.querySelector(".story__container");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("animate");
        }
      });
    },
    { threshold: 0.2 }
  );
  observer.observe(section);
});
</script>

<style scoped>
.our-story {
  padding: 4rem 1.5rem;
  font-family: "Poppins", sans-serif;
  background: #ffffff;
}

.story__container {
  max-width: 1200px;
  margin: auto;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.story__container.animate {
  opacity: 1;
  transform: translateY(0);
}

.our-story h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #131b42;
  margin-bottom: 1.5rem;
}

.our-story h2 span {
  color: #06b6d4;
}

.story__text {
  font-size: 1.1rem;
  color: #475569;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* --- Collage Grid --- */
.story__gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: 280px;
  gap: 1rem;
}

.story__gallery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

.story__gallery img:nth-child(1) {
  grid-row: span 2;
}
.story__gallery img:nth-child(4) {
  grid-column: span 2;
}

@media (max-width: 767px) {
  .story__gallery {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }

  .story__gallery img {
    height: auto;
  }

  .story__gallery img:nth-child(1),
  .story__gallery img:nth-child(4) {
    grid-row: auto;
    grid-column: auto;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .story__gallery {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
  }

  .story__gallery img {
    height: auto;
  }

  .story__gallery img:nth-child(1),
  .story__gallery img:nth-child(4) {
    grid-row: auto;
    grid-column: auto;
  }
}
</style>
