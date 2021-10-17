<template>
  <div class="bg-white shadow rounded-lg p-5">
    <h3 class="text-2xl text-gray-800 mb-5">Tạo đơn yêu cầu hỗ trợ học phí</h3>

    <form class="flex flex-col gap-5">
      <div>
        <label class="font-semibold text-gray-700 mb-2 block">Tên khóa học <span class="text-red-500">*</span></label>
        <input type="text" class="form-text px-3 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
      </div>
      <div>
        <label class="font-semibold text-gray-700 mb-2 block">Tài liệu minh chứng <span class="text-red-500">*</span></label>
        <input type="file" class="form-selec px-3 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
      </div>
      <div>
        <label class="font-semibold text-gray-700 mb-2 block">Ghi chú</label>
        <textarea class="form-textarea px-3 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
        </textarea>
      </div>
      <div>
        <NuxtLink :to="'/support?role=' + $store.state.user.role" class="bg-gray-100 inline-block text-gray-800 rounded-lg px-3 py-2 hover:bg-gray-200">Trở về</NuxtLink>
        <button type="button" class="bg-blue-500 text-white rounded-lg px-3 py-2 hover:bg-blue-600">Khởi tạo</button>
      </div>
    </form>
  </div>
</template>
