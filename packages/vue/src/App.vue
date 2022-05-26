<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Slider from './components'

const mockData = [
    {
      image: "https://sun9-83.userapi.com/impg/IfI9YKFHmUsD4JgbtZb-ypJkHYQlgTm-7GmqDQ/EUnv3P-8ALY.jpg?size=2560x1920&quality=96&sign=8dda5b4a07127cc8bac6e7af68396ce6&type=album",
      label: "label 1",
      paragraph: "paragraph 1",
    },
    {
      image: "https://sun9-73.userapi.com/impg/1Ms6FrjnofAR2M7OcH58xwNW7OYBnVw1yPB83g/O-g6UWbxQiY.jpg?size=2048x2048&quality=96&sign=6656493467f16b3aebcf658a77a92635&type=album",
      label: "label 2",
      paragraph: "paragraph 2",
    },
    {
      image: "https://sun9-70.userapi.com/impg/chs7j7FOumnwuJ1xTQDnJ_fGRNRDabreLdWF9A/f997PEVwXOI.jpg?size=640x853&quality=96&sign=9f03d03bc1d5ead9d5a31b0a7a3d2c21&type=album",
      label: "label 3",
      paragraph: "paragraph 3",
    }
  ]

</script>

<template>
  <Slider :slides="mockData"></Slider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

html, body {
  margin: 0;
  padding: 0;
}
</style>
