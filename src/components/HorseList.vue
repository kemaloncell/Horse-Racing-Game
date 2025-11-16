<template>
  <div class="horse-list">
    <BasePanelHeader variant="horse-list">
      Horse List (1-{{ horses.length }})
    </BasePanelHeader>
    <div class="table-container">
      <BaseTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Condition</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="horse in horses" :key="horse.id">
            <td>{{ horse.name }}</td>
            <td>{{ horse.condition }}</td>
            <td>
              <BaseBadge
                variant="custom"
                :custom-style="{ backgroundColor: getColorCode(horse.color) }"
                :title="horse.color"
              >
                {{ horse.color }}
              </BaseBadge>
            </td>
          </tr>
        </tbody>
      </BaseTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseBadge from '@/components/base/BaseBadge.vue';
import BasePanelHeader from '@/components/base/BasePanelHeader.vue';
import BaseTable from '@/components/base/BaseTable.vue';
import { useRaceProgram } from '@/composables/useRaceProgram';
import { getColorCode } from '@/utils/constants';

const { horses } = useRaceProgram();
</script>

<style scoped lang="scss">
.horse-list {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.table-container {
  flex: 1;
  overflow-y: auto;
  padding: $spacing-sm;
}
</style>
