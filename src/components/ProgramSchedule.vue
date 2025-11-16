<template>
  <div class="program-schedule">
    <BasePanelHeader variant="program">
      Program
    </BasePanelHeader>
    <div class="content">
      <div v-if="schedule.length === 0" class="empty-state">
        No program generated yet
      </div>
      <div v-else class="rounds-list">
        <div
          v-for="round in schedule"
          :key="round.roundNumber"
          class="round-table"
          :class="{ active: round.roundNumber === currentRound }"
        >
          <div class="round-header">
            {{ round.roundNumber }}ST Lap - {{ round.distance }}m
          </div>
          <BaseTable>
            <thead>
              <tr>
                <th>Position</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(horse, index) in round.horses" :key="horse.id">
                <td>{{ index + 1 }}</td>
                <td>{{ horse.name }}</td>
              </tr>
            </tbody>
          </BaseTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BasePanelHeader from '@/components/base/BasePanelHeader.vue';
import BaseTable from '@/components/base/BaseTable.vue';
import { useRaceProgram } from '@/composables/useRaceProgram';
import { useRacing } from '@/composables/useRacing';

const { schedule } = useRaceProgram();
const { currentRound } = useRacing();
</script>

<style scoped lang="scss">
.program-schedule {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.content {
  flex: 1;
  overflow-y: auto;
  padding: $spacing-md;
}

.empty-state {
  text-align: center;
  color: #999;
  padding: $spacing-lg;
}

.rounds-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.round-table {
  &.active {
    table {
      border: 2px solid $color-program-header;
    }
  }
}

.round-header {
  background-color: $color-program-header;
  color: $color-white;
  padding: 0.375rem 0.5rem;
  font-weight: 700;
  font-size: 0.8125rem;
  text-align: center;
}
</style>
