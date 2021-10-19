<template>
  <div>
    <NuxtLink :to="`/courses/${course.id}?role=${$store.state.user.role}`">
      <img :src="course.thumbnail" class="w-full rounded-lg border border-gray-200 h-32 object-cover">
    </NuxtLink>
    <h3 class="text-gray-800 font-semibold my-2 line-clamp-1">
      <NuxtLink :to="`/courses/${course.id}?role=${$store.state.user.role}`">
        {{ course.name }}
      </NuxtLink>
    </h3>
    <div class="flex items-center">
      <span class="text-xs text-gray-500 flex items-center">
        <outline-user-icon class="w-4 h-4 mr-1" />
        Gv. {{ $store.state.teachers.find(teacher => teacher.id === course.teacherId).name }}
      </span>
    </div>
    <div class="mt-2 flex items-center">
      <span v-if="course.price === 0" class="text-green-500 font-semibold text-sm">FREE</span>
      <span v-else class="text-gray-700 font-semibold text-sm">{{ course.price.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }) }}</span>
      <span class="px-2 inline-flex text-xs ml-auto leading-5 font-semibold rounded-full bg-green-100 text-green-800"
            v-if="course.type === 'online'">Online</span>
      <span class="px-2 inline-flex text-xs ml-auto leading-5 font-semibold rounded-full bg-blue-100 text-blue-800"
            v-else>Offline</span>
    </div>
    <div class="mt-4">
      <div class="flex mb-1">
        <span class="text-xs text-gray-500">Kết thúc đăng ký sau {{ course.daysLeft }} ngày nữa</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
}
</script>

