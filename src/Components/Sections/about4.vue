<template>
  <section class="our-team">
    <div class="team__container">
      <h2>Meet <span>Our Team</span></h2>
      <p class="team__intro">Skilled professionals committed to your care.</p>

      <div class="team__grid">
        <div class="team-card" v-for="(member, index) in team" :key="index">
          <div class="team-image">
            <img :src="member.photo" :alt="member.name" />
          </div>
          <h3>{{ member.name }}</h3>
          <p class="role">{{ member.role }}</p>
          <div class="team-socials"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

import about1 from "@/Assets/images/about1.png";
import about2 from "@/Assets/images/about2.png";
import about3 from "@/Assets/images/about3.png";
import about4 from "@/Assets/images/about2.png";
import team5 from "@/Assets/images/about2.png";
import team6 from "@/Assets/images/about2.png";
import team7 from "@/Assets/images/about2.png";
import team8 from "@/Assets/images/about2.png";

const team = ref([
  { name: "Dr. Angela Santos", role: "Lead Dentist", photo: about1 },
  { name: "Dr. Miguel Reyes", role: "Orthodontist", photo: about2 },
  { name: "Dr. Liza Cruz", role: "Pediatric Dentist", photo: about3 },
  { name: "Sarah Lim", role: "Dental Hygienist", photo: about4 },
  { name: "Carla Dizon", role: "Front Desk Officer", photo: team5 },
  { name: "Dr. Paolo Mendoza", role: "Assistant Doctor", photo: team6 },
  { name: "Ruth Garcia", role: "Clinic Administrator", photo: team7 },
  { name: "Kevin Santos", role: "Dental Assistant", photo: team8 },
]);

onMounted(() => {
  const cards = document.querySelectorAll(".team-card");
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
    card.style.animationDelay = `${0.2 + index * 0.15}s`;
    observer.observe(card);
  });
});
</script>

<style scoped>
.our-team {
  padding: 5rem 1.5rem;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(to bottom, #ffffff, #f8fafc);
}

.team__container {
  max-width: 1200px;
  margin: auto;
  text-align: center;
}

.our-team h2 {
  font-size: 2.4rem;
  font-weight: 700;
  color: #0f172a;
}

.our-team h2 span {
  color: #06b6d4;
}

.team__intro {
  font-size: 1.1rem;
  color: #475569;
  margin: 1rem auto 3.5rem;
  max-width: 650px;
}

.team__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.team-card {
  background: #fff;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.team-card.animate {
  opacity: 1;
  transform: translateY(0);
}

.team-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.1);
}

.team-image {
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.team-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.team-card:hover img {
  transform: scale(1.05);
}

.team-card h3 {
  font-size: 1.2rem;
  color: #06b6d4;
  margin: 1rem 0 0.3rem;
  font-weight: 600;
}

.team-card .role {
  font-size: 1rem;
  color: #64748b;
  margin-bottom: 1rem;
}

.team-socials {
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding-bottom: 1rem;
}

@media (min-width: 768px) {
  .team__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .team__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
