<template>
  <div class="grid gap-10">
    <div>
      <h3 class="text-2xl mb-5 text-gray-800 flex items-center">Học viên
        <div class="ml-auto flex items-center gap-2">
          <a class="cursor-pointer flex items-center hover:bg-blue-600 hover:text-white text-base bg-white px-3 py-2 rounded-lg text-blue-500">
            <outline-download-icon class="w-5 h-5 mr-1" /> Xuất báo cáo
          </a>
        </div>
      </h3>
      <div class="grid grid-cols-2 gap-5 mb-5">
        <div class="bg-white rounded-lg shadow p-5">
          <p class="text-sm mb-2">Tất cả</p>
          <p class="text-4xl">150 học viên</p>
        </div>
        <div class="bg-white rounded-lg shadow p-5">
          <p class="text-sm mb-2">Phân loại</p>
          <div class="flex items-center">
            <div class="w-5 h-5 rounded-sm bg-green-500 mr-2"></div> 140 học viên đã tham gia
          </div>
          <div class="flex items-center">
            <div class="w-5 h-5 rounded-sm bg-gray-300 mr-2"></div> 10 học viên chưa tham gia
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3 class="text-2xl mb-5 text-gray-800 flex items-center">Khóa học
        <div class="ml-auto flex items-center gap-2">
          <a class="cursor-pointer flex items-center hover:bg-blue-600 hover:text-white text-base bg-white px-3 py-2 rounded-lg text-blue-500">
            <outline-download-icon class="w-5 h-5 mr-1" /> Xuất báo cáo
          </a>
        </div>
      </h3>
      <div class="grid grid-cols-3 gap-5 mb-5">
        <div class="bg-white rounded-lg shadow p-5">
          <p class="text-sm mb-2">Trong năm nay</p>
          <p class="text-4xl">10 <span class="text-xs text-gray-500">khóa học đã mở</span></p>
          <p class="text-green-500 flex items-center text-sm mt-2"><solid-trending-up-icon class="w-4 h-4 mr-1" /> 2 so với năm trước</p>
        </div>
        <div class="bg-white rounded-lg shadow p-5">
          <p class="text-sm mb-2">Tất cả</p>
          <p class="text-4xl">100 <span class="text-xs text-gray-500">khóa học đã mở</span></p>
        </div>
        <div class="bg-white rounded-lg shadow p-5">
          <p class="text-sm mb-2">Phân loại</p>
          <div class="flex items-center">
            <div class="w-5 h-5 rounded-sm bg-blue-500 mr-2"></div> 50 khóa học về Kỹ năng mềm
          </div>
          <div class="flex items-center">
            <div class="w-5 h-5 rounded-sm bg-green-500 mr-2"></div> 50 khóa học về Office
          </div>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-5">
        <div class="col-span-4 bg-white rounded-lg shadow p-5 flex flex-col gap-5">
          <div v-for="course in $store.state.courses.slice(0, 5)" class="flex flex-col gap-4">
            <div class="flex flex-items">
              <img :src="course.thumbnail" class="w-10 h-10 rounded-lg object-cover mr-2">
              <div>
                <NuxtLink class="truncate block" :to="`/courses/${course.id}?role=${user.role}`">{{ course.name }}</NuxtLink>
                <p class="text-sm text-gray-500">có 30 học viên</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-8 bg-white rounded-lg shadow p-5">
          <img src="/chart-course.png" alt="">
        </div>
      </div>
    </div>
    <div>
      <h3 class="text-2xl mb-5 text-gray-800 flex items-center">Chi phí đào tạo
        <div class="ml-auto flex items-center gap-2">
          <a class="cursor-pointer flex items-center hover:bg-blue-600 hover:text-white text-base bg-white px-3 py-2 rounded-lg text-blue-500">
            <outline-download-icon class="w-5 h-5 mr-1" /> Xuất báo cáo
          </a>
        </div>
      </h3>
      <div class="grid grid-cols-3 gap-5 mb-5">
        <div class="bg-white rounded-lg shadow p-5">
          <p class="text-sm mb-2">Trong năm nay</p>
          <p class="text-4xl">150,000,000đ</p>
          <p class="text-green-500 flex items-center text-sm mt-2"><solid-trending-up-icon class="w-4 h-4 mr-1" /> 30,000,000đ so với năm trước</p>
        </div>
        <div class="bg-white rounded-lg shadow p-5">
          <p class="text-sm mb-2">Chi phí hỗ trợ khóa học ngoài</p>
          <p class="text-4xl">50,000,000đ</p>
        </div>
        <div class="bg-white rounded-lg shadow p-5">
          <p class="text-sm mb-2">Tất cả</p>
          <p class="text-4xl">1,550,000,000đ</p>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-5">
        <div class="col-span-8 bg-white rounded-lg shadow p-5">
          <img src="/chart-fee.png" alt="">
        </div>
        <div class="col-span-4 bg-white rounded-lg shadow p-5 flex flex-col gap-5">
          <div v-for="course in $store.state.courses.slice(0, 5)" class="flex flex-col gap-4">
            <div class="flex flex-items">
              <img :src="course.thumbnail" class="w-10 h-10 rounded-lg object-cover mr-2">
              <div>
                <NuxtLink class="truncate block" :to="`/courses/${course.id}?role=${user.role}`">{{ course.name }}</NuxtLink>
                <p class="text-sm text-gray-500">{{ course.fee.toLocaleString('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                }) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>
