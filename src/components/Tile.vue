<script setup>
defineProps({
  image: String,
  video: String,
  height: Number
})
</script>

<template>

  <div class="tile">

    <img v-if="image && !video" :src="`/${image}`" alt="-" />   
    
    <video v-if="video && !image" autoplay loop muted playsinline>
      <source :src="`/${video}`" type="video/mp4"> 
    </video>

    <div class="content">
      <div class="wrap">
        <slot></slot>
      </div>
  </div>

  </div>

</template>

<style lang="scss" scoped>

.tile {
  position: relative;
  display: flex;
  flex-grow: 1;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(0,0,0,.2);
  flex-direction: column;
}

.content {
  position: relative;
  width: 100%;
  background: white;
  border-radius: 0 0 1rem 1rem;

  .wrap {
    padding: 2rem 3rem 2.5rem;
  }
  

  &::before {
    content: "";
    position: absolute;
    top: -30px;
    left: 0;
    width: 100%;
    height: 40px;
    background: white;
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 300 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,20 C50,40 250,0 300,20 L300,40 L0,40 Z' fill='black'/%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 300 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,20 C50,40 250,0 300,20 L300,40 L0,40 Z' fill='black'/%3E%3C/svg%3E");
  }
}
img, video {
  width: 100%;
  border-radius: 1rem;
}
/* Use a media query to add a breakpoint at 800px: */
@media screen and (max-width: 890px) {

  .content .wrap {
    padding: .75rem 2rem 1.75rem;
  }
}
</style>
