<template>
  <li class="list-item list-item-task">
    <FormItemInputCheck v-model="isChecked" />
    <p class="text">{{ todos }}</p>
  </li>
</template>

<script>
export default {
  props: {
    todos: {
      type: Object,
      // default: {},
    },
    // text: {
    //   type: String,
    //   default: '',
    // },
  },
  data() {
    return {
      isChecked: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.list-item-task {
  padding: 6px;
  display: flex;

  > .text {
    // padding: 6px 0;
    display: inline-block;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: -5px;
      display: inline-block;
      width: 676px;
      height: 1px;
      background-color: #bbbbbb;
    }
  }
}
</style>
