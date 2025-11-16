<template>
  <span
    :class="['base-badge', `base-badge--${variant}`]"
    :style="customStyle"
    :title="title"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'default' | 'custom';
  customStyle?: Record<string, string>;
  title?: string;
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
  customStyle: () => ({}),
  title: '',
});
</script>

<style scoped lang="scss">
.base-badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: $border-radius;
  font-size: 0.8125rem;
  font-weight: 500;
  max-width: 6.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &--default {
    background-color: rgba(0, 0, 0, 0.1);
    color: $color-text;
  }

  &--custom {
    color: rgba(0, 0, 0, 0.7);
  }
}
</style>
