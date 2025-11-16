<template>
  <table class="base-table">
    <slot />
  </table>
</template>

<style scoped lang="scss">
.base-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.75rem;
  border: 1px solid $color-border;

  :deep(th),
  :deep(td) {
    padding: 0.25rem 0.5rem;
    border: 1px solid $color-border;
  }

  :deep(th) {
    background-color: rgba(0, 0, 0, 0.05);
    text-align: left;
    font-weight: 600;
    font-size: 0.6875rem;
    text-transform: uppercase;
    letter-spacing: 0.025rem;
  }
}
</style>
