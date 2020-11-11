<template>
  <div class="layout-content-container">
    <div class="layout-aside">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <user-card :cards="userCards" />
          </div>
          <div class="col-12">
            <card-new-product @NewProduct="storageNewUserCard" />
          </div>
        </div>
      </div>
    </div>

    <div class="layout-section">
      <div class="container-fluid">
        <div class="row">
          <!-- DEBIT CARD TEXTS FILEDS START -->
          <div class="col-12">
            <div class="row debit-card-top-container">
              <div class="col-sm-12 col-md-4">
                <s-text-field label="Debit card first"></s-text-field>
              </div>
              <i class="mdi mdi-arrow-right"></i>
              <div class="col-sm-12 col-md-4">
                <s-text-field label="Payee name"></s-text-field>
              </div>
            </div>
          </div>
          <!-- DEBIT CARD TEXTS FILEDS END -->

          <!-- CONTACTS FAVORITES START-->
          <div class="col-12">
            <div class="section-title">
              <h2>Contact favorites</h2>
            </div>
            <div class="card-contact-group">
                <card-contact
                v-for="(item, index) in favorites"
                :key="index"
                :contact="item"
                @delete-favorite="deleteFavoriteUser"/>
              <card-new-contact @newContact="generateFavoriteUser" />
            </div>
          </div>
          <!-- CONTACTS FAVORITES END -->

          <div class="col-lg-7 col-sm-12">
            <state-service />
          </div>
          <div class="col-lg-5 col-sm-12">
            <cellular-service />
          </div>
          <div class="col-12">
            <card-transfer />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardContact from "../components/CardContact";
import CellularService from "../components/CellularService";
import StateService from "../components/StateService";
import UserCard from "@/components/UserCard";
import CardNewProduct from "@/components/CardNewProduct";
import CardNewContact from "@/components/CardNewContact";
import CardTransfer from "@/components/CardTransfer";
// just test
import demo from "@/mixins/storageNewUser";
export default {
  // just test
  mixins: [demo],
  components: {
    UserCard,
    CardNewProduct,
    CardContact,
    CellularService,
    StateService,
    CardNewContact,
    CardTransfer,
  },
  created() {
    for (let index = 0; index < 3; index++) {
      this.generateFavoriteUser();
    }
  },
};
</script>