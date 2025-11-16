<template>
  <div class="horse-list">
    <div class="panel-header">
      Horse List (1-{{ horses.length }})
    </div>
    <div class="table-container">
      <table>
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
              <span
                class="color-badge"
                :style="{ backgroundColor: getColorCode(horse.color) }"
                :title="horse.color"
              >
                {{ horse.color }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRacing } from '@/composables/useRacing';
import { getColorCode } from '@/utils/constants';

const { horses } = useRacing();
</script>

<style scoped lang="scss">
.horse-list {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.panel-header {
  background-color: $color-horse-list-bg;
  padding: $spacing-sm;
  font-weight: 700;
  border-bottom: 2px solid $color-border;
}

.table-container {
  flex: 1;
  overflow-y: auto;
  padding: $spacing-sm;
}

table {
  width: 100%;
  font-size: 0.8125rem;

  th {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  td {
    font-size: 0.8125rem;
  }
}

.color-badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
