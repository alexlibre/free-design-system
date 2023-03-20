<template>
  <div class="ui-color">
    <div class="ui-color__fill mb-8" :style="`background-color: ${color}`">
      <transition name="scale">
        <div v-if="show" class="copy" mode="out-in">
          Скопирован <strong>{{ copy }}</strong>
        </div>
      </transition>
    </div>
    <div class="ui-color__copy">
      <p class="ui-color__value mb-8" @click="copyToClipboard(color)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          fill="none"
        >
          <g clip-path="url(#a)">
            <path
              fill="#969BA0"
              fill-rule="evenodd"
              d="M3 2V1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H6v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2Zm1-1h3v3H6V3a1 1 0 0 0-1-1H4V1Zm1 2v4H1V3h4Z"
              clip-rule="evenodd"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h8v8H0z" />
            </clipPath>
          </defs>
        </svg>
        {{ color }}
      </p>
      <p class="ui-color__name" @click="copyToClipboard(name)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          fill="none"
        >
          <g clip-path="url(#a)">
            <path
              fill="#969BA0"
              fill-rule="evenodd"
              d="M3 2V1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H6v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2Zm1-1h3v3H6V3a1 1 0 0 0-1-1H4V1Zm1 2v4H1V3h4Z"
              clip-rule="evenodd"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h8v8H0z" />
            </clipPath>
          </defs>
        </svg>
        {{ name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: false,
      timer: null,
      copy: null,
    };
  },
  methods: {
    copyToClipboard(val) {
      clearTimeout(this.timer);
      navigator.clipboard.writeText(val);
      this.show = true;
      this.copy = val;

      this.timer = setTimeout(() => {
        this.show = false;
        clearTimeout(this.timer);
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-color {
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  padding: 8px 8px 0;
  box-shadow: 0px 4px 8px rgba(41, 41, 41, 0.08);

  &__fill {
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 2 / 1;
  }

  &__copy {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    font-size: 14px;
    color: var(--color-gray-4);
  }

  &__name {
    display: flex;
    align-items: center;
    gap: 4px;

    &:hover {
      color: var(--color-gray-4);
      cursor: pointer;
    }

    & svg {
      width: 8px;
      height: 8px;
      flex-shrink: 0;
    }
  }

  &__value {
    display: flex;
    align-items: center;
    gap: 4px;

    &:hover {
      color: var(--color-gray-4);
      cursor: pointer;
    }

    & svg {
      width: 8px;
      height: 8px;
      flex-shrink: 0;
    }
  }

  .copy {
    background-color: var(--color-white);
    padding: 4px 8px;
    border-radius: 4px;
    text-align: center;
    font-size: 12px;

    & strong {
      font-weight: 900;
    }
  }
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s linear;
}
.scale-enter {
  opacity: 0;
  transform: scale(0);
}
.scale-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
