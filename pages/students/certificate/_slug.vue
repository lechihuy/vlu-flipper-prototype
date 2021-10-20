<template>
  <div class="bg-white rounded-lg shadow p-5">
    <h3 class="text-2xl text-gray-800 mb-5">Tạo chứng chỉ</h3>
    <div class="grid grid-cols-2 gap-5">
      <div>
        <Certificate :name="name" :course="course" :date="date" />
      </div>
      <div class="flex flex-col gap-5">
        <div>
          <label class="font-semibold text-gray-700 mb-2 block">Họ tên <span class="text-red-500">*</span></label>
          <input type="text" v-model="name" class="form-text px-3 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
        </div>
        <div>
          <label class="font-semibold text-gray-700 mb-2 block">Khóa học <span class="text-red-500">*</span></label>
          <input type="text" v-model="course" class="form-text px-3 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
        </div>
        <div>
          <label class="font-semibold text-gray-700 mb-2 block">Ngày <span class="text-red-500">*</span></label>
          <input type="text" v-model="date" class="form-text px-3 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div class="flex items-center">
        <NuxtLink :to="`/students/${student.id}?role=` + $store.state.user.role" class="bg-white border border-gray-300 inline-block text-gray-800 rounded-lg px-3 py-2 hover:bg-gray-200">Trở về</NuxtLink>
        <div class="ml-auto">
          <button type="button" class="bg-blue-500 text-white rounded-lg px-3 py-2 hover:bg-blue-600">Khởi tạo</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({params}) {
    const studentId = parseInt(params.slug)

    return {studentId}
  },

  data() {
    return {
      name: null,
      course: null,
      date: '13/08/2021',
    }
  },

  mounted() {
    this.name = this.student.name
  },

  computed: {
    student() {
      return this.$store.state.students.find(student => student.id === this.studentId)
    },
  },
}
</script>
