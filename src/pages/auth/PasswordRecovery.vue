<template>
  <div class="row">
    <div class="col-sm-12 col-lg-5 login-form-container">
      <div class="login-title">
        <h2>Password recovery</h2>
        <s-transition transition="slide-down">
          <h3 v-show="sendEmail"><i class="mdi mdi-check"></i>Check your email <span>{{ emailRecovery }}</span></h3>
        </s-transition>
      </div>

      <div class="login-form-group">
        <div class="login-form-input">
          <s-text-field label="Email" v-model="emailRecovery" />
        </div>
      </div>

      <div class="login-form-actions">
        <s-button :to="{ name: 'Login' }" color="text-blue" text>Back</s-button>
        <s-button :loading="loading" @click="recoveryPassword"
          >Continue</s-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {

  layout: "auth",

  data: () => ({
    loading: false,
    sendEmail: false,
    emailRecovery:'admin@test.com'
  }),

  methods: {
    recoveryPassword() {
      this.loading = true;
      const that = this;
      setTimeout((_) => {
        that.sendEmail = true;
        that.loading = false;
      }, 2000);
    },
  },
};
</script>
<style lang="scss" src="@/assets/styles/login.scss"></style>