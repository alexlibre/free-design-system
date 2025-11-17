<template>
  <div :id="id" class="gallery">
    <a
      v-for="(image, key) in imagesData"
      class="gallery__image"
      :key="key"
      :href="image.largeURL"
      :data-pswp-width="image.width"
      :data-pswp-height="image.height"
      data-cropped="true"
      target="_blank"
      rel="noreferrer"
    >
      <!-- :style="`height: ${height}px`"  -->
      <img :src="image.thumbnailURL" alt="" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipe from "photoswipe";
import "photoswipe/style.css";

interface Image {
  largeURL: string;
  thumbnailURL: string;
  width: number;
  height: number;
}

interface Props {
  images: Image[];
  id: string;
  hasDownload?: boolean;
  height?: number;
}

const props = withDefaults(defineProps<Props>(), {
  hasDownload: false,
  height: 133,
});

const imagesData = ref<Image[]>(props.images);
const lightbox = ref<PhotoSwipeLightbox | null>(null);

const getMinHeight = computed(() => {
  return props.images.reduce(function (prev, curr) {
    return prev.height < curr.height ? prev : curr;
  }).height;
});

onMounted(() => {
  if (!lightbox.value) {
    lightbox.value = new PhotoSwipeLightbox({
      mainClass: "gallery",
      gallery: "#" + props.id,
      children: "a",
      pswpModule: PhotoSwipe,
      padding: { top: 60, bottom: 80, left: 0, right: 0 },
    });

    lightbox.value.on("uiRegister", () => {
      if (props.hasDownload && lightbox.value) {
        lightbox.value.pswp.ui.registerElement({
          name: "download-button",
          order: 8,
          isButton: true,
          tagName: "a",

          html: {
            isCustomSVG: true,
            inner:
              '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="gallery__icn-download"/>',
            outlineID: "gallery__icn-download",
          },

          onInit: (el, pswp) => {
            el.setAttribute("download", "");
            el.setAttribute("target", "_blank");
            el.setAttribute("rel", "noopener");

            pswp.on("change", () => {
              el.href = pswp.currSlide.data.src;
            });
          },
        });
      }

      if (lightbox.value) {
        lightbox.value.pswp.ui.registerElement({
          name: "thumbsIndicator",
          className: "gallery__thumbs-indicator",
          appendTo: "wrapper",
          onInit: (el, pswp) => {
            const thumbs: HTMLElement[] = [];
            let thumb: HTMLElement;
            let img: HTMLImageElement;
            let prevIndex = -1;

            for (let i = 0; i < pswp.getNumItems(); i++) {
              img = document.createElement("img");
              img.src = props.images[i].thumbnailURL;
              thumb = document.createElement("div");
              thumb.className = "gallery__thumb";
              thumb.appendChild(img);
              thumbs.push(thumb);
              el.appendChild(thumb);
              thumb.onclick = (e: Event) => {
                const target = e.target as HTMLElement;
                if (target.closest(".gallery__thumb")) {
                  pswp.goTo(thumbs.indexOf(target));
                }
              };
            }

            pswp.on("change", () => {
              if (prevIndex >= 0) {
                thumbs[prevIndex].classList.remove("gallery__thumb_active");
              }
              thumbs[pswp.currIndex].classList.add("gallery__thumb_active");
              prevIndex = pswp.currIndex;
            });
          },
        });
      }
    });

    lightbox.value.init();
  }
});

onUnmounted(() => {
  if (lightbox.value) {
    lightbox.value.destroy();
    lightbox.value = null;
  }
});

const getRatio = (width: number, height: number) => {
  return width / height;
};
</script>

<style lang="scss">
.gallery {
  //   display: flex;
  //   flex-wrap: wrap;
  //   gap: 1rem;

  &__image {
    display: flex;
    justify-content: center;
    overflow: hidden;
    aspect-ratio: 1 / 1;

    & img {
      object-fit: cover;
      width: 100%;
    }
  }

  &__thumbs-indicator {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1vw;
    padding: 0 2vw;

    position: absolute;
    bottom: 15px;
    left: 0;
    right: 0;
  }

  &__thumb {
    flex: 0 1 auto;
    max-width: 50px;
    max-height: 50px;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;

    & img {
      min-height: 100%;
      min-width: 100%;
      width: auto;
      pointer-events: none;
    }
  }
  &__thumb_active {
    box-shadow: 0 0 0 2px white;
  }
}
</style>
