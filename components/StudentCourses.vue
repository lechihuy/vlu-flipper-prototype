<template>
  <div class="flex flex-col gap-5">
    <div class="bg-yellow-100 p-5 text-yellow-800 rounded-lg shadow">
      <h3 class="flex items-center text-xl mb-2"><solid-exclamation-icon class="w-6 h-6 mr-1" /> Trước khi trải nghiệm</h3>
      Để trải nghiệm chức năng thanh toán khóa học, hãy đăng ký khóa học <strong>"Kỹ năng thuyết trình"</strong>, vì khi lớp đủ số lượng học viên mới kích hoạt thanh toán.
    </div>

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
            <h3 class="text-gray-800 font-semibold">Tình trạng khóa học</h3>
            <NuxtLink
              :to="'/courses/enrolled?role=' + $store.state.user.role"
              class="text-blue-500 ml-auto hover:text-blue-700"
              v-if="$store.state.user.enrolled.length > 0">
              Xem tất cả
            </NuxtLink>
          </div>
          <template>
            <div v-if="$store.state.user.enrolled.length > 0" class="flex flex-col gap-4">
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
            <div v-else class="text-center py-10">
              <div>
                <img src="/empty-enroll.jpg" class="w-36 h-36 inline-block mx-auto">
                <p class="text-gray-600">Hãy đăng ký khóa học đầu tiên.</p>
              </div>
            </div>
          </template>
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
