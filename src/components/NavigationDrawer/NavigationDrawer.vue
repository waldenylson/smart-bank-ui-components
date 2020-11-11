<template>
  <aside class="navigation-drawer-container">
    <div class="navigation-drawer-logo">S.</div>
    <div class="navigation-drawer-items">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <router-link
            tag="a"
            exact-active-class="active"
            :to="{ name: item.route }"
          >
            <i :class="item.icon"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="navigation-drawer-logout">
      <router-link tag="span" :to="{ name: 'Login' }"
        ><i class="mdi mdi-logout"></i
      ></router-link>
    </div>
  </aside>
</template>
<script>
const items = [
  {
    icon: "mdi mdi-chart-line",
    route: "Dashboard",
  },
  {
    icon: "mdi mdi-currency-usd ",
    route: "Payments",
  },
  {
    icon: "mdi mdi-bell-outline ",
    route: "Notification",
  },
  {
    icon: "mdi mdi-chat-processing-outline ",
    route: "Chat",
  },
  {
    icon: "mdi mdi-map-marker ",
    route: "Payments",
  },
  {
    icon: "mdi mdi-tune ",
    route: "Dashboard",
  },
];
export default {
  data: () => ({
    items,
  }),
};
</script>
<style lang="scss" src="./NavigationDrawer.scss"></style>