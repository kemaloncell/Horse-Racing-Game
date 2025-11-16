<template>
  <div class="horse-wrapper" :style="{ left: `${progress}%` }" :class="{ 'is-running': progress > 0 && progress < 100 }">
    <div class="horse-icon" :style="{ backgroundColor: getColorCode(horse.color) }">
      <img src="@/assets/images/horse.png" alt="Horse" class="horse-image" />
    </div>
    <div class="horse-name">{{ horse.name }}</div>
  </div>
</template>

<script setup lang="ts">
import type { Horse } from '@/types';
import { getColorCode } from '@/utils/constants';

interface Props {
  horse: Horse;
  progress: number;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.horse-wrapper {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: left 0.05s linear;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;

  // Add gallop animation when running
  &.is-running .horse-image {
    animation: gallop 0.3s ease-in-out infinite;
  }
}

.horse-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid $color-border;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
}

.horse-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(1.1) contrast(1.1);
  position: relative;
  z-index: 1;
}

.horse-name {
  font-size: 0.625rem;
  font-weight: 600;
  white-space: nowrap;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0.125rem 0.375rem;
  border-radius: 0.1875rem;
}

// Gallop animation - simulates horse running
@keyframes gallop {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-0.25rem) rotate(-2deg);
  }
  50% {
    transform: translateY(0) rotate(0deg);
  }
  75% {
    transform: translateY(-0.25rem) rotate(2deg);
  }
}
</style>
