<template>
  <aside class="fixed bg-gray-800 top-0 left-0 min-h-screen w-64 z-20">
    <div class="flex justify-center h-14 items-center bg-gray-900">
      <Logo class="text-white" />
    </div>

    <div class="flex px-4 py-3 items-center absolute bottom-0 left-0 w-full">
      <img :src="user.avatar" class="rounded-full w-10 h-10" />
      <div class="ml-2">
        <span class="text-white text-sm block">
          {{ user.name }}
        </span>

        <span class="bg-green-100 px-1.5 py-0.5 rounded-full text-green-700 text-xs"
              v-if="user.role === 'student'">Học viên</span>
        <span class="bg-blue-100 px-1.5 py-0.5 rounded-full text-blue-700 text-xs"
              v-else>Giảng viên</span>
      </div>
      <outline-cog-icon class="w-6 h-6 text-white ml-auto" />
    </div>

    <ul class="px-2 mt-4">
      <li class="text-white px-3 py-2 rounded-lg hover:bg-gray-900 font-semibold hover:cursor-pointer">
        <a class="block flex items-center"><outline-view-grid-icon class="w-5 h-5 mr-2" /> Tổng quan</a>
      </li>
      <li class="text-white px-3 py-2 rounded-lg hover:bg-gray-900 font-semibold hover:cursor-pointer">
        <NuxtLink :to="`/courses?role=${user.role}`" class="block flex items-center"><outline-bookmark-icon class="w-5 h-5 mr-2" /> Khóa học</NuxtLink>
      </li>
      <li class="text-white px-3 py-2 rounded-lg hover:bg-gray-900 font-semibold hover:cursor-pointer">
        <a href="" class="block flex items-center"><outline-users-icon class="w-5 h-5 mr-2" /> Lớp học</a>
      </li>
    </ul>
  </aside>
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
