<template>
  <transition mode="out-in" :name="transition">
    <slot />
  </transition>
</template>
<script>
export default {
  name:'STransition',
  props: {
    transition: {
      type: String,
      default: "bounce",
    },
  },
};
</script>

<style lang="scss" src="./STransition.scss"></style>