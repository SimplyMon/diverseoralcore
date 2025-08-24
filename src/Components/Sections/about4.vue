<template>
  <section class="our-team">
    <div class="team__container">
      <h2>Meet <span>Our Team</span></h2>
      <p class="team__intro">Skilled professionals committed to your care.</p>

      <div class="team__grid">
        <div class="team-card" v-for="(member, index) in team" :key="index">
          <!-- Photo -->
          <div class="team-image">
            <img :src="member.photo" :alt="member.name" />
          </div>

          <!-- Info -->
          <div class="team-info">
            <h3>{{ member.name }}</h3>
            <p class="role">{{ member.role }}</p>
          </div>

          <!-- Socials -->
          <div class="team-socials">
            <a href="#" aria-label="LinkedIn"
              ><i class="fab fa-linkedin"></i
            ></a>
            <a href="#" aria-label="Email"><i class="fas fa-envelope"></i></a>
            <a href="#" aria-label="Instagram"
              ><i class="fab fa-instagram"></i
            ></a>
          </div>
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
import about4 from "@/Assets/images/t1.png";
import team5 from "@/Assets/images/t2.png";
import team6 from "@/Assets/images/t3.png";
import team7 from "@/Assets/images/t4.png";
import team8 from "@/Assets/images/t5.png";

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  opacity: 0;
  transform: translateY(30px);
}

.team-card.animate {
  opacity: 1;
  transform: translateY(0);
}

.team-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
}

.team-image {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.team-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.team-card:hover img {
  transform: scale(1.08);
}

.team-info {
  padding: 1.2rem;
}

.team-info h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.4rem;
}

.team-info .role {
  font-size: 0.95rem;
  color: #64748b;
}

.team-socials {
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  padding: 0.8rem 0 1.2rem;
  border-top: 1px solid #f1f5f9;
}

.team-socials a {
  font-size: 1.1rem;
  color: #94a3b8;
  transition: color 0.3s;
}

.team-socials a:hover {
  color: #06b6d4;
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
