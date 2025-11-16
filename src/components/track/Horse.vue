<template>
  <div class="horse-wrapper" :style="{ left: `${progress}%` }" :class="{ 'is-running': progress > 0 && progress < 100 }">
    <div class="horse-icon">
      <img src="@/assets/images/horse.png" alt="Horse" class="horse-image" />
    </div>
    <BaseBadge
      variant="custom"
      size="sm"
      :custom-style="{ backgroundColor: getColorCode(horse.color) }"
      :title="horse.color"
    >
      {{ horse.name }}
    </BaseBadge>
  </div>
</template>

<script setup lang="ts">
import BaseBadge from '@/components/base/BaseBadge.vue';
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
  display: flex;
  align-items: center;
  justify-content: center;
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
