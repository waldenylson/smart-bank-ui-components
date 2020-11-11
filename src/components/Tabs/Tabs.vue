<template>
  <div class="tabs-container">

    <tabs>
      <tab title="Developments">
        <s-card>
          <div class="tab-item">
            <s-table></s-table>
          </div>
        </s-card>
      </tab>

      <tab title="Settings">
        <s-card>
          <div class="tab-item">TAB-1</div>
        </s-card>
      </tab>

      <tab title="Limits">
        <s-card>
          <div class="tab-item">TAB-2</div>
        </s-card>
      </tab>

      <tab title="About Card">
        <s-card>
          <div class="tab-item">TAB-3</div>
        </s-card>
      </tab>
    </tabs>
    
  </div>
</template>
<script>
import { Tabs, Tab } from "@hiendv/vue-tabs";

import STable from '../UI/STable'
export default {
  components: {
    Tabs,
    Tab,
    STable
  },
};
</script>

<style lang="scss" src="./Tabs.scss"></style>