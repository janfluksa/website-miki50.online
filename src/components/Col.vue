<template>
  <div class="col">
    <slot></slot>
  </div>
</template>

<style scoped>
.col {
  display: flex;
  flex: 1;
  gap: 1rem;
  flex-direction: column;
}
</style>
