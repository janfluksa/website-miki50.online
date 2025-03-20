<script setup>
defineProps({
  image: String,
  video: String,
  height: Number,
  dark: Boolean
})
</script>

<template>

  <div class="tile">

    <img v-if="image && !video" :src="`/${image}`" alt="" />   
    
    <video v-if="video && !image" autoplay loop muted>
      <source :src="`/${video}`" type="video/mp4"> 
    </video>

    <div class="content" :class="dark ? 'dark' : 'light'">
      <slot></slot>
    </div>

  </div>

</template>

<style lang="scss" scoped>

.tile {
  position: relative;
  display: flex;
  flex-grow: 1;
  border-radius: 1rem;
}

.content {
  position: absolute;
  top: 3rem;
  left: 3rem;
  z-index: 999;
  width: 25rem;
  max-width: 75%;

  &.dark * {
    color: white;
  }
}
img, video {
  width: 100%;
}
/* Use a media query to add a breakpoint at 800px: */
@media screen and (max-width: 890px) {
  
}
</style>
