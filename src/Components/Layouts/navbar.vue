<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <router-link to="/" class="logo-link">
        <img src="../../Assets/images/logo.jpg" alt="Logo" />
        <span>Diverse Oral Core</span>
      </router-link>
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
        <li><router-link to="/about" @click="closeMenu">About</router-link></li>
        <li class="dropdown">
          <router-link
            to="/services"
            class="dropdown-toggle"
            @click="toggleServices"
          >
            Services
            <i
              :class="[
                'fas',
                servicesOpen ? 'fa-chevron-up' : 'fa-chevron-down',
              ]"
            ></i>
          </router-link>

          <transition name="slide-fade">
            <!-- Desktop: -->
            <div v-if="windowWidth > 768" class="dropdown-menu">
              <div class="services-grid">
                <router-link to="/services/general" @click="closeMenu"
                  >General Dentistry</router-link
                >
                <router-link to="/services/cosmetic" @click="closeMenu"
                  >Cosmetic Dentistry</router-link
                >
                <router-link to="/services/orthodontics" @click="closeMenu"
                  >Orthodontics</router-link
                >
                <router-link to="/services/implants" @click="closeMenu"
                  >Implants</router-link
                >
                <router-link to="/services/oral-surgery" @click="closeMenu"
                  >Oral Surgery</router-link
                >
                <router-link to="/services/pediatric" @click="closeMenu"
                  >Pediatric Dentistry</router-link
                >
                <router-link to="/services/preventive" @click="closeMenu"
                  >Preventive Care</router-link
                >
                <router-link to="/services/emergency" @click="closeMenu"
                  >Emergency Care</router-link
                >
                <router-link to="/services/periodontics" @click="closeMenu"
                  >Periodontics</router-link
                >
                <router-link to="/services/endodontics" @click="closeMenu"
                  >Endodontics</router-link
                >
                <router-link to="/services/whitening" @click="closeMenu"
                  >Teeth Whitening</router-link
                >
                <router-link to="/services/crowns-bridges" @click="closeMenu"
                  >Crowns & Bridges</router-link
                >
                <router-link to="/services/veneers" @click="closeMenu"
                  >Veneers</router-link
                >
                <router-link to="/services/invisalign" @click="closeMenu"
                  >Invisalign</router-link
                >
                <router-link to="/services/dentures" @click="closeMenu"
                  >Dentures & Partials</router-link
                >
                <router-link to="/services/tmj" @click="closeMenu"
                  >TMJ Treatment</router-link
                >
                <router-link to="/services/sedation" @click="closeMenu"
                  >Sedation Dentistry</router-link
                >
                <router-link to="/services/cleanings" @click="closeMenu"
                  >Dental Cleanings</router-link
                >
                <router-link to="/services/mouthguards" @click="closeMenu"
                  >Mouthguards</router-link
                >
                <router-link to="/services/smile-makeovers" @click="closeMenu"
                  >Smile Makeovers</router-link
                >
              </div>
            </div>

            <!-- Mobile: -->
            <div v-else-if="servicesOpen" class="dropdown-menu">
              <div class="services-grid">
                <router-link to="/services/general" @click="closeMenu"
                  >General Dentistry</router-link
                >
                <router-link to="/services/cosmetic" @click="closeMenu"
                  >Cosmetic Dentistry</router-link
                >
                <router-link to="/services/orthodontics" @click="closeMenu"
                  >Orthodontics</router-link
                >
                <router-link to="/services/implants" @click="closeMenu"
                  >Implants</router-link
                >
                <router-link to="/services/oral-surgery" @click="closeMenu"
                  >Oral Surgery</router-link
                >
                <router-link to="/services/pediatric" @click="closeMenu"
                  >Pediatric Dentistry</router-link
                >
                <router-link to="/services/preventive" @click="closeMenu"
                  >Preventive Care</router-link
                >
                <router-link to="/services/emergency" @click="closeMenu"
                  >Emergency Care</router-link
                >
                <router-link to="/services/periodontics" @click="closeMenu"
                  >Periodontics</router-link
                >
                <router-link to="/services/endodontics" @click="closeMenu"
                  >Endodontics</router-link
                >
                <router-link to="/services/whitening" @click="closeMenu"
                  >Teeth Whitening</router-link
                >
                <router-link to="/services/crowns-bridges" @click="closeMenu"
                  >Crowns & Bridges</router-link
                >
                <router-link to="/services/veneers" @click="closeMenu"
                  >Veneers</router-link
                >
                <router-link to="/services/invisalign" @click="closeMenu"
                  >Invisalign</router-link
                >
                <router-link to="/services/dentures" @click="closeMenu"
                  >Dentures & Partials</router-link
                >
                <router-link to="/services/tmj" @click="closeMenu"
                  >TMJ Treatment</router-link
                >
                <router-link to="/services/sedation" @click="closeMenu"
                  >Sedation Dentistry</router-link
                >
                <router-link to="/services/cleanings" @click="closeMenu"
                  >Dental Cleanings</router-link
                >
                <router-link to="/services/mouthguards" @click="closeMenu"
                  >Mouthguards</router-link
                >
                <router-link to="/services/smile-makeovers" @click="closeMenu"
                  >Smile Makeovers</router-link
                >
              </div>
            </div>
          </transition>
        </li>

        <li>
          <router-link to="/book" @click="closeMenu">Book Now</router-link>
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
const servicesOpen = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

const toggleServices = (e) => {
  if (windowWidth.value <= 768) {
    e.preventDefault();
    servicesOpen.value = !servicesOpen.value;
  }
};

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
  closeMenu();
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
  padding: 0.5rem 1rem;
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1200px;
  width: 90%;
  border-radius: 14px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
}

.navbar.scrolled {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(7px);
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
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
.logo-link {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
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
.navbar__links li .router-link-exact-active {
  color: #131b42 !important;
  font-weight: bold;
}

.navbar__links li a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  background-color: #131b42;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.navbar__links li a:hover:not(.cta)::after {
  transform: scaleX(1);
}

.navbar__links li a:hover:not(.cta) {
  color: #131b42;
}

.navbar__links li .cta {
  background-color: #131b42;
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 7px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.navbar__links li .cta:hover {
  background-color: #06b6d4;
}

.navbar__links li a:hover:not(.cta) {
  color: #131b42;
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
  border-radius: 1rem;
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
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-close-btn:hover {
  background-color: #212e72;
}

/* SERVIECES HOVE */
.navbar__links li.dropdown {
  position: relative;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-53%);
  min-width: 600px;
  max-width: 90vw;
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow-x: auto;
  padding-top: 50px;
  margin-top: 6 px;
}

.navbar__links li.dropdown:hover .dropdown-menu {
  display: block;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem; /* keep spacing */
  position: relative;
}
.services-grid a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  transition: background 0.3s ease, color 0.3s ease;
}

.services-grid a:nth-child(4n + 1),
.services-grid a:nth-child(4n + 2),
.services-grid a:nth-child(4n + 3) {
  border-right: 1px solid #e0e0e0;
}

.services-grid a:hover {
  background: #f0faff;
  color: #131b42;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.dropdown-toggle i {
  font-size: 0.7rem;
  transition: transform 0.3s ease;
}

.dropdown:hover .dropdown-toggle i {
  transform: rotate(180deg);
}

@media (max-width: 768px) {
  .dropdown-menu {
    position: static;
    min-width: unset;
    box-shadow: none;
    padding: 1rem 0;
    margin-top: 0;
    transform: none;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .dropdown-menu {
    padding: 0.5rem 1rem;
    background: transparent;
  }

  .services-grid {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: left;
  }

  .services-grid a {
    padding: 0.5rem 0;
    border-radius: 0;
  }

  .dropdown-toggle {
    justify-content: center;
  }
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
    max-height: 90vh;
    overflow-y: auto;
  }

  .navbar__links li {
    padding: 0.75rem;
    text-align: center;
  }

  .navbar__links--mobile {
    display: flex;
  }
}

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
