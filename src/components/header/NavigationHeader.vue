<template>
  <div class="header">
    <h1 class="header__title">
      Secret Santa
    </h1>

      <router-link :to="linkPath">
        <button class="header__btn">
        {{ linkName }}
        </button>
      </router-link>

  </div>
</template>

<script>
export default {
  name: 'NavigationHeader',
  props: {
    linkName: {
      type: String
    },
    linkPath: {
      type: String
    },
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  padding: 10px;
  border-bottom: 1px solid black;


  &__btn{
    border: 1px solid black;
    background: coral;
    width: 200px;
    height: 50px;
    border-radius: 30px;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;
  }

  &__btn:hover {
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