<template>
  <span
    :class="['base-badge', `base-badge--${variant}`, `base-badge--${size}`]"
    :style="customStyle"
    :title="title"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'default' | 'custom';
  size?: 'sm' | 'md' | 'lg';
  customStyle?: Record<string, string>;
  title?: string;
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
  customStyle: () => ({}),
  title: '',
});
</script>

<style scoped lang="scss">
.base-badge {
  display: inline-block;
  border-radius: $border-radius;
  font-weight: 500;
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

  // Size variants
  &--sm {
    padding: 0.125rem 0.25rem;
    font-size: 0.625rem;
    max-width: 4rem;
  }

  &--md {
    padding: 0.25rem 0.5rem;
    font-size: 0.81rem;
    max-width: 6.25rem;
  }

  &--lg {
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
    max-width: 8rem;
  }
}
</style>
