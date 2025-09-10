<template>
  <section class="clinic-location">
    <div class="location__container">
      <h2>Find <span>Us</span></h2>
      <p class="location__intro">
        Visit us at our convenient location. We’re ready to welcome you!
      </p>

      <div class="location__map-wrapper">
        <iframe
          :src="mapSrc"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="location__info">
        <p>
          <strong>Address:</strong> Unit 2A, Dolmar Building, United Nations
          Ave, Paco, Manila, Metro Manila
        </p>
        <p><strong>Phone:</strong> +63 998 863 5440</p>
        <p><strong>Email:</strong> diverseoralcore.dental@gmail.com</p>
        <a
          class="directions-btn"
          :href="directionsUrl"
          target="_blank"
          rel="noopener"
        >
          Get Directions
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const mapSrc = ref(
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.544234295998!2d120.98728997494881!3d14.58402058590036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9003f45c4df%3A0x4834cc7f2c875bd6!2sDiverse%20Oral%20Core!5e1!3m2!1sen!2sph!4v1755943518496!5m2!1sen!2sph"
);

const directionsUrl = ref(
  "https://www.google.com/maps/dir/?api=1&destination=Diverse+Oral+Core+Clinic%2C+Dolmar+Building%2C+United+Nations+Avenue%2C+Paco%2C+Manila%2C+Philippines"
);
</script>

<style scoped>
.clinic-location {
  padding: 4rem 1.5rem;
  font-family: "Poppins", sans-serif;
  background: #f9fafb;
}

.location__container {
  max-width: 1200px;
  margin: auto;
  text-align: center;
}

.clinic-location h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #131b42;
}

.clinic-location h2 span {
  color: #06b6d4;
}

.location__intro {
  font-size: 1.1rem;
  color: #475569;
  margin: 1rem auto 2rem;
  max-width: 700px;
}

.location__map-wrapper {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
}

.location__info {
  font-size: 1rem;
  color: #475569;
  line-height: 1.6;
  margin-top: 1rem;
}

.location__info p {
  margin: 0.5rem 0;
}

.location__info strong {
  color: #131b42;
}

.directions-btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: #131b42;
  color: #fff;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s ease;
}

.directions-btn:hover {
  background: #06b6d4;
}

@media (max-width: 768px) {
  .location__map-wrapper iframe {
    height: 300px;
  }
}
</style>
