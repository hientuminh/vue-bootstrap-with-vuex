<template lang="html">
  <div class="text-center cart">
  <b-button variant="primary">
    {{msg}} <b-badge variant="light">{{cart}}</b-badge>
  </b-button>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {
      msg: 'Notifications'
    }
  },
  computed: {
    ...mapState({
      cart () {
        return this.$store.getters['getCart']
      }
    })
  }
}
</script>

<style lang="css">
.cart {
  margin-bottom: 20px;
}
</style>
