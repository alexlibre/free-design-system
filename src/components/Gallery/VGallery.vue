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

<script>
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipe from "photoswipe";
import "photoswipe/style.css";
export default {
  props: {
    images: { type: Array, required: true },
    id: { type: String, required: true },
    hasDownload: { type: Boolean, default: false },
    height: { type: Number, default: 133 },
  },
  data() {
    return {
      imagesData: this.images,
      lightbox: null,
    };
  },
  computed: {
    getMinHeight() {
      return this.images.reduce(function (prev, curr) {
        return prev.height < curr.height ? prev : curr;
      }).height;
    },
  },
  mounted() {
    if (!this.lightbox) {
      this.lightbox = new PhotoSwipeLightbox({
        mainClass: "gallery",
        gallery: "#" + this.id,
        children: "a",
        pswpModule: PhotoSwipe,
        padding: { top: 60, bottom: 80, left: 0, right: 0 },
      });

      this.lightbox.on("uiRegister", () => {
        if (this.hasDownload) {
          this.lightbox.pswp.ui.registerElement({
            name: "download-button",
            order: 8,
            isButton: true,
            tagName: "a",

            // SVG with outline
            html: {
              isCustomSVG: true,
              inner:
                '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="gallery__icn-download"/>',
              outlineID: "gallery__icn-download",
            },

            // Or provide full svg:
            // html: '<svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" class="gallery__icn"><path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" /></svg>',

            // Or provide any other markup:
            // html: '<i class="fa-solid fa-download"></i>'

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

        this.lightbox.pswp.ui.registerElement({
          name: "thumbsIndicator",
          className: "gallery__thumbs-indicator",
          appendTo: "wrapper",
          onInit: (el, pswp) => {
            const thumbs = [];
            let thumb;
            let img;
            let prevIndex = -1;

            for (let i = 0; i < pswp.getNumItems(); i++) {
              img = document.createElement("img");
              img.src = this.images[i].thumbnailURL;
              thumb = document.createElement("div");
              thumb.className = "gallery__thumb";
              thumb.appendChild(img);
              thumbs.push(thumb);
              el.appendChild(thumb);
              thumb.onclick = (e) => {
                if (e.target.closest(".gallery__thumb")) {
                  pswp.goTo(thumbs.indexOf(e.target));
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
      });

      this.lightbox.init();
    }
  },
  unmounted() {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  },
  methods: {
    getRatio(width, height) {
      return width / height;
    },
  },
};
</script>

<style lang="scss">
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

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
    background: green;
    box-shadow: 0 0 0 2px white;
  }
}
</style>
