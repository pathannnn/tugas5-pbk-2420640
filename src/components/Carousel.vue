<template>
  <q-carousel animated v-model="slide" arrows>
    <q-carousel-slide
      v-for="slide in slides"
      :key="slide.name"
      :name="slide.name"
      :img-src="slide.imgSrc"
    >
      <div class="absolute-bottom text-subtitle1 text-center text-shadow">
        {{ slide.caption }}
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      slide: 0,
      slides: [
        {
          name: "slide1",
          imgSrc: "https://via.placeholder.com/800x400",
          caption: "First Slide",
        },
        {
          name: "slide2",
          imgSrc: "https://via.placeholder.com/800x400",
          caption: "Second Slide",
        },
        {
          name: "slide3",
          imgSrc: "https://via.placeholder.com/800x400",
          caption: "Third Slide",
        },
      ],
    };
  },
};
</script>

<style scoped>
.text-shadow {
  text-shadow: 1px 1px 2px #333;
}
</style>
