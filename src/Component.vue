<template>
  <v-overlay :value="overlay" v-bind="options.overlayProps">
    <component :is="options.spinner" v-bind="options.spinnerProps"></component>
  </v-overlay>
</template>

<script>
export default {
  props: {
    spinnerProps: Object,
    overlayProps: Object
  },
  data() {
    return {
      overlay: false,
      defaultProps: {
        spinnerProps: {},
        overlayProps: {},
        spinner: "SyncLoader"
      },
      options: {}
    };
  },
  methods: {
    show() {
      this.overlay = true;
    },
    hide() {
      this.overlay = false;
    },
    mergeProps() {
      this.options = Object.assign(this.defaultProps, this.$props);
    }
  },
  beforeMount() {
    if (window.onNuxtReady) {
      window.onNuxtReady(app => {
        document.getElementById("app").appendChild(this.$el);
      });
    } else {
      this.$nextTick(function() {
        document.getElementById("app").appendChild(this.$el);
      });
    }
  },
  created() {
    this.mergeProps();
  }
};
</script>

<style></style>
