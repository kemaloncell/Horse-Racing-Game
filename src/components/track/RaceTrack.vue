<template>
  <div class="race-track">
    <RaceTrackEmptyState v-if="!currentRoundData" />
    <div v-else class="track-container">
      <BaseCard class="race-info-card">
        <div class="race-info">
          <span class="round-label">Round {{ currentRoundData.roundNumber }}</span>
          <span class="distance-label">{{ currentRoundData.distance }}m</span>
        </div>
      </BaseCard>

      <div class="lanes">
        <div
          v-for="(horse, index) in currentRoundData.horses"
          :key="horse.id"
          class="lane"
        >
          <div class="lane-number">{{ index + 1 }}</div>
          <div class="lane-track">
            <Horse
              :horse="horse"
              :progress="getHorseProgress(horse.id)"
            />
          </div>
        </div>
      </div>

      <div class="finish-line">
        <span>FINISH</span>
      </div>
    </div>
  </div>

  <Teleport to="body">
    <Celebration
      v-if="celebration.winner"
      :show="celebration.show"
      :winner="celebration.winner"
      :roundNumber="celebration.roundNumber"
      :distance="celebration.distance"
      :time="celebration.time"
      :isFinal="celebration.isFinal"
      :topThree="celebration.topThree ?? undefined"
      @close="closeCelebration"
    />
  </Teleport>
</template>

<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue';
import Horse from '@/components/track/Horse.vue';
import Celebration from '@/components/celebration/Celebration.vue';
import RaceTrackEmptyState from '@/components/track/RaceTrackEmptyState.vue';
import { useRacing } from '@/composables/useRacing';
import { useCelebration } from '@/composables/useCelebration';

const { currentRoundData, getHorseProgress } = useRacing();
const { celebration, closeCelebration } = useCelebration();
</script>

<style scoped lang="scss">
.race-track {
  height: 100%;
  background-color: $color-track-bg;
  position: relative;
  display: flex;
  flex-direction: column;
}

.track-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: $spacing-lg;
}

.race-info-card {
  margin-bottom: $spacing-md;
}

.race-info {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: $spacing-md;
  font-weight: 700;
}

.lanes {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.lane {
  flex: 1;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  border: 2px dashed $color-border;
  border-radius: $border-radius;
  position: relative;
  min-height: 2.5rem;
}

.lane-number {
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.125rem;
  background-color: rgba(255, 255, 255, 0.7);
  height: 100%;
  border-right: 2px solid $color-border;
}

.lane-track {
  flex: 1;
  position: relative;
  height: 100%;
}

.finish-line {
  position: absolute;
  right: 0;
  top: 5.6rem;
  bottom: 1.3rem;
  width: 1.6rem;
  background: repeating-linear-gradient(
    45deg,
    $color-text,
    $color-text 0.5rem,
    $color-white 0.5rem,
    $color-white 1rem
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.75rem;
  color: $color-white;
  text-shadow: 0 0 0.125rem $color-text;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
</style>
