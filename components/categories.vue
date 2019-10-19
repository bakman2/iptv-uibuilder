<template>
  <div class="channels">
    <b-button
      v-for="item in this.$root.categories"
      v-bind:key="category"
      variant="secondary"
      class="m-1"
      :to="`/category/${item.category}`"
    >
      {{item.category}}
      <b-badge variant="warning">{{item.channels}}</b-badge>
    </b-button>
  </div>
</template>

<script>
module.exports = {
  props: {
    category: { type: String },
    categories: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>


<style scoped>
</style>