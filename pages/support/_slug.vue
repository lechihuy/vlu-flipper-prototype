<template>
  <div class="bg-white shadow rounded-lg p-5">
    <h3 class="text-2xl text-gray-800 mb-5">
      {{ user.role === 'student' ? 'Sửa đơn yêu cầu hỗ trợ học phí' : 'Xem xét đơn yêu cầu hỗ trợ học phí' }}
    </h3>

    <form v-if="user.role === 'student'" class="flex flex-col gap-5">
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

    <div v-else>
      <div class="grid grid-cols-12 gap-5">
        <div class="col-span-4 text-gray-800 font-semibold flex items-center">
          Học viên
        </div>
        <div class="col-span-8 flex items-center">
          <div class="flex items-center col-span-3">
            <img :src="'https://ui-avatars.com/api/?name=' + $store.state.students.find(std => std.id === support.student).name" class="w-10 h-10 rounded-full mr-5">
            <div>
              {{ $store.state.students.find(std => std.id === support.student).name }}
              <div class="text-xs text-gray-500 italic">
                {{ $store.state.students.find(std => std.id === support.student).email }}
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-4 text-gray-800 font-semibold flex items-center">
          Khóa học
        </div>
        <div class="col-span-8 flex items-center">
          {{ support.course }}
        </div>

        <div class="col-span-4 text-gray-800 font-semibold flex items-center">
          Địa điểm
        </div>
        <div class="col-span-8 flex items-center">
          {{ support.address }}
        </div>

        <div class="col-span-4 text-gray-800 font-semibold flex items-center">
          Tài liệu minh chứng
        </div>
        <div class="col-span-8 flex items-center">
          <div v-if="support.attachments">
            <div class="text-gray-600 p-2 bg-gray-100 rounded-lg mb-2 inline-block flex items-center" v-for="attachment in support.attachments">
              {{ attachment }} <outline-download-icon class="w-5 h-5 ml-2" />
            </div>
          </div>
        </div>

        <div class="col-span-4 text-gray-800 font-semibold flex items-center">
          Tỷ lệ hỗ trợ
        </div>
        <div class="col-span-8 flex items-center">
          <select class="form-select px-3 py-2 w-32 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
            <option value="">&mdash;</option>
            <option value="" :selected="support.percent === '0%'">Từ chối</option>
            <option value="" :selected="support.percent === '10%'">10%</option>
            <option value="" :selected="support.percent === '20%'">20%</option>
            <option value="" :selected="support.percent === '30%'">30%</option>
            <option value="" :selected="support.percent === '40%'">40%</option>
            <option value="" :selected="support.percent === '50%'">50%</option>
          </select>
        </div>

        <div class="col-span-4 text-gray-800 font-semibold flex items-center">
          Ngày gửi
        </div>
        <div class="col-span-8 flex items-center">
          13/08/2021
        </div>

      </div>
      <div class="mt-10">
        <NuxtLink :to="'/support?role=' + $store.state.user.role" class="bg-gray-100 inline-block text-gray-800 rounded-lg px-3 py-2 hover:bg-gray-200">Trở về</NuxtLink>
        <button type="button" class="bg-blue-500 text-white rounded-lg px-3 py-2 hover:bg-blue-600">Lưu thay đổi</button>
      </div>
    </div>
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

    user() {
      return this.$store.state.user
    }
  }
}
</script>
