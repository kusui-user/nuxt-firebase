<template>
  <textarea
    class="form-item form-item-textarea"
    placeholder="メッセージ"
  ></textarea>
</template>

<script>
export default {
  props: {
    itemStatus: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.form-item-textarea {
  padding: 12px 16px;
  width: 100%;
  line-height: 150%;
}
</style>
