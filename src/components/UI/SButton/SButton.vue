<template>
  <button :disabled="disabled" :class="classes" :style="styles" @click="$emit('click')">
    <router-link :to="{ ...to }" tag="span">
      <s-transition>
        <s-spinner :size="spinnerSize" :loading="loading">
          <span :class="color">
            <slot></slot>
          </span>
        </s-spinner>
      </s-transition>
    </router-link>
  </button>
</template>

<script>
export default {
  name: "SButton",

  props: {
    color: {
      type: String,
      default: "",
    },
    block: Boolean,
    outlined: Boolean,
    text: Boolean,
    loading: Boolean,
    icon: Boolean,
    to: Object,
    large: Boolean,
    small: Boolean,
    xLarge: Boolean,
    xSmall: Boolean,
    disabled: Boolean
  },

  computed: {
    classes() {
      return {
        "s-btn": true,
        "s-btn-size-default": true,
        "s-btn-disabled": this.disabled,
        "s-btn-text": this.text,
        "s-btn-block": this.block,
        "s-btn-outlined": this.outlined,
        "s-btn-icon": this.icon,
        "s-btn-size-small": this.small,
        "s-btn-size-large": this.large,
        "s-btn-size-xsmall": this.xSmall,
        "s-btn-size-xlarge": this.xLarge
      };
    },
    styles(){
      return {
        color: this.color
      }
    },
    spinnerSize(){
      if(this.large) return 31;
      if(this.xLarge) return 32;
      if(this.small) return 23;
      if(this.xSmall) return 21;
      else return 30;
    }
  },
};
</script>

<style lang="scss" src="./SButton.scss"></style>
