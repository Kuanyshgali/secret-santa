<template>
    <div class="color-list">
      <div
          @click="setBackground('background: burlywood')"
          class="color-list__back color-list__back_burlywood"></div>
      <div
          @click="setBackground('background:  cornsilk')"
          class="color-list__back color-list__back_cornsilk"></div>
      <div
          @click="setBackground('background:  bisque')"
          class="color-list__back color-list__back_bisque"></div>
      <div
          @click="setBackground('background:  khaki')"
          class="color-list__back color-list__back_khaki"></div>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
export default {
  name: 'CustomizationPage',
  computed: {
    ...mapState({
      theme: state => state.customization.theme
    })
  },
  methods: {
    ...mapActions('customization', ['setBack']),
    setBackground(back){
      this.setBack(`${back}`)
    }
  }
}
</script>

<style scoped lang="scss">
  .color-list {
    margin: 30px auto 0 auto;
    border: 5px solid chocolate;
    background: beige;
    width: 700px;
    height: 650px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 30px;
    border-radius: 10px;
    &__back {
      width: 50%;
      height: 50%;
      border-radius: 10px;

      &_burlywood {
        background: burlywood;
      }
      &_cornsilk {
        background: cornsilk;
      }
      &_bisque {
        background: bisque;
      }
      &_khaki {
        background: khaki;
      }
    }
    &__back:hover {
      cursor: pointer;
      scale: 1.1;
      transition: 0.3s;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
      -23px 0 20px -23px rgba(0, 0, 0, .8),
      23px 0 20px -23px rgba(0, 0, 0, .8),
      0 0 40px rgba(0, 0, 0, .1) inset;
    }
  }

</style>