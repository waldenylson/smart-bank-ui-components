<template>
  <div class="search-bar-container">
    <input type="text" class="search-input" placeholder="Search"/>
    <button type="submit" class="search-button" @click.prevent="search">
      <i class="mdi mdi-magnify"></i>
    </button>
  </div>
</template>
<style lang="scss" src="./SearchBar.scss"></style>