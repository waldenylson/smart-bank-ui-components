<template>
  <div class="layout-container container-fluid">

    <!-- NAVIGATION DRAWER START -->
    <div class="layout-navigation-drawer">
      <navigation-drawer />
    </div>
    <!-- NAVIGATION DRAWER END -->

    <!-- CONTENT PAGES START -->
    <div class="layout-content-page">
      <div class="row">
        <child />
      </div>
    </div>
    <!-- CONTENT PAGES END -->
    
  </div>
</template>

<script>

import NavigationDrawer from "@/components/NavigationDrawer";
export default {

  components: {
    NavigationDrawer,
  },

};
</script>
