<template>
  <footer class="footer">
    <!-- Top  -->
    <div class="footer__top">
      <!-- Brand  -->
      <div class="footer__brand">
        <div class="brand__logo-name">
          <img
            src="../../Assets/images/logo.jpg"
            alt="Diverse Oral Core Logo"
            class="logo"
          />
          <h2>Diverse Oral Core</h2>
        </div>
        <p><strong>Phone:</strong> (02) 8554 9890</p>
        <p><strong>Mobile:</strong> 0998 863 5440</p>
        <p><strong>Email:</strong> diverseoralcore.dental@gmail.com</p>
        <p class="address">
          <strong>Address:</strong><br />
          Unit 2A, Dolmar Building, United Nations Ave, Paco, Manila, Metro
          Manila
        </p>
      </div>

      <!-- Clinic Info -->
      <div class="footer__section">
        <h3>Clinic Info</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Services</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      <!-- Helpful Links -->
      <div class="footer__section">
        <h3>Helpful Links</h3>
        <ul>
          <li><a href="#">Clinics</a></li>
          <li><a href="#">Special Offers</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Complaints Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>

      <!-- Opening Hours -->
      <div class="footer__section">
        <h3>Opening Hours</h3>
        <ul>
          <li><span class="blue">Mon – Fri:</span> 08:00 AM – 05:00 PM</li>
          <li><span class="blue">Saturday:</span> 08:00 AM – 12:00 PM</li>
          <li><span class="blue">Sunday:</span> Closed</li>
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer__bottom">
      <p>
        Design & Develop By Simon Pasag © 2025 Diverse Oral Core. All Rights
        Reserved.
      </p>
      <div class="socials">
        <a href="https://www.facebook.com/p/Diverse-Oral-Core-61558746806381/"
          ><i class="fab fa-facebook-f"></i
        ></a>
        <a href="#"><i class="fab fa-x-twitter"></i></a>
        <a href="https://www.instagram.com/docdentalph/?hl=en"
          ><i class="fab fa-instagram"></i
        ></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const brand = document.querySelector(".footer__brand");
  const sections = document.querySelectorAll(".footer__section");
  const bottom = document.querySelector(".footer__bottom");

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

  observer.observe(brand);
  sections.forEach((section) => observer.observe(section));
  observer.observe(bottom);
});
</script>

<style scoped>
.footer {
  font-family: "Poppins", sans-serif;
  background-color: #f9fafb;
  color: #131b42;
  padding: 3rem 1.5rem 2rem;
  border-top: 1px solid #e2e8f0;
  box-sizing: border-box;
  overflow-x: hidden; /* Just in case */
}

.footer__top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 2rem;
  padding: 0 1rem;
  box-sizing: border-box;
}

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.brand__logo-name {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.logo {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  object-fit: cover;
}

.footer__brand h2 {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
}

.footer__brand p {
  font-size: 0.95rem;
  line-height: 1.4;
}

.address {
  line-height: 1.5;
}

.footer__section h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.7rem;
  color: #0f172a;
}

.footer__section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__section ul li {
  margin-bottom: 0.4rem;
  font-size: 0.95rem;
}

.footer__section a {
  text-decoration: none;
  color: #131b42;
  transition: color 0.3s;
}

.footer__section a:hover {
  color: #0ea5e9;
}

.blue {
  color: #0ea5e9;
  font-weight: 500;
}

.footer__bottom {
  max-width: 1200px;
  margin: 0 auto;
  border-top: 1px solid #e2e8f0;
  padding-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
}

.socials {
  margin-top: 0.8rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.socials a {
  color: #131b42;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.socials a:hover {
  color: #0ea5e9;
}
/* ===== ANIMATIONS ===== */
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

.footer__brand,
.footer__section {
  opacity: 0;
  transform: translateY(30px);
}

.footer__brand.animate,
.footer__section.animate {
  animation: fadeInUp 0.8s ease-out forwards;
}

.footer__brand.animate {
  animation-delay: 0.3s;
}

.footer__section:nth-child(2).animate {
  animation-delay: 0.5s;
}
.footer__section:nth-child(3).animate {
  animation-delay: 0.7s;
}
.footer__section:nth-child(4).animate {
  animation-delay: 0.9s;
}

.footer__bottom {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: 1.1s;
}

@media (max-width: 768px) {
  .footer__top {
    grid-template-columns: 1fr;
  }
}
</style>
