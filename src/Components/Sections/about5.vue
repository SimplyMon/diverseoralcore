<template>
  <section class="testimonials">
    <div class="testimonials__container">
      <h2>What Our <span>Patients Say</span></h2>
      <p class="testimonials__intro">
        Real experiences from patients who trusted us with their smiles.
      </p>

      <div class="testimonials__grid">
        <div
          class="testimonial-card"
          v-for="(item, index) in testimonials"
          :key="index"
        >
          <div class="quote">“</div>
          <p class="message">{{ item.message }}</p>
          <div class="author">
            <img :src="item.photo" :alt="item.name" />
            <div>
              <h4>{{ item.name }}</h4>
              <p class="role">{{ item.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

import patient1 from "@/Assets/images/about1.png";
import patient2 from "@/Assets/images/about2.png";
import about1 from "@/Assets/images/about1.png";

const testimonials = ref([
  {
    name: "Maria Lopez",
    role: "Patient",
    message:
      "The most comfortable dental experience I've ever had. The staff is kind and the care is top-notch.",
    photo: patient1,
  },
  {
    name: "David Tan",
    role: "Patient",
    message:
      "From the technology to the team, everything feels modern and professional. I feel at ease here.",
    photo: patient2,
  },
  {
    name: "Sophia Cruz",
    role: "Patient",
    message:
      "They explained every step clearly and made me feel safe. Highly recommend to anyone with dental anxiety.",
    photo: about1,
  },
]);

onMounted(() => {
  const cards = document.querySelectorAll(".testimonial-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card, index) => {
    card.style.animationDelay = `${0.3 + index * 0.2}s`;
    observer.observe(card);
  });
});
</script>

<style scoped>
.testimonials {
  padding: 4rem 1.5rem;
  font-family: "Poppins", sans-serif;
  background: #f9fafb;
}

.testimonials__container {
  max-width: 1200px;
  margin: auto;
  text-align: center;
}

.testimonials h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #131b42;
}

.testimonials h2 span {
  color: #06b6d4;
}

.testimonials__intro {
  font-size: 1.1rem;
  color: #475569;
  margin: 1rem auto 3rem;
  max-width: 700px;
}

.testimonials__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.testimonial-card {
  background: #fff;
  border-radius: 0.75rem;
  padding: 2rem;
  text-align: left;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.testimonial-card.animate {
  opacity: 1;
  transform: translateY(0);
}

.testimonial-card .quote {
  font-size: 3rem;
  color: #06b6d4;
  font-weight: 700;
  position: absolute;
  top: 10px;
  left: 20px;
}

.testimonial-card .message {
  font-size: 1rem;
  color: #475569;
  margin: 1.5rem 0;
  line-height: 1.6;
}

.author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #06b6d4;
}

.author h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #131b42;
}

.author .role {
  font-size: 0.9rem;
  color: #64748b;
}

.testimonial-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
}

@media (min-width: 768px) {
  .testimonials__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .testimonials__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
