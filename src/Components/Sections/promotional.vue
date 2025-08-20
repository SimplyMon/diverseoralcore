<template>
  <section class="promo-banner">
    <div class="promo-banner__container">
      <div class="promo-banner__content">
        <h2><span>Limited Time Offer:</span> 20% Off Teeth Whitening!</h2>
        <p>
          Brighten your smile with our expert whitening treatment. Book before
          July ends and enjoy this exclusive deal.
        </p>
        <router-link to="/book" class="promo-banner__button"
          >Book Now</router-link
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const promoContent = document.querySelector(".promo-banner__content");

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

  observer.observe(promoContent);
});
</script>

<style scoped>
.promo-banner {
  background: linear-gradient(to right, #0ea5e9, #06b6d4);
  color: white;
  padding: 3rem 1.5rem;
  font-family: "Poppins", sans-serif;
}

.promo-banner__container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.promo-banner__content h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.promo-banner__content h2 span {
  color: #131b42;
  font-weight: 600;
}

.promo-banner__content p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #f0f9ff;
}

.promo-banner__button {
  background-color: white;
  color: #0ea5e9;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-decoration: none;
}

.promo-banner__button:hover {
  background-color: #e0f7ff;
  color: #0284c7;
}
/* ===== ANIMATION ===== */
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

.promo-banner__content {
  opacity: 0;
  transform: translateY(30px);
}

.promo-banner__content.animate {
  animation: fadeInUp 1s ease-out forwards;
}
</style>
