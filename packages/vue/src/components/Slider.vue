<script setup lang="ts">
import { ref, toRef } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
  }
})

const slidesRef = toRef(props, 'slides')

const currentSlideId = ref(0)
const slideDirection = ref('')
const downX = ref(1)
const upX = ref(1)

function slideLeft() {
  slideDirection.value = 'left'
  if (currentSlideId.value > 0) {
    currentSlideId.value --
  } else {
    currentSlideId.value = slidesRef.value.length - 1
  }
}

function slideRight() {
  slideDirection.value = 'right'
  if (currentSlideId.value < slidesRef.value.length - 1) {
    currentSlideId.value ++
  } else {
    currentSlideId.value = 0
  }
}

function gesturedSlide() {
  if (downX.value + 100 < upX.value) {
    slideLeft();
  } else if (downX.value > upX.value + 100) {
    slideRight();
  }
}

function listenToMouseDown(e: MouseEvent) {
  downX.value = e.clientX
}

function listenToMouseUp(e: MouseEvent) {
  upX.value = e.clientX
  gesturedSlide()
}

const listenToTouchStart = (e: TouchEvent) => {
  downX.value = e.touches[0].clientX
}

const listenToTouchEnd = (e: TouchEvent) => {
  upX.value = e.changedTouches[0].clientX
  gesturedSlide()
}

</script>

<template>
   <div class="container" v-if="slidesRef"
    @mousedown="listenToMouseDown"
    @mouseup="listenToMouseUp"
    @touchstart="listenToTouchStart"
    @touchend="listenToTouchEnd"
   >
      <div class='slider'>
        <div 
          class="slide"
          v-for="(slide, idx) in slidesRef"
          :key="slide.label"
          :style="{ backgroundImage: `url(${slide.image})` }"
          :class="{
            hideToLeft: slideDirection === 'right' && currentSlideId !== idx, 
            hideToRight: slideDirection === 'left' && currentSlideId !== idx
          }"
        >
          <h1>{{slide.label}}</h1>
          <p>{{slide.paragraph}}</p>
        </div>
        <button class='slideButton' @click="slideLeft()">
          <img src='../assets/left-icon.svg' alt="" class='arrow' />
        </button>
        <div class='middleSection' id="slider">
            <div :key="slide.label" v-for="(slide, index) in slidesRef" class='circle' :class="{current: index === currentSlideId}">
            </div>
        </div>
        <button class='slideButton' @click="slideRight()">
          <img src='../assets/right-icon.svg' alt="" class='arrow' />
        </button>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  touch-action: none;

  .slider {
    width: 100%;
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
      width: 100%;
      height: 100%;
      position: absolute;
      background-position: center;
      background-size: cover;
      pointer-events: none;

      &.hideToRight {
        z-index: 1;
        transition: 1s;
        visibility: hidden;
        transform: translateX(100%);
      }

      &.hideToLeft {
        z-index: 1;
        transition: 1s;
        visibility: hidden;
        transform: translateX(-100%);
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
    }
  }
}

h1,
p {
  color: #fff;
}
</style>
