<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'SantaPlayer',
  props: {
    name: {
      type: String
    }
  }
}
</script>