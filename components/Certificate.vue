<template>
  <div class="bg-gray-300">
    <div class="flex">
      <img class="w-32" src="https://www.vanlanguni.edu.vn/images/logos/logo-vlu.png" alt="">
    </div>
    <div class="pt-10 pb-20">
      <div class="flex justify-center">
        <p class="text-xl uppercase text-red-400">Giấy chứng chỉ</p>
      </div>
      <div class="flex justify-center">
        <h1 class="text-2xl font-semibold">{{ name }}</h1>
      </div>
      <div class="flex justify-center">
        <p>đã hoàn thành khóa học <span class="text-blue-500 font-semibold">{{ course }}</span></p>
      </div>
    </div>
    <div class="flex justify-end p-2">
      <p class="italic">Ngày {{ date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    course: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: false,
      default: '13-08-2021'
    }
  }
}
</script>
