<template>
  <nuxt-link class="nav-link" :to="link">{{item.text}}</nuxt-link>
</template>

<script>
export default {
  props: {
    item: {
      required: true
    }
  },

  computed: {
    link() {
      return this.item.link;
    }
  }
};
</script>

