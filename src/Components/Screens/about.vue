<template>
  <section class="about-landing">
    <!-- Background -->
    <img
      src="../../Assets/images/about2.png"
      alt="Dental Care"
      class="bg-image"
    />
    <div class="overlay"></div>

    <!-- Content -->
    <div class="content">
      <h2 class="tagline">Care that’s precise. Comfort that lasts.</h2>
      <div class="features">
        <div class="feature">
          <i class="icon">
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
                d="M12 2c2.5 0 5 2 5 6 0 2-1 6-2 9s-2 5-3 5-2-2-3-5-2-7-2-9c0-4 2.5-6 5-6z"
              />
            </svg>
          </i>
          <p>Trusted dental care</p>
        </div>

        <div class="feature">
          <i class="icon">
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
                d="M4 15l4-2 4 2 4-2 4 2M4 15v2c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2M8 13V7c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v6"
              />
            </svg>
          </i>
          <p>Comfort-first experience</p>
        </div>

        <div class="feature">
          <i class="icon">
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
                d="M4 5h16v11H4zM8 21h8M12 16v5"
              />
            </svg>
          </i>
          <p>Modern technology</p>
        </div>
      </div>
    </div>
  </section>
  <aboutSection6 />
  <aboutSection1 />
  <aboutSection2 />
  <aboutSection3 />
  <aboutSection4 />
  <aboutSection5 />
  <aboutSection7 />
  <aboutSection8 />
</template>

<script setup>
import aboutSection1 from "../Sections/about1.vue";
import aboutSection2 from "../Sections/about2.vue";
import aboutSection3 from "../Sections/about3.vue";
import aboutSection4 from "../Sections/about4.vue";
import aboutSection5 from "../Sections/about5.vue";
import aboutSection6 from "../Sections/about6.vue";
import aboutSection7 from "../Sections/about7.vue";
import aboutSection8 from "../Sections/about8.vue";
</script>

<style scoped>
.about-landing {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
  padding: 0 1rem;
}

/* Background */
.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: -1;
}

/* Content */
.content {
  color: #fff;
  animation: fadeIn 1s ease-out;
  max-width: 800px;
}

.tagline {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6);
}

.features {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  width: 160px;
}

.feature:hover {
  transform: translateY(-6px);
}

.icon {
  width: 48px;
  height: 48px;
  margin-bottom: 0.8rem;
  color: #06b6d4;
}

.icon svg {
  width: 100%;
  height: 100%;
  stroke-width: 2;
}

.feature p {
  font-size: 1.2rem;
  font-weight: 500;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  line-height: 1.4;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
