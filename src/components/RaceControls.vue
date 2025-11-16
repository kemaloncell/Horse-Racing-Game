<template>
  <div class="race-controls">
    <BaseButton
      variant="secondary"
      @click="handleGenerateProgram"
      :disabled="isRacing"
    >
      GENERATE PROGRAM
    </BaseButton>
    <BaseButton
      variant="primary"
      @click="handleStartRace"
      :disabled="!canStartRace"
    >
      {{ isRacing ? 'RACING...' : 'START / PAUSE' }}
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue';
import { useRacing } from '@/composables/useRacing';
import { useRaceProgram } from '@/composables/useRaceProgram';

const { isRacing, canStartRace, startRace } = useRacing();
const { generateProgram } = useRaceProgram();

const handleGenerateProgram = async () => await generateProgram();
const handleStartRace = async () => await startRace();
</script>

<style scoped lang="scss">
.race-controls {
  display: flex;
  gap: $spacing-md;
}
</style>
