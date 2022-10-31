<template>
  <div class="container" :style="theme">
    <router-view/>
  </div>
</template>

<script>

import {mapState} from "vuex";

export default {
  name: 'App',
  computed: {
    ...mapState({
      theme: state => state.customization.theme
    })
  },
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
}
</style>