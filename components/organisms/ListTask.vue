<template>
  <ul class="list list-task">
    <li is="ListItemTask" v-for="todo in todos" :key="todo.id" :text="todo">
      {{ todo.todo }}
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user
    },
    todos() {
      return this.$store.getters['todo/todos'].filter((e) => {
        return e.uid === this.user.uid
      }) //eslint-disable-line
      // return this.$store.getters['todo/todos']
      // return this.$sotre.dispatch('getData')
    },
  },
}
</script>

<style lang="scss" scoped>
.list-task {
}
</style>
