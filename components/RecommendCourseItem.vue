<template>
  <div>
    <NuxtLink :to="`/courses/${course.id}?role=${user.role}`">
      <img :src="course.thumbnail" class="w-full rounded-lg border border-gray-200 h-44 object-cover">
    </NuxtLink>
    <h3 class="text-gray-800 font-semibold my-2 line-clamp-1">
      <NuxtLink :to="`/courses/${course.id}?role=${user.role}`">
        {{ course.name }}
      </NuxtLink>
    </h3>
    <div class="flex items-center">
      <span class="text-xs text-gray-500">
        <outline-user-icon class="w-4 h-4 inline-block" />
        {{ teachers.find(teacher => teacher.id === course.teacherId).name }}
      </span>
      <span class="text-xs text-gray-500 ml-auto">
        <solid-star-icon class="w-4 h-4 inline-block text-yellow-500" /> {{ course.rating }}
      </span>
    </div>
    <div class="mt-2">
      <span class="text-gray-700 font-semibold text-sm">{{ course.price }}</span>
    </div>
    <div class="mt-4">
      <div class="flex mb-1">
        <span class="text-xs text-gray-500">Kết thúc đăng ký sau {{ course.daysLeft }} ngày nữa</span>
        <span class="ml-auto text-xs text-gray-500">
          <solid-user-icon class="w-3 h-3 inline-block" />
          {{ course.enrolled }}/{{ course.slots }}
        </span>
      </div>
      <div class="rounded-full shadow-inner bg-gray-100">
        <div class="h-2 bg-green-400 rounded-full" :style="{width: `${(course.enrolled/course.slots)*100}%`}"></div>
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

  inject: ['user', 'teachers', 'categories']
}
</script>
