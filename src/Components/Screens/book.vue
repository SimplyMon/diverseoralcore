<template>
  <section id="booking" class="booking-section">
    <div class="booking__container">
      <div class="booking__text">
        <h2>Book Your Appointment Today</h2>
        <p>
          Schedule a visit with our experienced dentists. We're here to make
          your dental care simple, comfortable, and convenient.
        </p>

        <form class="booking__form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div class="form-group">
            <label for="date">Preferred Date</label>
            <input type="date" id="date" v-model="form.date" required />
          </div>

          <div class="form-group">
            <label for="message">Message (Optional)</label>
            <textarea
              id="message"
              v-model="form.message"
              placeholder="Tell us more..."
            ></textarea>
          </div>

          <button type="submit" class="btn btn--primary">
            Submit Appointment
          </button>
        </form>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <h3>Success!</h3>
        <p>
          Your appointment request has been sent. <br />Wait for our message or
          email regarding your appointment.
        </p>
        <button @click="closeModal" class="btn btn--primary">OK</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  phone: "",
  date: "",
  message: "",
});

const showModal = ref(false);

function submitForm() {
  console.log("Appointment Request:", form.value);
  showModal.value = true;

  form.value = {
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  };
}

function closeModal() {
  showModal.value = false;
}
</script>

<style scoped>
.booking-section {
  background: linear-gradient(to bottom, #ffffff, #f0faff);
  padding: 4rem 1.5rem;
  font-family: "Poppins", sans-serif;
  margin-top: 4rem;
}

.booking__container {
  max-width: 800px;
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  flex-direction: column;
}

.booking__text {
  max-width: 100%;
  text-align: center;
}

.booking__text h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #151a42;
}

.booking__text p {
  font-size: 1.05rem;
  color: #475569;
  margin: 1rem 0 2rem;
}

/* FORM */
.booking__form {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  box-sizing: border-box;
}

input,
textarea {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1e293b;
}

input,
textarea {
  padding: 0.75rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-family: inherit;
  background-color: #f8fafc;
  transition: border 0.3s;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #0ea5e9;
  background-color: #ffffff;
}

/* BUTTON */
.btn--primary {
  background-color: #0ea5e9;
  color: white;
  padding: 0.75rem 1.6rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn--primary:hover {
  background-color: #0284c7;
}

/* MODAL STYLES */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(30, 41, 59, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.modal-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #0ea5e9;
}

.modal-content p {
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

@media (max-width: 767px) {
  .booking__text h2 {
    font-size: 1.75rem;
  }

  .booking__form {
    padding: 1.5rem;
  }

  input,
  textarea {
    font-size: 0.95rem;
  }

  .booking-section {
    padding: 2rem 1rem;
  }

  .booking__form {
    padding: 1rem;
  }
}
</style>
