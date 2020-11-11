<template>
    <div class="row">
      <div class="col-sm-12 col-lg-5 login-form-container">
        <!-- FORM TLOGIN TITLE -->
        <div class="login-title">
          <h2>Hello, <span>Sophia!</span></h2>
        </div>
        <!-- FORM TLOGIN TITLE -->

        <!-- FORM TEXT FIELDS START -->
        <div class="login-form-group">
          <div class="login-form-input">
            <s-text-field label="Email" v-model="form.email" />
          </div>
          <div class="login-form-input">
            <s-text-field
              label="Password"
              type="password"
              v-model="form.password"
              :errors="error"
            />
          </div>
        </div>
        <!-- FORM TEXT FIELDS END -->

        <!-- FORM ACTIONS START -->
        <div class="login-form-actions">
          <s-button @click="clearData()" text>Im not Sophia</s-button>
          <s-button :to="{ name: 'PasswordRecovery' }" text
            >Forgot password?</s-button
          >
          <s-button :loading="loading" @click="goToDashboard">Login</s-button>
        </div>
        <!-- FORM ACTIONS END -->

        <!-- FORM FOOTER START -->
        <div class="login-footer">
          <p>
            Do Not disclose your login, password and verification code to
            prevent fraudsters from using it, A bank employee will never ask
            them.
          </p>
        </div>
        <!-- FORM FOOTER START -->
      </div>
    </div>
</template>

<script>
export default {
  
  layout:'auth',

  data: () => ({
    loading: false,
    form: {
      email: "admin",
      password: "test123",
    },
    error: [],
  }),


  methods: {

    clearData() {
      Object.assign(this.$data, this.$options.data());
    },

    goToDashboard() {
      this.loading = true;
      const { $router } = this;
      setTimeout( _ =>  $router.push({ name:'Payments' }), 1000);
    },
  },
};
</script>
<style lang="scss" src="@/assets/styles/login.scss"></style>