<template>
  <s-card min-height="150" :loading="loading">
    <div class="cellular-service-card">
      <s-card-title> Cellular Service </s-card-title>
      <s-transition transition="slide-down">
        <s-card-text v-show="numberSuccess">
          <i class="mdi mdi-check"></i>
          Check your messages
        </s-card-text>
      </s-transition>
      <s-card-body>
        <div class="cellular-form">
          <div class="cellular-form-item">
            <s-text-field outlined label="Phone Number"></s-text-field>
          </div>
          <div class="cellular-form-item">
            <s-button icon @click="phoneNumber">
              <i class="mdi mdi-arrow-right"></i>
            </s-button>
          </div>
        </div>
      </s-card-body>
    </div>
  </s-card>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    numberSuccess: false,
  }),
  methods: {
    phoneNumber() {
      this.loading = true;
      setTimeout((_) => {
        this.loading = false;
        this.sendNumber();
      }, 2000);
    },
    sendNumber() {
      this.numberSuccess = true;
      setTimeout(() => {
        this.numberSuccess = false;
      }, 2000);
    },
  },
};
</script>
<style lang="scss" src="./CellularService.scss"></style>