<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="item in todos">
        <todo :text="item.text" />
      </li>
    </ul>
  </div>
</template>

<script>
import Todo from './Todo'
export default {
  components: { Todo },
  data () {
    return {
      title: 'Todo',
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
