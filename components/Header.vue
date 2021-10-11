<template>
  <header class="bg-white border-b fixed top-0 left-0 w-full pl-64 z-20">
    <div class="px-10 py-3 flex h-14 items-center">
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
        <div class="text-gray-700 font-semibold mr-10 h-full flex items-center">
          <outline-light-bulb-icon class="w-5 h-5 mr-1" />
          Khám phá
        </div>

        <div class="text-gray-700 font-semibold mr-10 h-full flex items-center relative">
          <span class="flex absolute h-2 w-2 top-1 -right-1 -mt-1 -mr-1">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <a href="" class="block">Lớp học</a>
        </div>

        <div v-if="$store.state.user.role === 'student'" class="text-gray-700 font-semibold mr-10 h-full flex items-center relative">
          <span @click="toggleBookmark">
            <outline-heart-icon class="w-7 h-7 cursor-pointer" />
          </span>

          <div v-show="isShownBookmark" class="select-none p-3 bg-white border border-gray-200 shadow py-3 absolute w-80 top-10 -right-2 rounded-lg  font-normal">
            <h3 class="font-semibold mb-2">Danh sách yêu thích</h3>
            <div v-if="bookmark.length > 0" class="flex flex-col gap-4">
              <div v-for="course in bookmark"
                   class="flex items-center">
                <NuxtLink :to="`/courses/${course.id}?role=${user.role}`">
                  <img :src="course.thumbnail" class="object-cover rounded-lg border border-gray-200 w-14 h-14">
                </NuxtLink>
                <div class="ml-2 overflow-hidden">
                  <NuxtLink :to="`/courses/${course.id}?role=${user.role}`">
                    <p class="truncate text-gray-800 overflow-hidden block min-w-0">{{ course.name }}</p>
                  </NuxtLink>
                  <span
                    v-if="course.enrolled === course.slots"
                    class="bg-green-100 px-1.5 py-0.5 rounded-full text-green-700 text-xs">Đã đầy</span>
                  <span
                    v-else
                    class="bg-gray-100 px-1.5 py-0.5 rounded-full text-gray-700 text-xs">
                    Chưa đủ học viên ({{ course.enrolled }}/{{ course.slots }})
                  </span>
                </div>
                <span @click="removeBookmark(course.id)" class="ml-auto">
                  <outline-x-circle-icon class="w-6 h-6 text-gray-500 cursor-pointer"  />
                </span>
              </div>
            </div>
            <div v-else class="text-gray-500 text-sm py-2">Hãy thêm khóa học yêu thích đầu tiên.</div>
          </div>
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
  data() {
    return {
      isShownBookmark: false,
    }
  },

  computed: {
    bookmark() {
      return this.$store.state.courses.filter(course => this.user.bookmark.indexOf(course.id) > -1)
    },

    user() {
      return this.$store.state.user
    },
  },

  methods: {
    removeBookmark(courseId) {
      this.$store.commit('removeBookmark', { courseId })
    },

    toggleBookmark() {
      this.isShownBookmark = ! this.isShownBookmark
    }
  }
}
</script>
