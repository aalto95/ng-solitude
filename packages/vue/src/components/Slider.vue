<script setup>
import { ref, toRef } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
  }
})

const slidesRef = toRef(props, 'slides')

const activeSlide = ref(0)

function slideLeft() {
  if (activeSlide.value > 0) {
    activeSlide.value --
  } else {
    activeSlide.value = slidesRef.value.length - 1
  }
}

function slideRight() {
  if (activeSlide.value < slidesRef.value.length - 1) {
    activeSlide.value ++
  } else {
    activeSlide.value = 0
  }
}

</script>

<template>
   <div class="container" v-if="slidesRef">
      <div class='blocker'>
      </div>
      <div class='slider'>
        <div 
          class="slide"
          v-for="(slide, index) in slidesRef"
          :key="slide.label"
          :style="{ backgroundImage: `url(${slide.image})` }"
          :class="{ hidden: activeSlide !== index }"
        >
          <h1>{{slide.label}}</h1>
          <p>{{slide.paragraph}}</p>
        </div>
        <button class='slideButton' @click="slideLeft()">
          <img src='../assets/left-icon.svg' alt="" class='arrow' />
        </button>
        <div class='middleSection' id="slider">
            <div v-bind:key="slide.label" v-for="(slide, index) in slidesRef" class='circle' :class="{current: index === activeSlide}">
            </div>
        </div>
        <button class='slideButton' @click="slideRight()">
          <img src='../assets/right-icon.svg' alt="" class='arrow' />
        </button>
      </div>
      <div class='blocker'>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.blocker {
  height: 100%;
  flex-grow: 1;
  background-color: #fff;
  z-index: 2;
}

.slider {
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  .slide {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
    height: 100%;
    position: absolute;
    background-position: center;
    background-size: cover;
    pointer-events: none;

    &.hidden {
      visibility: hidden;
    }
  }

  .slideButton {
    width: 10%;
    height: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    z-index: 5;

    &:hover {
      background-color: #fff;
      opacity: 0.3;
    }

    .arrow {
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .middleSection {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-grow: 1;
    z-index: 10;
  }
}

.circle {
  width: 10px;
  height: 10px;
  background-color: gray;
  border-radius: 10px;
  margin: 10px;

  &.current {
    background-color: white;
  }
}

h1,
p {
  color: #fff;
}

.slideFadingToLeft {
  z-index: 1;
  transition: 1s;
  visibility: hidden;
  transform: translateX(-100%);
}

.slideFadingToRight {
  z-index: 1;
  transition: 1s;
  visibility: hidden;
  transform: translateX(100%);
}

</style>
