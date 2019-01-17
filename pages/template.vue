<template lang="md">
# Test

<div v-html="$md.render(text)"></div>
</template>

<script>


export default {
    data() {
    return {
      text: 'hop gerflor ;)'
    };
  },
}
</script>

