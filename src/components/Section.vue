<template>
  <section>
    <slot></slot>
  </section>
</template>

<style scoped>
section {
  max-width: 1440px;
  margin: 0 auto 1rem auto;
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-grow: 1;
  gap: 1rem;
  flex-direction: row;
  padding: 0 1.5rem;
}

/* Use a media query to add a breakpoint at 800px: */
@media screen and (max-width: 890px) {
  section {
    flex-direction: column;
  }
}
</style>
