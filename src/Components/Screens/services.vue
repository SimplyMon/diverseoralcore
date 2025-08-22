<template>
  <section id="services" class="services">
    <div class="services__container">
      <h2>Our Dental <span>Services</span></h2>
      <p class="services__intro">
        Comprehensive care for every smile. From preventive checkups to advanced
        cosmetic procedures — we’ve got you covered.
      </p>

      <div class="services__cards">
        <!-- Existing cards -->
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

        <!-- New cards -->
        <div class="service-card">
          <img
            src="../../Assets/images/frame.png"
            alt="Dental Implants"
            class="service-image"
          />
          <h3>Dental Implants</h3>
          <p>
            Permanent solutions to replace missing teeth with natural-looking
            results.
          </p>
        </div>
        <div class="service-card">
          <img
            src="../../Assets/images/frame-1.png"
            alt="Oral Surgery"
            class="service-image"
          />
          <h3>Oral Surgery</h3>
          <p>
            Expert surgical care for extractions, wisdom teeth, and other
            procedures.
          </p>
        </div>
        <div class="service-card">
          <img
            src="../../Assets/images/frame-2.png"
            alt="Pediatric Dentistry"
            class="service-image"
          />
          <h3>Pediatric Dentistry</h3>
          <p>
            Gentle, fun, and stress-free dental care for children of all ages.
          </p>
        </div>
        <div class="service-card">
          <img
            src="../../Assets/images/frame-3.png"
            alt="Preventive Care"
            class="service-image"
          />
          <h3>Preventive Care</h3>
          <p>Routine checkups and sealants to protect your smile long-term.</p>
        </div>
        <div class="service-card">
          <img
            src="../../Assets/images/frame-4.png"
            alt="Emergency Dentistry"
            class="service-image"
          />
          <h3>Emergency Care</h3>
          <p>
            Immediate treatment for dental pain, injuries, and urgent problems.
          </p>
        </div>
        <div class="service-card">
          <img
            src="../../Assets/images/frame-5.png"
            alt="Teeth Whitening"
            class="service-image"
          />
          <h3>Teeth Whitening</h3>
          <p>Professional whitening for a brighter, more confident smile.</p>
        </div>
        <div class="service-card">
          <img
            src="../../Assets/images/frame-6.png"
            alt="Crowns & Bridges"
            class="service-image"
          />
          <h3>Crowns & Bridges</h3>
          <p>
            Durable restorations to strengthen teeth and restore full function.
          </p>
        </div>
        <div class="service-card">
          <img
            src="../../Assets/images/frame-7.png"
            alt="Veneers"
            class="service-image"
          />
          <h3>Veneers</h3>
          <p>
            Custom porcelain shells to transform stained, chipped, or uneven
            teeth.
          </p>
        </div>
        <div class="service-card">
          <img
            src="../../Assets/images/frame-8.png"
            alt="Invisalign"
            class="service-image"
          />
          <h3>Invisalign</h3>
          <p>
            Clear aligners to discreetly straighten your smile without braces.
          </p>
        </div>
        <div class="service-card">
          <img
            src="../../Assets/images/frame-9.png"
            alt="Dentures"
            class="service-image"
          />
          <h3>Dentures & Partials</h3>
          <p>
            Comfortable, natural-looking options to replace multiple missing
            teeth.
          </p>
        </div>
        <div class="service-card">
          <img
            src="../../Assets/images/frame-10.png"
            alt="TMJ Treatment"
            class="service-image"
          />
          <h3>TMJ Treatment</h3>
          <p>
            Relieve jaw pain and improve function with customized therapies.
          </p>
        </div>
        <div class="service-card">
          <img
            src="../../Assets/images/frame-11.png"
            alt="Sedation Dentistry"
            class="service-image"
          />
          <h3>Sedation Dentistry</h3>
          <p>Comfortable dental visits with safe, calming sedation options.</p>
        </div>
        <div class="service-card">
          <img
            src="../../Assets/images/frame-12.png"
            alt="Mouthguards"
            class="service-image"
          />
          <h3>Mouthguards</h3>
          <p>Custom sports and night guards to protect your teeth and jaw.</p>
        </div>
        <div class="service-card">
          <img
            src="../../Assets/images/frame-13.png"
            alt="Smile Makeovers"
            class="service-image"
          />
          <h3>Smile Makeovers</h3>
          <p>Personalized treatments to completely transform your smile.</p>
        </div>
      </div>
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
