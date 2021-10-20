<template>
  <div class="flex items-center">
    <span v-if="status === 'Đang mở đăng ký'"
          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
      Đang mở đăng ký
    </span>

    <span v-if="status === 'Đóng đăng ký'"
            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
      Đóng đăng ký
    </span>

    <span v-if="status === 'Hủy lớp'"
          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
      Hủy lớp
    </span>
  </div>
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
