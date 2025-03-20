<script setup>
defineProps({
  image: String,
  video: String,
  height: Number,
})
</script>

<template>

  <div class="tile">

    <img :src="`/${image}`" alt="">    

    <div class="content">
      <slot></slot>
    </div>

  </div>

</template>

<style scoped>

.tile {
  position: relative;
  display: flex;
  flex-grow: 1;
}

.content {
  position: absolute;
  top: 3rem;
  left: 3rem;
  z-index: 999;
}
img {
  max-width: 100%;
}
/* Use a media query to add a breakpoint at 800px: */
@media screen and (max-width: 890px) {
  
}
</style>
