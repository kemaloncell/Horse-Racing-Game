<template>
  <div class="app">
    <header class="header">
      <h1>Horse Racing</h1>
      <RaceControls />
    </header>

    <main class="main-content">
      <div class="left-panel">
        <HorseList />
      </div>

      <div class="center-panel">
        <RaceTrack />
      </div>

      <div class="right-panel">
        <ProgramSchedule />
        <RaceResults />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import HorseList from '@/components/HorseList.vue';
import RaceControls from '@/components/RaceControls.vue';
import RaceTrack from '@/components/RaceTrack.vue';

/*
import ProgramSchedule from '@/components/ProgramSchedule.vue';
import RaceResults from '@/components/RaceResults.vue'; */
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

.left-panel,
.center-panel,
.right-panel {
  background-color: $color-white;
  border-radius: $border-radius;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.right-panel {
  gap: $spacing-md;
}
</style>
