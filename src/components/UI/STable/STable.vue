<template>
  <table class="table-container">
    <tr>
      <th>Place</th>
      <th>Purchases</th>
      <th>Date</th>
      <th>CashBack</th>
      <th>Expense</th>
    </tr>

    <!-- Items Start -->
    <tr v-for="(item, index) in items" :key="index">
      <td>
        <div class="cell_place">
          <s-avatar size="40" :color="item.avatar">{{
            item.title.charAt(0)
          }}</s-avatar>
          <div class="cell_place_title">
            <h2>{{ item.title }}</h2>
            <h3>{{ item.subTitle }}</h3>
          </div>
        </div>
      </td>
      <td>{{ item.cardName }}</td>
      <td>{{ item.date }}</td>
      <td>
        <div class="cell_cashback">
          <h2 class="spot">{{ item.cashbackValue }}</h2>
          <h3>{{ item.cashbackStatus }}</h3>
        </div>
      </td>
      <td>
        <div class="cell_cashback">
          <h2>{{ item.expense }}</h2>
        </div>
      </td>
    </tr>

    <!-- Items End -->
  </table>
</template>
<script>
const items = [
  {
    title: "Strand Book Store",
    subTitle: "Stores",
    cardName: "Debit card first",
    date: "21 Jun 2019",
    cashbackValue: "+$2",
    cashbackStatus: "Profit",
    expense: "-$58",
    avatar: "#01a3ff",
  },
  {
    title: "Disney Store",
    subTitle: "Toys",
    cardName: "Debit card 1",
    date: "0 Jun 2019",
    cashbackValue: "+$5",
    cashbackStatus: "Profit",
    expense: "-$30",
    avatar: "#1eba62",
  },
  {
    title: "Tiffany & Co.",
    subTitle: "Jewelry",
    cardName: "Debit card 2",
    date: "20 Jun 2019",
    cashbackValue: "+$4",
    cashbackStatus: "Profit",
    expense: "-$98",
    avatar: "#eb62d0",
  },
  {
    title: "Strand Book Store",
    subTitle: "Stores",
    cardName: "Debit card first",
    date: "21 Jun 2019",
    cashbackValue: "+$2",
    cashbackStatus: "Profit",
    expense: "-$58",
    avatar: "#9568ff",
  },
  {
    title: "Disney Store",
    subTitle: "Toys",
    cardName: "Debit card 1",
    date: "0 Jun 2019",
    cashbackValue: "+$5",
    cashbackStatus: "Profit",
    expense: "-$30",
    avatar: "#01a3ff",
  },
  {
    title: "Tiffany & Co.",
    subTitle: "Jewelry",
    cardName: "Debit card 2",
    date: "20 Jun 2019",
    cashbackValue: "+$4",
    cashbackStatus: "Profit",
    expense: "-$98",
    avatar: "#1eba62",
  },
];
export default {
  name: "STable",
  data: () => ({
    items,
  }),
};
</script>
<style lang="scss" src="./STable.scss"></style>