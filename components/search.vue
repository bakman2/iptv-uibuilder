<template>
  <div style="max-width:600px;">
    <h4>Search: {{ this.$root.search }}</h4>

    <b-table
      @row-clicked="showchannel"
      id="channels"
      small
      dark
      striped
      hover
      :items="this.$root.channels"
      :fields="fields"
      head-variant="secondary"
      body-bg-variant="dark"
      :per-page="perPage"
      :current-page="currentPage"
    >
      <template v-slot:cell(tv_logo)="data">
        <img :src=" data.item.tv_logo" style="height:20px;max-width:80px" />
      </template>
    </b-table>
    <template v-if="showpagination">
      <b-pagination
        size="sm"
        no-key-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="channels"
      ></b-pagination>
    </template>

    <b-modal
      ref="channel-modal"
      size="xl"
      hide-footer
      centered
      header-bg-variant="secondary"
      body-bg-variant="dark"
      :title="title"
    >
      <div>
        <video width="100%" height="100%" autoplay controls>
          <source :src="src" type="application/x-mpegURL" />Your browser does not support the video tag.
        </video>
      </div>
    </b-modal>
  </div>
</template>

<script>
module.exports = {
  name: "category",
  mounted: function() {
    this.$root.channels = [];
  },
  props: {
    channels: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      perPage: 50,
      currentPage: 1,
      fields: [
        { key: "tv_logo", thClass: "logo", label: "Channel" },
        { key: "title", label: "" }
      ],
      title: "",
      src: ""
    };
  },
  computed: {
    showpagination() {
      if (this.$root.channels.length > 50) {
        return true;
      }
    },
    rows() {
      return this.$root.channels.length;
    }
  },
  methods: {
    showchannel(row) {
      this.title = row.title;
      this.src = row.streaming_url;
      this.$refs["channel-modal"].show();
    }
  },
  mounted() {
    console.log(this.$root);
  },
  created() {}
};
</script>

<style scoped>
.logo {
  width: 100px;
}
td {
  cursor: pointer;
}
</style>