<template>
  <s-card>
    <s-card-body>
      <div class="debit-container">
        <div class="debit-stats">
          <div class="stats-title">
            <h2>
              {{ name }}<span>+8492</span>
            </h2>
          </div>

          <div class="debit-content-container">
            <div class="debit-content">
              <h2>Balance</h2>
              <h4>$ {{ balance }}</h4>
            </div>

            <div class="debit-content">
              <h2>Cashback <s-chip type="success">?</s-chip></h2>
              <h4>$ {{ cashBack }}</h4>
            </div>

            <div class="debit-content">
              <h2>Rate</h2>
              <h4>
                {{ rate }}%
                <s-chip
                  :type="percentageByFee.type"
                  :icon="percentageByFee.icon"
                  >{{ percentageByFee.rate }}%</s-chip
                >
              </h4>
            </div>
          </div>
        </div>

        <div class="debit-action">
          <div class="action-item">
            <s-button @click="loading = !loading" :loading="loading"
              >Pay</s-button
            >
          </div>
          <div class="action-item">
            <s-button outlined>More</s-button>
          </div>
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
    balance: [String, Number],
    cashBack: [String, Number],
    rate: [String, Number],
    name: String,
  },

  computed: {
    percentageByFee() {
      this.name;
      return this.generateRate();
    },
  },

  methods: {
    generateRate() {
      let rate = (Math.floor(Math.random() * 201) - 100).toFixed(0);
      if (rate < 0) {
        return {
          icon: "mdi mdi-arrow-down",
          type: "danger",
          rate: rate,
        };
      }
      return {
        icon: "mdi mdi-arrow-up",
        type: "success",
        rate: rate,
      };
    },
  },
};
</script>

<style lang="scss" src="./DebitCard.scss"></style>