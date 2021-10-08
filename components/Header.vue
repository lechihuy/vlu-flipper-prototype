<template>
  <header class="bg-white border-b fixed top-0 left-0 w-full pl-60 z-20">
    <div class="px-5 py-3 flex h-14 items-center">
      <div class="flex-none">
        <div class="flex w-96 relative h-10">
          <div class="w-8 h-8 rounded-full bg-white shadow absolute top-1 left-1 flex items-center justify-center">
            <solid-search-icon class="w-5 h-5 text-gray-500" />
          </div>
          <input type="text" class="px-3 py-2 bg-gray-50 rounded-full shadow-inner w-full border border-gray-200 pl-11" placeholder="Tìm kiếm khóa học, giảng viên...">
        </div>
      </div>
      <div class="ml-auto">
        <div class="flex items-center bg-gray-50 rounded-full border border-gray-200">
          <img src="/student-avatar.jpg" alt="" class="w-10 h-10 rounded-full">
          <span class="text-gray-800 mx-2">Hồng Hoa</span>
          <outline-chevron-down-icon class="w-4 h-4 mr-2" />
        </div>
      </div>
    </div>
  </header>
</template>
