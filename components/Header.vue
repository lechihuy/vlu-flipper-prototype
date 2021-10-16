<template>
  <header class="bg-white border-b fixed top-0 left-0 w-full pl-64 z-20">
    <div class="px-10 py-3 flex h-14 items-center">
      <div class="ml-auto h-10 flex flex-row items-center">
        <div class="text-gray-700 font-semibold mr-10 h-full flex items-center relative">
          <span class="flex absolute h-2 w-2 top-1 -right-1 -mt-1 -mr-1" v-show="Object.keys($store.state.classes[0].liveLesson).length">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <NuxtLink :to="'/classes?role=' + user.role" class="block">Lớp học</NuxtLink>
        </div>

        <div class="text-gray-700 font-semibold mr-10 h-full flex items-center relative">
          <span class="flex absolute h-2 w-2 top-1 right-0 -mt-1 -mr-1">
            <span class="inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <outline-bell-icon class="w-7 h-7 cursor-pointer" />
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
  computed: {
    user() {
      return this.$store.state.user
    },
  },
}
</script>
