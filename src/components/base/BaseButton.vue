<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="['base-button', `base-button--${variant}`]"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  type: 'button',
  disabled: false,
});

defineEmits<{
  click: [event: MouseEvent];
}>();
</script>

<style scoped lang="scss">
.base-button {
  padding: $spacing-sm $spacing-md;
  border-radius: $border-radius;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid $color-text;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &--primary {
    background-color: $color-text;
    color: $color-white;

    &:not(:disabled):hover {
      background-color: darken($color-text, 10%);
      transform: translateY(-0.0625rem);
    }
  }

  &--secondary {
    background-color: $color-white;
    color: $color-text;

    &:not(:disabled):hover {
      background-color: lighten($color-text, 60%);
      transform: translateY(-0.0625rem);
    }
  }
}
</style>
