<template>
  <s-transition>
    <div v-if="loading" class="spinner-container">
      <div :class="['spinner',spinnerType]" :style="styles"></div>
    </div>
    <slot v-else />
  </s-transition>
</template>
<script>
export default {
  name: "SSpinner",

  props: {
    loading: Boolean,
    size: {
      type: [ String, Number ],
      default: 30,
    },
     type: {
      type: String,
      default: "primary",
    },
  },

  computed: {
    styles() {
      return {
        minHeight: `${this.size}px`,
        minWidth: `${this.size}px`,
      };
    },
    spinnerType() {
      return `s-spinner-${this.type.toLowerCase()}`;
    },
  },
};
</script>
<style lang="scss" src="./SPinner.scss"></style>