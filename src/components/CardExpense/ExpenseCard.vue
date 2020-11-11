<template>
  <s-card :loading="loading" width="400">
    <s-card-body>
      <div class="expense-container">
        <s-avatar size="63" rounded>{{ title.charAt() }}</s-avatar>
        <div class="expense-content">
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
        </div>
        <div class="expense-action">
          <s-button text @click="loadingInit">
            <i class="mdi mdi-arrow-right"></i>
          </s-button>
        </div>
      </div>
    </s-card-body>
  </s-card>
</template>
<script>
export default {
  data: () => ({
    loading: false,
  }),

  props: {
    title: String,
    description: String,
  },

  methods: {
    loadingInit() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss" src="./ExpenseCard.scss"></style>