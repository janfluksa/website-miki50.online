<script setup>
defineProps({
  image: String,
  video: String,
  height: Number,
  pb: {
    type: String,
    default: "0"
  }
})
</script>

<template>

  <div class="tile">

    <img v-if="image && !video" :src="`/${image}`" :class="`pb-${pb}`" alt="" />   
    
    <video v-if="video && !image" autoplay loop muted>
      <source :src="`/${video}`" type="video/mp4"> 
    </video>

    <div class="content" :class="dark ? 'dark' : 'light'">
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
}

.content {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 999;
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

  &.dark * {
    color: white;
  }
}
img, video {
  width: 100%;
  border-radius: 1rem;
  
  &.pb-1 { padding-bottom: 1rem;}
  &.pb-2 { padding-bottom: 2rem;}
  &.pb-3 { padding-bottom: 3rem;}
  &.pb-4 { padding-bottom: 4rem;}
  &.pb-5 { padding-bottom: 5rem;}
}
/* Use a media query to add a breakpoint at 800px: */
@media screen and (max-width: 890px) {
}
</style>
