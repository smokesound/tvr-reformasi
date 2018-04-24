<template>
    <div>
        <slide v-for="(slide, i) in dataContent" :key="i">
            <img :src="slide">
        </slide>
    </div>
</template>

<script>
import Carousel3d from 'vue-carousel-3d'
export default {
  props:['dataContent'],
  name:'slider',
  components:{
    'slides': Carousel3d.Slides,
  }
}
</script>
