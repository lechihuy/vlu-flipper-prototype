<template>
  <div class="flex flex-col gap-5">
    <h3 class="text-2xl text-gray-800 flex items-center">Quản lý học viên
    </h3>

    <div class="col-span-4 bg-white rounded-lg shadow-sm p-5 grid grid-cols-4 gap-5">
      <div>
        <h3 class="font-semibold mb-2 text-gray-700">Tên học viên</h3>
        <input type="text" class="form-select px-3 py-2 w-full rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
      </div>

      <div>
        <h3 class="font-semibold mb-2 text-gray-700">Địa chỉ Email</h3>
        <input type="text" class="form-select px-3 py-2 w-full rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
      </div>

      <div>
        <h3 class="font-semibold mb-2 text-gray-700">Trạng thái</h3>
        <select class="form-select px-3 py-2 w-full rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
          <option value="">Tất cả</option>
          <option value="">Đã tham gia học</option>
          <option value="">Chưa tham gia học</option>
        </select>
      </div>

      <div class="col-span-4 flex items-center gap-2">
        <button type="button" class="border text-white bg-blue-500 block rounded-lg px-3 py-2 hover:bg-blue-600">
          Tìm kiếm
        </button>

        <button type="button" class="border border-gray-300 text-gray-500 block rounded-lg px-3 py-2 hover:text-gray-700 hover:border-gray-700">
          Làm mới bộ lọc
        </button>
      </div>
    </div>

    <StudentList
      v-if="students.length > 0"
      :students="students"
    />

    <div v-else class="text-center py-20">
      <div>
        <img src="/empty-enroll.jpg" class="w-52 h-52 rounded-full inline-block mx-auto">
        <p class="text-gray-600 mt-10 text-xl">Không tìm thấy học viên nào.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    students() {
      return this.$store.state.students
    },

    user() {
      return this.$store.state.user
    }
  },
}
</script>

