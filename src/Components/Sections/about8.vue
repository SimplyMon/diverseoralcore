<template>
  <section class="cta">
    <div class="cta__container">
      <h2>Ready to Take the Next Step?</h2>
      <p>
        Schedule your appointment or get in touch with us today. Your healthy,
        confident smile awaits.
      </p>
      <div class="cta__buttons">
        <a href="/book" class="cta-btn primary">Book an Appointment</a>
        <button class="cta-btn secondary" @click="openModal">Contact Us</button>
      </div>
    </div>

    <!-- Contact Modal -->
    <div
      v-if="showModal"
      class="contact-modal-overlay"
      @click.self="closeModal"
    >
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
  </section>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped>
.cta {
  padding: 4rem 1.5rem;
  font-family: "Poppins", sans-serif;
  background: #06b6d4;
  color: #fff;
  text-align: center;
}

.cta__container {
  max-width: 800px;
  margin: auto;
}

.cta h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.cta__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.cta-btn {
  display: inline-block;
  padding: 0.75rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.cta-btn.primary {
  background: #131b42;
  color: white;
}

.cta-btn.primary:hover {
  background: #25347e;
}

.cta-btn.secondary {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.cta-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #fff;
}

/* Modal */
.contact-modal-overlay {
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
  text-align: center;
}

.contact-modal-content h2 {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: #131b42;
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

@media (max-width: 480px) {
  .cta__buttons {
    flex-direction: column;
  }
}
</style>
