<template>
  <div>
    <b-button
      v-for="item in this.$root.countries"
      v-bind:key="country"
      variant="secondary"
      class="m-1"
      :to="`/country/${item.country}`"
    >
      {{item.country}}
      <b-badge variant="warning">{{item.channels}}</b-badge>
    </b-button>
  </div>
</template>

<script>
module.exports = {
  props: {
    country: { type: String },
    countries: {
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