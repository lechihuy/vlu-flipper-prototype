<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-8 bg-white rounded-lg shadow-sm">
      <div class="p-5">
        <div class="flex items-center mb-5">
          <h3 class="text-gray-800 font-semibold">Dành cho bạn</h3>
          <a class="text-blue-500 ml-auto hover:text-blue-700" href="">Xem tất cả</a>
        </div>

        <div class="grid grid-cols-2 gap-5">
          <div v-for="course in courses.filter(course => course.isRecommend === true)">
            <img :src="course.thumbnail" class="w-full rounded-lg border border-gray-200 h-44 object-cover">
            <h3 class="text-gray-800 font-semibold my-2">{{ course.name }}</h3>
            <div class="flex items-center">
              <span class="text-xs text-gray-500">
                 <outline-user-icon class="w-4 h-4 inline-block" /> {{ course.teacher }}
              </span>
              <span class="text-xs text-gray-500 ml-auto">
                <solid-star-icon class="w-4 h-4 inline-block text-yellow-500" /> {{ course.rating }}
              </span>
            </div>
            <div class="mt-4">
              <div class="flex mb-1">
                <span class="text-xs text-gray-500">Kết thúc đăng ký sau {{ course.daysLeft }} ngày nữa</span>
                <span class="ml-auto text-xs text-gray-500">({{ course.enrolled }}/{{ course.slots }})</span>
              </div>
              <div class="rounded-full shadow-inner">
                <div class="h-2 bg-green-400 rounded-full" :style="{width: `${(course.enrolled/course.slots)*100}%`}"></div>
              </div>
            </div>
          </div>

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
          <div class="flex items-center">
            <img src="/light-bulb.png" class="rounded-lg border border-gray-200 w-14 h-14">
            <div class="ml-2">
              <a href="" class="text-gray-800 block mb-1">Đọc sách siêu tốc</a>
              <span class="bg-green-100 px-1.5 py-0.5 rounded-full text-green-700 text-xs">Lớp sẵn sàng</span>
            </div>
          </div>

          <div class="flex items-center">
            <img src="/light-bulb.png" class="rounded-lg border border-gray-200 w-14 h-14">
            <div class="ml-2">
              <a href="" class="text-gray-800 block mb-1">Đọc sách siêu tốc</a>
              <span class="bg-gray-100 px-1.5 py-0.5 rounded-full text-gray-700 text-xs">Chưa đủ số lượng</span>
            </div>
          </div>

          <div class="flex items-center">
            <img src="/light-bulb.png" class="rounded-lg border border-gray-200 w-14 h-14">
            <div class="ml-2">
              <a href="" class="text-gray-800 block mb-1">Đọc sách siêu tốc</a>
              <span class="bg-gray-100 px-1.5 py-0.5 rounded-full text-gray-700 text-xs">Chưa đủ số lượng</span>
            </div>
          </div>

          <div class="flex items-center">
            <img src="/light-bulb.png" class="rounded-lg border border-gray-200 w-14 h-14">
            <div class="ml-2">
              <a href="" class="text-gray-800 block mb-1">Đọc sách siêu tốc</a>
              <span class="bg-gray-100 px-1.5 py-0.5 rounded-full text-gray-700 text-xs">Chưa đủ số lượng</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['courses'],
}
</script>
