<template>
  <div>
    <Modal ref="confirmUnEnrollCourseModal" @submit="unEnrollCourseCallback" />

    <h3 class="text-2xl text-gray-800 mb-5">Tình trạng khóa học</h3>

    <CourseList
      v-if="enrolledCourses.length > 0"
      :courses="enrolledCourses"
    />

    <div v-else class="text-center py-20">
      <div>
        <img src="/empty-enroll.jpg" class="w-52 h-52 rounded-full inline-block mx-auto">
        <p class="text-gray-600 mt-10 text-xl">Hãy đăng ký khóa học đầu tiên.</p>
        <NuxtLink :to="'/courses?role=' + user.role" class="inline-flex items-center bg-white hover:bg-gray-50 px-3 py-2 rounded-lg border border-gray-300 mt-4">
          <outline-reply-icon class="w-5 h-5 mr-1" /> Trở về danh sách khóa học
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      unEnrollCourseCallback: () => {},
    }
  },

  computed: {
    enrolledCourses() {
      return this.$store.state.courses.filter(course => this.$store.state.user.enrolled.includes(course.id))
    },

    user() {
      return this.$store.state.user
    }
  },

  methods: {
    unEnrollCourse(courseId) {
      this.$store.commit('unEnrollCourse', { courseId })
    }
  }
}
</script>

