<template>
  <div class="race-controls">
    <button
      @click="handleGenerateProgram"
      :disabled="isRacing"
      class="btn-generate"
    >
      GENERATE PROGRAM
    </button>
    <button
      @click="handleStartRace"
      :disabled="!canStartRace"
      class="btn-start"
    >
      {{ isRacing ? 'RACING...' : 'START / PAUSE' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRacing } from '@/composables/useRacing';
const {
  isRacing,
  canStartRace,
  generateProgram,
  startRace,
} = useRacing();

const handleGenerateProgram = async () => await generateProgram();
const handleStartRace = async () => await startRace();
</script>

<style scoped lang="scss">
.race-controls {
  display: flex;
  gap: $spacing-md;
}

.btn-generate,
.btn-start {
  background-color: $color-white;
  color: $color-text;
  border: 2px solid $color-text;
}
</style>
