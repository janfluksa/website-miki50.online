<template>
  <div class="col">
    <slot></slot>
  </div>
</template>

<style scoped>
.col {
  background-color: green;
  display: flex;
  flex: 1;
  gap: 1rem;
  flex-grow: 1;
}
</style>
