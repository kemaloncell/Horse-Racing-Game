<template>
  <div :class="['base-panel-header', `base-panel-header--${variant}`]">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'horse-list' | 'program' | 'results';
}

withDefaults(defineProps<Props>(), {
  variant: 'horse-list',
});
</script>

<style scoped lang="scss">
.base-panel-header {
  padding: $spacing-md;
  font-weight: 700;

  &--horse-list {
    background-color: $color-horse-list-bg;
    padding: $spacing-sm;
    border-bottom: 2px solid $color-border;
  }

  &--program {
    background-color: $color-program-header;
    color: $color-white;
  }

  &--results {
    background-color: $color-results-header;
    color: $color-white;
  }
}
</style>
