<template>
  <div class="empty-state">
    <div class="empty-content">
      <div class="trophy-icon">🏆</div>
      <h2>Ready to Race!</h2>
      <p class="hint">Generate a program and click START to begin the championship</p>
      <div class="stats">
        <BaseCard>
          <div class="stat-item">
            <span class="stat-number">20</span>
            <span class="stat-label">Horses</span>
          </div>
        </BaseCard>
        <BaseCard>
          <div class="stat-item">
            <span class="stat-number">6</span>
            <span class="stat-label">Rounds</span>
          </div>
        </BaseCard>
        <BaseCard>
          <div class="stat-item">
            <span class="stat-number">10</span>
            <span class="stat-label">Per Race</span>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue';
</script>

<style scoped lang="scss">
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(144, 200, 120, 0.2));
}

.empty-content {
  text-align: center;
  animation: fadeInUp 0.6s ease-out;
}

.trophy-icon {
  font-size: 5rem;
  animation: bounce 2s infinite;
  margin-bottom: $spacing-md;
}

.empty-content h2 {
  font-size: 2rem;
  font-weight: 700;
  color: $color-text;
  margin: 0 0 $spacing-sm 0;
}

.hint {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.6);
  margin: 0 0 $spacing-lg 0;
}

.stats {
  display: flex;
  gap: $spacing-lg;
  justify-content: center;
  margin-top: $spacing-lg;
}

.stat-item {
  align-items: center;
  padding: $spacing-md;
  background: rgba(255, 255, 255, 0.8);
  min-width: 5rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: $color-text;
}

.stat-label {
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  margin-top: 0.25rem;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(1.25rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.625rem);
  }
}
</style>
