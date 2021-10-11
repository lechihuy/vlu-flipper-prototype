<template>
  <div class="flex flex-col gap-5">

    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-8 bg-white rounded-lg shadow-sm">
        <div class="p-5">
          <div class="flex items-center mb-5">
            <h3 class="text-gray-800 font-semibold">Dành cho bạn</h3>
            <a class="text-blue-500 ml-auto hover:text-blue-700" href="">Xem tất cả</a>
          </div>

          <div class="grid grid-cols-2 gap-5">
            <RecommendCourseItem
              v-for="course in $store.state.courses.filter(course => course.isRecommend === true)"
              :key="course.id"
              :course="course"
            />
          </div>
        </div>
      </div>

      <div class="col-span-4 bg-white rounded-lg shadow-sm">
        <div class="p-5">
          <div class="flex items-center mb-5">
            <h3 class="text-gray-800 font-semibold">Khóa học đã đăng ký</h3>
            <a class="text-blue-500 ml-auto hover:text-blue-700" href="">Xem tất cả</a>
          </div>
          <div class="flex flex-col gap-4">
            <div v-for="course in $store.state.courses.filter(course => $store.state.user.enrolled.indexOf(course.id) > -1)" class="flex items-center">
              <img :src="course.thumbnail" class="object-cover rounded-lg border border-gray-200 w-14 h-14">
              <div class="ml-2 overflow-hidden">
                <p class="truncate text-gray-800 overflow-hidden block min-w-0">{{ course.name }}</p>
                <span
                  v-if="course.enrolled === course.slots"
                  class="bg-green-100 px-1.5 py-0.5 rounded-full text-green-700 text-xs">Lớp sẵn sàng</span>
                <span
                  v-else
                  class="bg-gray-100 px-1.5 py-0.5 rounded-full text-gray-700 text-xs">
                  Chưa đủ học viên ({{ course.enrolled }}/{{ course.slots }})
                </span>
              </div>
            </div>
          </div>
        </div>
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
          v-for="course in $store.state.courses.filter(course => course.categoryId === category.id)"
          :key="course.id"
          :course="course"
        />
      </div>
    </div>

  </div>
</template>

<script>
export default {
}
</script>
