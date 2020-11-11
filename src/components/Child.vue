<template>
  <s-transition transition="fade">
    <slot>
      <router-view />
    </slot>
  </s-transition>
</template>

<script>
import STransition from './UI/STransition'
export default {
  name: 'Child',
  components:{
      STransition
  },
}
</script>