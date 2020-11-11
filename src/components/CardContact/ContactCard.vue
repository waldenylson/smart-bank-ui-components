<template>
  <s-card min-height="175" min-width="160">
    <div class="contact-card-container">
      <div class="contact-card-action">
        <button @click="$emit('delete-favorite', contact)">
          <i class="mdi mdi-close"></i>
        </button>
      </div>
      <div class="contact-card-body">
        <s-avatar size="60"
          ><img :src="contact.avatarPath" alt="contact card avatar"
        /></s-avatar>
        <h2>{{ contact.name }}</h2>
      </div>
    </div>
  </s-card>
</template>

<script>
export default {
  props: {
    contact: [Array, Object]
  },
};
</script>

<style lang="scss" src="./ContactCard.scss"></style>