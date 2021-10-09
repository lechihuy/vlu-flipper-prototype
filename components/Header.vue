<template>
  <header class="bg-white border-b fixed top-0 left-0 w-full pl-64 z-20">
    <div class="px-5 py-3 flex h-14 items-center">

      <div class="flex-none">
        <div class="flex w-96 relative h-10">
          <div class="w-8 h-8 rounded-full bg-white shadow absolute top-1 left-1 flex items-center justify-center">
            <solid-search-icon class="w-5 h-5 text-gray-500" />
          </div>
          <input type="text"
                 class="px-3 py-2 bg-gray-50 rounded-full shadow-inner w-full border border-gray-200 pl-11 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
                 placeholder="Tìm kiếm khóa học..."
          >
        </div>
      </div>

      <div class="ml-auto h-10 flex flex-row items-center">
        <div class="text-gray-700 font-semibold mr-5 h-full flex items-center">
          <outline-light-bulb-icon class="w-5 h-5 mr-1" />
          Khám phá
        </div>

        <div class="text-gray-700 font-semibold mr-5 h-full flex items-center">
          <span class="rounded-full bg-red-500 px-1 text-white text-xs mr-1">LIVE</span>
          Lớp học
        </div>

        <div class="flex items-center bg-gray-50 rounded-full cursor-pointer hover:bg-gray-100">
          <img :src="user.avatar" alt="" class="w-8 h-8 rounded-full">
          <outline-chevron-down-icon class="w-4 h-4 ml-1 mr-2" />
        </div>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  inject: ['user'],
}
</script>
