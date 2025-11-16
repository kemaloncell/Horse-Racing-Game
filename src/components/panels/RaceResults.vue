<template>
  <div class="race-results">
    <BasePanelHeader variant="results">
      Results
    </BasePanelHeader>
    <div class="content">
      <div v-if="results.length === 0" class="empty-state">
        No results yet
      </div>
      <div v-else class="results-list">
        <div
          v-for="result in results"
          :key="result.roundNumber"
          class="result-table"
        >
          <div class="result-header">
            {{ result.roundNumber }}ST Lap - {{ result.distance }}m
          </div>
          <BaseTable>
            <thead>
              <tr>
                <th>Position</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="pos in result.positions" :key="pos.position">
                <td>{{ pos.position }}</td>
                <td>{{ pos.horse.name }}</td>
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
import { useRacing } from '@/composables/useRacing';

const { results } = useRacing();
</script>

<style scoped lang="scss">
.race-results {
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

.results-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.result-header {
  background-color: $color-results-header;
  color: $color-white;
  padding: 0.375rem 0.5rem;
  font-weight: 700;
  font-size: 0.8125rem;
  text-align: center;
}
</style>
