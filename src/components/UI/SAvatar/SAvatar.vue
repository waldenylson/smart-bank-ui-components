<template>
  <div :class="classes" :style="styles">
    <slot />
  </div>
</template>
<script>
export default {
  name: "SAvatar",

  props: {
    size: {
      type: [ String, Number ],
      default: 45,
    },
    rounded: Boolean,
    color: String,
  },

  computed: {
    classes() {
      return {
        "s-avatar-container": true,
        "s-avatar-rounded": this.rounded,
      };
    },

    styles() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
        background: this.color
      };
    },
  },
};
</script>
<style lang="scss" src="./SAvatar.scss"></style>