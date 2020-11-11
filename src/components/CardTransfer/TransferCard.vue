<template>
  <s-card :loading="loading">
    <s-card-title>Transfer <s-chip v-show="negativeBalance" type="danger">Negative balance</s-chip></s-card-title>
  
    <s-card-body>
      <div class="transfer-card-container">
        <div class="col-sm-12 col-md-5">
          <s-text-field outlined label="Debit card first" v-model="debitCardFirst"/>
        </div>

        <i class="mdi mdi-arrow-right"></i>

        <div class="col-sm-12 col-md-5">
          <s-text-field outlined label="Debit Second" v-model="debitCardSecond"/>
        </div>

        <div class="col-sm-12 col-md-5">
          <s-text-field  v-model="balanceCard" outlined label="balance in Debit first"/>
        </div>
       
        <div class="col-sm-12 col-md-2">
          <s-button block :loading="loading" large  @click="op">Transfer</s-button>
        </div>
      </div>
    </s-card-body>
  </s-card>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    debitCardFirst:'U$ 23.8',
    debitCardSecond:'U$ 250.70',
    balanceCard: 'U$ 23.8',
    negativeBalance: false
  }),
  methods:{
    op(){
      this.loading = true; 
      console.log(this.$refs.loading)
      setTimeout(()=>{
        this.balanceCard = 'U$-226,9';
        this.negativeBalance = true;
        this.loading = false;
      },2300);
    }
  }
};
</script>
<style lang="scss" src="./TransferCard.scss"></style>