<template>
  <Transition name="celebration">
    <div v-if="show" class="celebration-overlay" @click="$emit('close')">
      <div class="celebration-content">
        <div class="fireworks">
          <div class="firework" v-for="i in 6" :key="i"></div>
        </div>

        <div class="winner-card">
          <div class="confetti">
            <span v-for="i in 50" :key="i" class="confetti-piece">{{ getConfettiEmoji() }}</span>
          </div>

          <h1 class="celebration-title">{{ isFinal ? '🏆 CHAMPION! 🏆' : '🎉 ROUND WINNER! 🎉' }}</h1>

          <!-- Single Winner Display -->
          <div v-if="!topThree" class="winner-horse">
            <div
              class="winner-icon"
              :style="{ backgroundColor: getColorCode(winner.color) }"
            >
              <img src="@/assets/images/horse.png" alt="Horse" class="horse-image" />
            </div>
            <h2 class="winner-name">{{ winner.name }}</h2>
          </div>

          <!-- Podium Display for Top 3 -->
          <div v-else class="podium">
            <div class="podium-position second">
              <div class="medal">🥈</div>
              <div
                class="podium-icon"
                :style="{ backgroundColor: getColorCode(topThree[1].color) }"
              >
                <img src="@/assets/images/horse.png" alt="Horse" class="horse-image" />
              </div>
              <h3 class="podium-name">{{ topThree[1].name }}</h3>
              <BaseBadge
                variant="custom"
                size="md"
                :custom-style="{ background: 'rgba(255, 255, 255, 0.8)' }"
              >
                2nd
              </BaseBadge>
            </div>

            <div class="podium-position first">
              <div class="medal">🥇</div>
              <div
                class="podium-icon champion"
                :style="{ backgroundColor: getColorCode(topThree[0].color) }"
              >
                <img src="@/assets/images/horse.png" alt="Horse" class="horse-image" />
              </div>
              <h3 class="podium-name">{{ topThree[0].name }}</h3>
              <BaseBadge
                variant="custom"
                size="md"
                :custom-style="{ background: 'rgba(255, 255, 255, 0.8)' }"
              >
                1st
              </BaseBadge>
            </div>

            <div class="podium-position third">
              <div class="medal">🥉</div>
              <div
                class="podium-icon"
                :style="{ backgroundColor: getColorCode(topThree[2].color) }"
              >
                <img src="@/assets/images/horse.png" alt="Horse" class="horse-image" />
              </div>
              <h3 class="podium-name">{{ topThree[2].name }}</h3>
              <BaseBadge
                variant="custom"
                size="md"
                :custom-style="{ background: 'rgba(255, 255, 255, 0.8)' }"
              >
                3rd
              </BaseBadge>
            </div>
          </div>

          <div class="winner-stats">
            <div class="stat">
              <span class="stat-label">Round</span>
              <span class="stat-value">{{ roundNumber }}</span>
            </div>
            <div class="stat">
              <span class="stat-label">Distance</span>
              <span class="stat-value">{{ distance }}m</span>
            </div>
            <div v-if="!topThree" class="stat">
              <span class="stat-label">Time</span>
              <span class="stat-value">{{ formatTime(time) }}</span>
            </div>
          </div>

          <p class="continue-hint">{{ isFinal ? 'Championship Complete!' : 'Click anywhere to continue' }}</p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import BaseBadge from '@/components/base/BaseBadge.vue';
import type { Horse } from '@/types';
import { getColorCode } from '@/utils/constants';

interface Props {
  show: boolean;
  winner: Horse;
  roundNumber: number;
  distance: number;
  time: number;
  isFinal?: boolean;
  topThree?: Horse[];
}

defineProps<Props>();
defineEmits<{
  close: [];
}>();

const getConfettiEmoji = () => {
  const emojis = ['🎉', '🎊', '⭐', '✨', '🌟', '💫'];
  return emojis[Math.floor(Math.random() * emojis.length)];
};

const formatTime = (ms: number) => {
  return (ms / 1000).toFixed(2) + 's';
};
</script>

<style scoped lang="scss">
.celebration-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
}

.celebration-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.winner-card {
  background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
  border-radius: 1rem;
  padding: 3rem 2rem;
  max-width: 32rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3);
  animation: popIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.celebration-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 2rem 0;
  animation: pulse 1.5s ease-in-out infinite;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.winner-horse {
  margin: 2rem 0;
}

.winner-icon {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  border: 4px solid $color-white;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.2);
  animation: rotate 3s linear infinite;
  overflow: hidden;
  position: relative;
}

.winner-name {
  font-size: 2rem;
  font-weight: 700;
  color: $color-text;
  margin: 0;
}

/* Podium Styles */
.podium {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
}

.podium-position {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.podium-position.first {
  order: 2;
}

.podium-position.second {
  order: 1;
}

.podium-position.third {
  order: 3;
}

.medal {
  font-size: 2rem;
  animation: pulse 1.5s ease-in-out infinite;
}

.podium-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid $color-white;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.2);
  animation: bounce 2s ease-in-out infinite;
  overflow: hidden;
  position: relative;
}

.podium-icon.champion {
  width: 5rem;
  height: 5rem;
  border: 4px solid gold;
  animation: rotate 3s linear infinite;
}

.horse-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(1.1) contrast(1.1);
}

.podium-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: $color-text;
  margin: 0;
}

.podium-position.first .podium-name {
  font-size: 1.5rem;
}

.winner-stats {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin: 2rem 0;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0.5rem;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.05rem;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: $color-text;
}

.continue-hint {
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.5);
  margin: 1rem 0 0 0;
  animation: blink 2s ease-in-out infinite;
}

/* Fireworks */
.fireworks {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.firework {
  position: absolute;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  animation: firework 1.5s ease-out infinite;
}

.firework:nth-child(1) {
  top: 20%;
  left: 20%;
  animation-delay: 0s;
}

.firework:nth-child(2) {
  top: 30%;
  left: 80%;
  animation-delay: 0.3s;
}

.firework:nth-child(3) {
  top: 50%;
  left: 10%;
  animation-delay: 0.6s;
}

.firework:nth-child(4) {
  top: 70%;
  left: 70%;
  animation-delay: 0.9s;
}

.firework:nth-child(5) {
  top: 40%;
  left: 50%;
  animation-delay: 1.2s;
}

.firework:nth-child(6) {
  top: 80%;
  left: 30%;
  animation-delay: 1.5s;
}

/* Confetti */
.confetti {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.confetti-piece {
  position: absolute;
  top: -10%;
  font-size: 1.5rem;
  animation: confettiFall 3s linear infinite;
  opacity: 0.8;
}

.confetti-piece:nth-child(odd) {
  animation-duration: 4s;
}

.confetti-piece:nth-child(3n) {
  animation-duration: 2.5s;
}

/* Animations */
@keyframes popIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

@keyframes firework {
  0% {
    transform: translate(0, 0);
    opacity: 1;
    box-shadow: 0 0 0 0 #ff6b6b, 0 0 0 0 #4ecdc4, 0 0 0 0 #45b7d1;
  }
  100% {
    transform: translate(var(--x, 0), var(--y, 0));
    opacity: 0;
    box-shadow: 0 0 0 3rem #ff6b6b, 0 0 0 3rem #4ecdc4, 0 0 0 3rem #45b7d1;
  }
}

@keyframes confettiFall {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}

.celebration-enter-active,
.celebration-leave-active {
  transition: opacity 0.3s ease;
}

.celebration-enter-from,
.celebration-leave-to {
  opacity: 0;
}
</style>
