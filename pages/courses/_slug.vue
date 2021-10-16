<template>
  <div>
    <Modal ref="confirmEnrollCourseModal" @submit="enrollCourse(course.id)" />
    <Modal ref="confirmUnEnrollCourseModal" @submit="unEnrollCourse(course.id)" />

    <div class="rounded-lg overflow-hidden shadow">
      <div class="grid grid-cols-12 bg-gray-700 p-10 gap-10">
        <div class="col-span-7 relative">
          <h1 class="text-white text-3xl font-semibold mb-2">{{ course.name }}</h1>
          <p class="text-base text-gray-200">{{ course.description }}</p>

          <div class="mt-2 flex gap-4">
            <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg">
              {{ category.name }}
            </span>

            <span class="flex items-center text-gray-100">
              <solid-clock-icon class="w-5 h-5 text-gray-100 ml-2 mr-1" /> {{ course.lessons }} tiết
            </span>
          </div>

          <div class="w-full" >
            <div class="px-4 py-3 r bg-gray-800 rounded-lg mt-4">
              <div class="flex items-center">
                <img :src="teacher.avatar" class="rounded-full w-10 h-10" />
                <div class="ml-2">
                <span class="text-white text-sm block">
                  {{ teacher.name }}
                </span>

                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800"
                    >Giảng viên</span>
                </div>
              </div>
              <div class="text-gray-400 text-xs mt-2">
                {{ teacher.description }}
              </div>
            </div>

            <div class="mt-5">
              <div class="flex mb-1">
                <span class="text-base text-gray-200">Kết thúc đăng ký sau {{ course.closedAt }} (còn {{ course.daysLeft }} ngày nữa)</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-5 bg-white overflow-hidden rounded-lg relative">
          <img :src="course.thumbnail" class="w-full">

          <div class="p-5">
            <div>
              <p v-if="course.price === 0" class="text-green-500 text-3xl font-bold">FREE</p>
              <p v-else class="text-gray-800 text-3xl font-bold">{{ course.price.toLocaleString('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }) }}</p>
            </div>

            <div class="flex flex-col mt-4 gap-1 absolute bottom-5" style="width: calc(100% - 2.5rem)">
              <button
                type="button"
                class="text-center bg-red-500 hover:bg-red-600 uppercase px-5 py-3 text-white rounded-lg"
                @click="$refs.confirmEnrollCourseModal.isShown = true"
              >
                Đăng ký ngay
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="p-10 bg-white flex flex-col gap-10">
        <div>
          <h3 class="font-semibold text-2xl text-gray-700 mb-2">Thông tin chi tiết</h3>
          <div v-html="course.content"></div>
        </div>

        <div>
          <h3 class="font-semibold text-2xl text-gray-700 mb-2">Lộ trình khóa học</h3>
          <div v-if="course.roadmap.length">
            <div class="border border-gray-300 divide-y divide-gray-300 rounded-lg overflow-hidden">
              <SectionItem
                v-for="(section, index) in course.roadmap"
                :key="index"
                :hasResource="false"
                :section="section"
                :sectionIndex="index"
                :courseId="course.id"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 class="font-semibold text-2xl text-gray-700 mb-2">Lịch học</h3>
          <div class="grid grid-cols-2 gap-5 mb-5">
            <div class="text-right">
              <p class="text-gray-500">Thời gian học từ</p>
              <p class="font-mono text-gray-800 text-xl">13/08/2021</p>
            </div>
            <div>
              <p class="text-gray-500">đến</p>
              <p class="font-mono text-gray-800 text-xl">25/09/2021</p>
            </div>
          </div>
          <div class="grid grid-cols-12 gap-2">
            <div class="col-span-3 p-5 rounded-lg bg-blue-200 font-semibold flex items-center">Thứ 2</div>
            <div class="col-span-9 p-5 rounded-lg bg-gray-50">
              <p class="flex items-center"><solid-clock-icon class="w-5 h-5 mr-2" /> 19g00 - 21g00</p>
            </div>

            <div class="col-span-3 p-5 rounded-lg bg-blue-200 font-semibold flex items-center">Thứ 3</div>
            <div class="col-span-9 p-5 rounded-lg bg-gray-50">
              <p class="flex items-center"><solid-clock-icon class="w-5 h-5 mr-2" /> 19g00 - 21g00</p>
            </div>

            <div class="col-span-3 p-5 rounded-lg bg-blue-200 font-semibold flex items-center">Thứ 5</div>
            <div class="col-span-9 p-5 rounded-lg bg-gray-50">
              <p class="flex items-center"><solid-clock-icon class="w-5 h-5 mr-2" /> 19g00 - 21g00</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const courseId = parseInt(params.slug)

    return { courseId }
  },

  computed: {
    course() {
      return this.$store.state.courses.find(course => course.id === this.courseId)
    },

    teacher() {
      return this.$store.state.teachers.find(teacher => teacher.id === this.course.teacherId)
    },

    category() {
      return this.$store.state.categories.find(category => category.id === this.course.categoryId)
    },

    bookmark() {
      return this.$store.state.user.bookmark
    }
  },

  methods: {
    toggleBookmark(courseId) {
      if (this.bookmark.indexOf(courseId) === -1)
        this.$store.commit('addBookmark', { courseId })
      else
        this.$store.commit('removeBookmark', { courseId })
    },

    enrollCourse(courseId) {
      this.$store.commit('enrollCourse', { courseId })
      // this.$store.commit('filledCourse', { courseId })
      this.$router.push('/courses/enrolled?role=' + this.$store.state.user.role)
    },

    unEnrollCourse(courseId) {
      this.$store.commit('unEnrollCourse', { courseId })
    }
  }
}
</script>

