<template>
  <div class="bg-white shadow rounded-lg p-5">
    <h3 class="text-2xl text-gray-800 mb-5">Sửa đơn yêu cầu hỗ trợ học phí</h3>

    <form class="flex flex-col gap-5">
      <div>
        <label class="font-semibold text-gray-700 mb-2 block">Tên khóa học <span class="text-red-500">*</span></label>
        <input type="text" class="form-text px-3 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
          :value="support.course"
        >
      </div>
      <div>
        <label class="font-semibold text-gray-700 mb-2 block">Địa điểm học <span class="text-red-500">*</span></label>
        <input type="text" :value="support.address" class="form-text px-3 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
      </div>
      <div>
        <label class="font-semibold text-gray-700 mb-2 block">Tài liệu minh chứng (có thể upload nhiều file) <span class="text-red-500">*</span></label>
        <div v-if="support.attachments">
          <div class="text-gray-600 p-2 bg-gray-100 rounded-lg mb-2 inline-block" v-for="attachment in support.attachments">
            {{ attachment }}
          </div>
        </div>
        <input type="file" class="form-selec px-3 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
      </div>
      <div>
        <label class="font-semibold text-gray-700 mb-2 block">Ghi chú</label>
        <textarea class="form-textarea px-3 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
        </textarea>
      </div>
      <div>
        <NuxtLink :to="'/support?role=' + $store.state.user.role" class="bg-gray-100 inline-block text-gray-800 rounded-lg px-3 py-2 hover:bg-gray-200">Trở về</NuxtLink>
        <button type="button" class="bg-blue-500 text-white rounded-lg px-3 py-2 hover:bg-blue-600">Lưu thay đổi</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const supportId = parseInt(params.slug)

    return { supportId }
  },

  computed: {
    support() {
      return this.$store.state.supports.find(course => course.id === this.supportId)
    },
  }
}
</script>
