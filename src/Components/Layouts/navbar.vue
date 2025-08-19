<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <img src="../../Assets/images/logo.jpg" alt="Logo" />
      <span>Diverse Oral Core</span>
    </div>

    <div class="navbar__toggle" @click="toggleMenu">
      <i :class="[menuOpen ? 'fas fa-times' : 'fas fa-bars']"></i>
    </div>

    <transition name="slide-fade">
      <ul
        v-if="menuOpen || windowWidth > 768"
        :class="[
          'navbar__links',
          { 'navbar__links--mobile': windowWidth <= 768 },
        ]"
      >
        <li><router-link to="/" @click="closeMenu">Home</router-link></li>
        <li><a href="#about" @click="closeMenu">About</a></li>
        <li><a href="#services" @click="closeMenu">Services</a></li>

        <li>
          <router-link to="/book" @click="closeMenu">Book</router-link>
        </li>
        <li>
          <a href="javascript:void(0)" @click="openModal" class="cta"
            >Contacts</a
          >
        </li>
      </ul>
    </transition>
  </nav>
  <!-- Contact Modal -->
  <div v-if="showModal" class="contact-modal-overlay" @click.self="closeModal">
    <div class="contact-modal-content">
      <h2>Contact Information</h2>
      <ul class="contact-list">
        <li><strong>Phone:</strong> <span>(02) 8554 9890</span></li>
        <li><strong>Mobile:</strong> <span>0998 863 5440</span></li>
        <li>
          <strong>Email:</strong>
          <span>diverseoralcore.dental@gmail.com</span>
        </li>
        <li>
          <strong>Address:</strong>
          <span
            >Unit 2A, Dolmar Building, United Nations Ave, Paco, Manila, Metro
            Manila</span
          >
        </li>
      </ul>
      <button class="contact-close-btn" @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const menuOpen = ref(false);
const windowWidth = ref(window.innerWidth);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  if (windowWidth.value <= 768) menuOpen.value = false;
};

const handleResize = () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value > 768) menuOpen.value = false;
};

onMounted(() => window.addEventListener("resize", handleResize));
onUnmounted(() => window.removeEventListener("resize", handleResize));

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
  closeMenu(); // Optional: close mobile menu
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped>
.navbar {
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  backdrop-filter: blur(12px);
  background-color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 10px;
  z-index: 1000;
  max-width: 1200px;
  margin: auto;
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.25rem;
}
.navbar__logo span {
  font-weight: 900;
  color: #131b42;
}

.navbar__logo img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}

.navbar__toggle {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.navbar__links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}
.navbar__links li a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
}

.navbar__links li a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  background-color: #0077cc;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.navbar__links li a:hover:not(.cta)::after {
  transform: scaleX(1);
}

.navbar__links li a:hover:not(.cta) {
  color: #0077cc;
}

.navbar__links li .cta {
  background-color: #131b42;
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 25px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.navbar__links li .cta:hover {
  background-color: #06b6d4;
}

.navbar__links li a:hover:not(.cta) {
  color: #0077cc;
}

.contact-modal-overlay {
  font-family: "Poppins", sans-serif;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3000;
}

.contact-modal-content {
  background: #ffffff;
  padding: 2rem;
  border-radius: 1.5rem;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", sans-serif;
  text-align: center;
}

.contact-modal-content h2 {
  color: #131b42;
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
}

.contact-list li {
  background: #f0faff;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  margin-bottom: 0.8rem;
  text-align: left;
  box-shadow: 0 2px 10px rgba(6, 182, 212, 0.08);
  color: #334155;
  font-size: 0.95rem;
}

.contact-list strong {
  color: #131b42;
  font-weight: 600;
  margin-right: 4px;
}

.contact-list span {
  display: inline-block;
}

.contact-close-btn {
  background-color: #131b42;
  color: white;
  padding: 0.6rem 1.4rem;
  border: none;
  border-radius: 999px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-close-btn:hover {
  background-color: #212e72;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .navbar__toggle {
    display: block;
  }

  .navbar__links {
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 1rem 0;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    z-index: 999;
  }

  .navbar__links li {
    padding: 0.75rem;
    text-align: center;
  }

  .navbar__links--mobile {
    display: flex;
  }
}

/* Transition for toggle */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
