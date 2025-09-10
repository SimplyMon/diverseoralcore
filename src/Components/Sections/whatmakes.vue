<template>
  <section class="difference">
    <div class="difference__container">
      <h2>What Makes <span>Us Different</span></h2>
      <p class="difference__intro">
        We’re more than just a dental clinic — we’re your smile partner. Here’s
        what sets Diverse Oral Core apart from the rest.
      </p>

      <div class="difference__content">
        <!-- LEFT COLUMN: LIST -->
        <div class="difference__features">
          <div class="feature">
            <h3>🦷 Advanced Technology</h3>
            <p>
              We use modern dental equipment and digital diagnostics for
              precise, painless, and efficient care.
            </p>
          </div>
          <div class="feature">
            <h3>🎯 Personalized Care</h3>
            <p>
              Every patient receives a tailored treatment plan with options that
              match your needs and comfort.
            </p>
          </div>
          <div class="feature">
            <h3>👩‍⚕️ Expert Team</h3>
            <p>
              Our skilled dentists bring years of experience in preventive,
              cosmetic, and restorative dentistry.
            </p>
          </div>
          <div class="feature">
            <h3>🛋️ Relaxing Experience</h3>
            <p>
              From ambiance to gentle care, we ensure your dental visit is
              stress-free and comfortable.
            </p>
          </div>
        </div>

        <div class="difference__image">
          <img src="../../Assets/images/hero1.png" alt="Dental Team" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const features = document.querySelectorAll(".feature");
  const image = document.querySelector(".difference__image img");

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

  features.forEach((feature, index) => {
    feature.style.animationDelay = `${0.3 + index * 0.2}s`;
    observer.observe(feature);
  });

  image.style.animationDelay = "1.2s";
  observer.observe(image);
});
</script>

<style scoped>
.difference {
  padding: 4rem 1.5rem;
  font-family: "Poppins", sans-serif;
}

.difference__container {
  max-width: 1200px;
  margin: auto;
}

.difference h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #131b42;
  text-align: center;
}

.difference h2 span {
  color: #06b6d4;
}

.difference__intro {
  font-size: 1.1rem;
  color: #475569;
  margin: 1rem auto 3rem;
  max-width: 700px;
  text-align: center;
}

.difference__content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.difference__features {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.feature {
  background: white;
  border-left: 4px solid #06b6d4;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}

.feature h3 {
  font-size: 1.2rem;
  color: #06b6d4;
  margin-bottom: 0.5rem;
}

.feature p {
  color: #475569;
  font-size: 1rem;
  line-height: 1.6;
}

.difference__image img {
  width: 100%;
  max-width: 500px;
  border-radius: 1rem;
  object-fit: cover;
}

/* ANIMATION */
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
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.feature,
.difference__image img {
  opacity: 0;
  transform: translateY(30px);
}

.feature.animate {
  animation: fadeInLeft 0.8s ease-out forwards;
}

.difference__image img.animate {
  animation: fadeInRight 1s ease-out forwards;
}

@media (min-width: 1024px) {
  .difference__content {
    flex-direction: row;
    align-items: stretch;
  }

  .difference__features {
    flex: 1;
  }

  .difference__image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  .difference__image img {
    height: 100%;
    width: 100%;
    max-width: none;
    object-fit: cover;
    border-radius: 1rem;
  }
}
</style>
