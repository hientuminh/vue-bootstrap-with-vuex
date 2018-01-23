<template lang="html">
  <b-modal id="modalInfo" :title="msg" @ok="handleOk">
    <b-row class="my-1">
      <b-col sm="2"><label for="input-small">Name:</label></b-col>
      <b-col sm="10">
        <b-form-input id="input-small" size="sm" type="text" v-model="modalData.name" disabled></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-1">
      <b-col sm="2"><label for="input-small">Description:</label></b-col>
      <b-col sm="10">
        <b-form-input id="input-small" size="sm" type="text" v-model="modalData.description"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-1">
      <b-col sm="2"><label for="input-small">Price:</label></b-col>
      <b-col sm="10">
        <b-form-input id="input-small" size="sm" type="number" v-model.number="modalData.price"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-1">
      <b-col sm="2"><label for="input-small">inStock:</label></b-col>
      <b-col sm="10">
        <b-form-input id="input-small" size="sm" type="text" v-model.number="modalData.inStock"></b-form-input>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
export default {
  name: 'InforModal',
  props: ['information'],
  data () {
    return {
      msg: 'Information Product',
      modalData: this.information
    }
  },
  methods: {
    deepCopy: function (obj) {
      return JSON.parse(JSON.stringify(obj))
    },
    handleOk: function () {
      this.$emit('update-profile', this.modalData)
    }
  },
  watch: {
    information: function () {
      this.modalData = this.deepCopy(this.information)
    }
  }
}
</script>

<style lang="css">
</style>
