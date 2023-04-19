<template>
  <div>
    <v-gallery
      class="mb-48 gallery-view"
      :images="images"
      :height="100"
      id="gallery-2"
    />
  </div>
</template>

<script>
import VGallery from "@/components/Gallery/VGallery.vue";
export default {
  components: {
    VGallery,
  },
  data() {
    return {
      images: [
        {
          largeURL:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg",
          thumbnailURL:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg",
          width: 1875,
          height: 2500,
        },
        {
          largeURL:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg",
          thumbnailURL:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg",
          width: 1669,
          height: 2500,
        },
        {
          largeURL:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-2500.jpg",
          thumbnailURL:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-200.jpg",
          width: 2500,
          height: 1666,
        },
        {
          largeURL:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-2500.jpg",
          thumbnailURL:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-200.jpg",
          width: 2500,
          height: 1666,
        },
        {
          largeURL:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-2500.jpg",
          thumbnailURL:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-200.jpg",
          width: 1875,
          height: 2500,
        },
        {
          largeURL:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/8/img-2500.jpg",
          thumbnailURL:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/8/img-200.jpg",
          width: 2500,
          height: 1667,
        },
        {
          largeURL:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/9/img-2500.jpg",
          thumbnailURL:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/9/img-200.jpg",
          width: 2500,
          height: 1667,
        },
        {
          largeURL:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/10/img-2500.jpg",
          thumbnailURL:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/10/img-200.jpg",
          width: 2000,
          height: 2500,
        },
        {
          largeURL:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/11/img-2500.jpg",
          thumbnailURL:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/11/img-200.jpg",
          width: 2000,
          height: 2500,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/mixins";

.gallery-view {
  @include cols(4);

  @include sm-block {
    @include cols(6);
  }

  @include md-block {
    @include cols(8);
  }
  @include lg-block {
    @include cols(12);
  }
}
</style>
