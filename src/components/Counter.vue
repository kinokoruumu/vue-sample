<template>
  <div>
    {{ count }}
    <button v-on:click="increment">+</button>
    <button v-on:click="decrement">-</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      count: state => state.count
    })
  },
  methods: {
    increment () {
      this.$store.dispatch('incrementAsync')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  }
}
</script>
