<template>
  <div :class="['base-card', { 'base-card--with-gap': withGap }]">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  withGap?: boolean;
}

withDefaults(defineProps<Props>(), {
  withGap: false,
});
</script>

<style scoped lang="scss">
.base-card {
  background-color: $color-white;
  border-radius: $border-radius;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &--with-gap {
    gap: $spacing-md;
  }
}
</style>
