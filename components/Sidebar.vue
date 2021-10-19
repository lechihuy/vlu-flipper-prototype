<template>
  <aside class="fixed bg-gray-800 top-0 left-0 min-h-screen w-64 z-20">
    <div class="flex justify-center h-14 items-center bg-gray-900">
      <Logo class="text-white" />
    </div>

    <div class="flex px-4 py-3 items-center absolute bottom-0 left-0 w-full">
      <img :src="$store.state.user.avatar" class="rounded-full w-10 h-10" />
      <div class="ml-2">
        <span class="text-white text-sm block">
          {{ user.name }}
        </span>

        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
              v-if="user.role === 'student'">Học viên</span>
        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800"
              v-else>Quản trị viên</span>
      </div>
      <outline-cog-icon class="w-6 h-6 text-white ml-auto" />
    </div>

    <ul class="px-2 mt-4">
      <li class="text-white px-3 py-2 rounded-lg hover:bg-gray-900 font-semibold hover:cursor-pointer relative">
        <NuxtLink :to="`/courses?role=${user.role}`" class="block flex items-center">
          <outline-bookmark-icon class="w-5 h-5 mr-2" />  {{ user.role === 'student' ? 'Khóa học' : 'Quản lý khóa học' }}
        </NuxtLink>
      </li>

      <li v-if="user.role === 'student'" class="text-white px-3 py-2 rounded-lg hover:bg-gray-900 font-semibold hover:cursor-pointer relative">
        <NuxtLink :to="`/courses/enrolled?role=${user.role}`" class="block flex items-center">
          <outline-clock-icon class="w-5 h-5 mr-2" /> Tình trạng khóa học
        </NuxtLink>
      </li>

      <li v-if="user.role === 'student'" class="text-white px-3 py-2 rounded-lg hover:bg-gray-900 font-semibold hover:cursor-pointer relative">
        <NuxtLink :to="'/classes?role=' + user.role" class="block flex items-center">
          <outline-users-icon class="w-5 h-5 mr-2" /> Lớp học
        </NuxtLink>
        <span class="flex absolute h-3 w-3 top-3.5 right-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      </li>

      <li v-if="user.role === 'student'" class="text-white px-3 py-2 rounded-lg hover:bg-gray-900 font-semibold hover:cursor-pointer relative">
        <NuxtLink :to="`/support?role=${user.role}`" class="block flex items-center">
          <outline-cash-icon class="w-5 h-5 mr-2" /> Hỗ trợ học phí
        </NuxtLink>
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
