<template>
  <div>
    <h4 class="mb-16">Gray</h4>
    <div class="flex flex-start gap-16 flex-4">
      <color-sample color="#000000" name="gray-10" />
      <color-sample color="#010101" name="gray-9-5" />
      <color-sample color="#020202" name="gray-9" />
      <color-sample color="#030303" name="gray-8-5" />
      <color-sample color="#040404" name="gray-8" />
      <color-sample color="#070707" name="gray-7" />
      <color-sample color="#090909" name="gray-6" />
      <color-sample color="#0b0b0b" name="gray-5" />
      <color-sample color="#292929" name="gray-4" />
      <color-sample color="#464646" name="gray-3" />
      <color-sample color="#646464" name="gray-2" />
      <color-sample color="#737373" name="gray-1-5" />
      <color-sample color="#818181" name="gray-1" />
      <color-sample color="#909090" name="gray-0-5" />
      <color-sample color="#9f9f9f" name="gray-0" />
      <color-sample color="#e6e6e6" name="gray--1" />
    </div>
    <h4 class="mb-16 mt-24">Orange</h4>
    <div class="flex flex-start gap-16 flex-4">
      <color-sample color="#311505" name="orange-10" />
      <color-sample color="#512309" name="orange-9-5" />
      <color-sample color="#7a340d" name="orange-9" />
      <color-sample color="#a34612" name="orange-8-5" />
      <color-sample color="#cb5716" name="orange-8" />
      <color-sample color="#e1631c" name="orange-7" />
      <color-sample color="#f4691b" name="orange-6" />
      <color-sample color="#fc7a31" name="orange-5" />
      <color-sample color="#ff9357" name="orange-4" />
      <color-sample color="#f89b67" name="orange-3" />
      <color-sample color="#f9b48d" name="orange-2" />
      <color-sample color="#fbcdb3" name="orange-1-5" />
      <color-sample color="#fde1d1" name="orange-1" />
      <color-sample color="#fff2eb" name="orange-0-5" />
    </div>
    <h4 class="mb-16 mt-24">Green</h4>
    <div class="flex flex-start gap-16 flex-4">
      <color-sample color="#057402" name="green-10" />
      <color-sample color="#158212" name="green-9-5" />
      <color-sample color="#258f22" name="green-9" />
      <color-sample color="#349d32" name="green-8-5" />
      <color-sample color="#44ab42" name="green-8" />
      <color-sample color="#64c661" name="green-7" />
      <color-sample color="#83e281" name="green-6" />
      <color-sample color="#a3fda1" name="green-5" />
      <color-sample color="#b5fdb4" name="green-4" />
      <color-sample color="#c8fec7" name="green-3" />
      <color-sample color="#dafed9" name="green-2" />
      <color-sample color="#e3fee3" name="green-1-5" />
      <color-sample color="#edffec" name="green-1" />
      <color-sample color="#f6fff6" name="green-0-5" />
    </div>
    <h4 class="mb-16 mt-24">Yellow</h4>
    <div class="flex flex-start gap-16 flex-4">
      <color-sample color="#231e00" name="yellow-10" />
      <color-sample color="#393208" name="yellow-9-5" />
      <color-sample color="#4f460f" name="yellow-9" />
      <color-sample color="#655a17" name="yellow-8-5" />
      <color-sample color="#7b6e1e" name="yellow-8" />
      <color-sample color="#a7972e" name="yellow-7" />
      <color-sample color="#d3bf3d" name="yellow-6" />
      <color-sample color="#ffe74c" name="yellow-5" />
      <color-sample color="#ffec70" name="yellow-4" />
      <color-sample color="#fff194" name="yellow-3" />
      <color-sample color="#fff5b7" name="yellow-2" />
      <color-sample color="#fff8c9" name="yellow-1-5" />
      <color-sample color="#fffadb" name="yellow-1" />
      <color-sample color="#fffded" name="yellow-0-5" />
    </div>
    <h4 class="mb-16 mt-24">Red</h4>
    <div class="flex flex-start gap-16 flex-4">
      <color-sample color="#300003" name="red-10" />
      <color-sample color="#45090d" name="red-9-5" />
      <color-sample color="#591216" name="red-9" />
      <color-sample color="#6e1b20" name="red-8-5" />
      <color-sample color="#83242a" name="red-8" />
      <color-sample color="#ac353d" name="red-7" />
      <color-sample color="#d64751" name="red-6" />
      <color-sample color="#ff5964" name="red-5" />
      <color-sample color="#ff7a83" name="red-4" />
      <color-sample color="#ff9ba2" name="red-3" />
      <color-sample color="#ffbdc1" name="red-2" />
      <color-sample color="#ffcdd0" name="red-1-5" />
      <color-sample color="#ffdee0" name="red-1" />
      <color-sample color="#ffeeef" name="red-0-5" />
    </div>
    <h4 class="mb-16 mt-24">Blue</h4>
    <div class="flex flex-start gap-16 flex-4">
      <color-sample color="#00070c" name="blue-10" />
      <color-sample color="#051724" name="blue-9-5" />
      <color-sample color="#0b273d" name="blue-9" />
      <color-sample color="#103755" name="blue-8-5" />
      <color-sample color="#15476d" name="blue-8" />
      <color-sample color="#20679e" name="blue-7" />
      <color-sample color="#2a87ce" name="blue-6" />
      <color-sample color="#35a7ff" name="blue-5" />
      <color-sample color="#5db9ff" name="blue-4" />
      <color-sample color="#86caff" name="blue-3" />
      <color-sample color="#aedcff" name="blue-2" />
      <color-sample color="#c2e5ff" name="blue-1-5" />
      <color-sample color="#d7edff" name="blue-1" />
      <color-sample color="#ebf6ff" name="blue-0-5" />
    </div>
  </div>
</template>

<script>
import ColorSample from "@/components/ui/color-sample.vue";

export default {
  components: {
    ColorSample,
  },
};
</script>
