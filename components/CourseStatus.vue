<template>
  <span v-if="status === 'Đang mở đăng ký'"
    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
    Đang mở đăng ký
  </span>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      required: true
    }
  }
}
</script>
