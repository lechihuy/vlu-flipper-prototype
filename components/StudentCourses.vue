<template>
  <div class="flex flex-col gap-5">
    <div class="col-span-4 bg-white rounded-lg shadow-sm p-5 grid grid-cols-4 gap-5">
      <div>
        <h3 class="font-semibold mb-2 text-gray-700">Tên khóa học</h3>
        <input type="text" class="form-select px-3 py-2 w-full rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
      </div>

      <div>
        <h3 class="font-semibold mb-2 text-gray-700">Danh mục</h3>
        <select class="form-select px-3 py-2 w-full rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
          <option value="">Tất cả</option>
          <option v-for="category in categories" :key="category.id" :value="category.id"
          >{{ category.name }}</option>
        </select>
      </div>

      <div>
        <h3 class="font-semibold mb-2 text-gray-700">Ngày kết thúc đăng ký</h3>
        <input type="date" class="form-text w-full rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
      </div>

      <div>
        <h3 class="font-semibold mb-2 text-gray-700">Giá tiền</h3>
        <select class="form-select px-3 py-2 w-full rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
          <option value="">Tất cả</option>
          <option value="">FREE</option>
          <option value="">Có phí</option>
        </select>
      </div>

      <div>
        <h3 class="font-semibold mb-2 text-gray-700">Địa điểm học</h3>
        <select class="form-select px-3 py-2 w-full rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
          <option value="">Tất cả</option>
          <option value="">Online</option>
          <option value="">Offline</option>
        </select>
      </div>

      <div>
        <h3 class="font-semibold mb-2 text-gray-700">Giảng viên</h3>
        <select class="form-select px-3 py-2 w-full rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
          <option value="">Tất cả</option>
          <option value="" v-for="teacher in $store.state.teachers">{{ teacher.name }}</option>
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

    <div
      v-for="category in $store.state.categories"
      :key="category.id"
      class="bg-white rounded-lg shadow-sm p-5">
      <div class="flex items-center mb-5">
        <h3 class="text-gray-800 font-semibold">{{ category.name }}</h3>
        <a class="text-blue-500 ml-auto hover:text-blue-700" href="">Xem tất cả</a>
      </div>
      <div class="grid grid-cols-4 gap-5">
        <CategoryCourseItem
          v-for="course in $store.state.courses.filter(course => course.categoryId === category.id && course.status === 'Đang mở đăng ký')"
          :key="course.id"
          :course="course"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.state.categories
    }
  }
}
</script>
