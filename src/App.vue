<template>
  <div class="app">
    <header class="header">
      <h1>Horse Racing</h1>
      <RaceControls />
    </header>

    <main class="main-content">
      <BaseCard>
        <HorseList />
      </BaseCard>

      <BaseCard>
        <RaceTrack />
      </BaseCard>

      <BaseCard>
        <div class="right-panel-content">
          <ProgramSchedule />
          <RaceResults />
        </div>
      </BaseCard>
    </main>
  </div>
</template>

<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue';
import HorseList from '@/components/HorseList.vue';
import RaceControls from '@/components/RaceControls.vue';
import RaceTrack from '@/components/RaceTrack.vue';
import ProgramSchedule from '@/components/ProgramSchedule.vue';
import RaceResults from '@/components/RaceResults.vue';
</script>

<style scoped lang="scss">
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  background-color: $color-header;
  padding: $spacing-md $spacing-lg;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }
}

.main-content {
  flex: 1;
  display: grid;
  grid-template-columns: 18.75rem 1fr 25rem;
  gap: $spacing-md;
  padding: $spacing-md;
  overflow: hidden;
}

.right-panel-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  overflow: hidden;
}
</style>
