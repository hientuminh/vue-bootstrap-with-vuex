<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <cart></cart>
    <b-container fluid>
  <!-- User Interface controls -->
    <b-table show-empty
             stacked="md"
             :items="products"
             :fields="fields"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
    >
      <template slot="actions" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-button size="sm" variant="primary" @click="info(row.item, row.index)" class="mr-1">
          Info modal
        </b-button>
        <b-button :disabled="row.item.inStock==0" size="sm" variant="success" @click="addToCart(row.item, row.index, $event.target)" class="mr-1">
          Add cart
        </b-button>
        <b-button size="sm" variant="danger" @click="remove(row.item, row.index, $event.target)" class="mr-1">
          Remove
        </b-button>
      </template>
    </b-table>
    <info-modal :information="modalData" @update-profile="updateProfile"></info-modal>
  </b-container>
  </div>
</template>

<script>
import InforModal from '@/components/InforModal'
import Cart from '@/components/Cart'
export default {
  name: 'Products',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      fields: [
        { key: 'id', label: 'ID', sortable: true },
        { key: 'name', label: 'Person Full name', sortable: true },
        { key: 'price', label: 'Price ($)', sortable: true, 'class': 'text-center' },
        { key: 'inStock', label: 'In Stock', sortable: true, 'class': 'text-center' },
        { key: 'actions', label: 'Actions' }
      ],
      products: [
        {
          id: 1,
          name: 'MacBook Pro (15 inch)',
          description: 'This laptop has a super crisp Retina display. Yes, we know that it\'s overpriced...',
          price: 2999,
          inStock: 50
        },
        {
          id: 2,
          name: 'Samsung Galaxy Note 7',
          description: 'Unlike the overpriced MacBook Pro, we\'re selling this one a bit cheap, as we heard it might explode...',
          price: 299,
          inStock: 755
        },
        {
          id: 3,
          name: 'HP Officejet 5740 e-All-in-One-printer',
          description: 'This one might not last for so long, but hey, printers never work anyways, right?',
          price: 149,
          inStock: 5
        },
        {
          id: 4,
          name: 'iPhone 7 cover',
          description: 'Having problems keeping a hold of that phone, huh? Ever considered not dropping it in the first place?',
          price: 49,
          inStock: 42
        },
        {
          id: 5,
          name: 'iPad Pro (9.7 inch)',
          description: 'We heard it\'s supposed to be pretty good. At least that\'s what people say.',
          price: 599,
          inStock: 0
        },
        {
          id: 6,
          name: 'OnePlus 3 cover',
          description: 'Does your phone spend most of its time on the ground? This cheap piece of plastic is the solution!',
          price: 19,
          inStock: 81
        }
      ],
      sortBy: 'id',
      sortDesc: false,
      modalData: {}
    }
  },
  methods: {
    info: function (item, index) {
      this.modalData = item
      this.$root.$emit('bv::show::modal', 'modalInfo')
    },
    addToCart: function (item, index) {
      this.$store.dispatch('addCart', 1)
    },
    updateProfile: function (product) {
      for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].id === product.id) {
          this.$set(this.products, i, product)
          break
        }
      }
    }
  },
  components: {
    'info-modal': InforModal,
    'cart': Cart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
