<template>
  <section class="clinic-gallery">
    <div class="gallery__container">
      <h2>Explore Our <span>Clinic</span></h2>
      <p class="gallery__intro">
        A look at our spaces designed for comfort, convenience, and care.
      </p>

      <div class="gallery__grid">
        <div class="gallery-item" v-for="(img, index) in images" :key="index">
          <img :src="img.src" :alt="img.alt" />
          <!-- Overlay for hover text -->
          <div class="overlay">
            <span>{{ img.alt }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import about1 from "@/Assets/images/c1.png";
import about2 from "@/Assets/images/c2.png";
import about3 from "@/Assets/images/c3.png";
import about4 from "@/Assets/images/c4.png";
import about5 from "@/Assets/images/c5.png";
import about6 from "@/Assets/images/c6.png";

const images = ref([
  { src: about1, alt: "Clinic Exterior" },
  { src: about2, alt: "Clinic Interior" },
  { src: about3, alt: "Waiting Area" },
  { src: about4, alt: "Parking" },
  { src: about5, alt: "Reception" },
  { src: about6, alt: "Treatment Room" },
]);
</script>

<style scoped>
.clinic-gallery {
  padding: 4rem 1.5rem;
  font-family: "Poppins", sans-serif;
  background: #f9fafb;
}

.gallery__container {
  max-width: 1200px;
  margin: auto;
  text-align: center;
}

.clinic-gallery h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #131b42;
}

.clinic-gallery h2 span {
  color: #06b6d4;
}

.gallery__intro {
  font-size: 1.1rem;
  color: #475569;
  margin: 1rem auto 3rem;
  max-width: 700px;
}

.gallery__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 1rem;
  transition: transform 0.3s ease;
}

/* .gallery-item:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
} */

.overlay {
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: bottom 0.3s ease;
  border-radius: 1rem;
}

.overlay span {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  padding: 0 1rem;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-item:hover .overlay {
  bottom: 0;
}

.gallery-item:hover {
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
}

@media (min-width: 768px) {
  .gallery__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .gallery__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
