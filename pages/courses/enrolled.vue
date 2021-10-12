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
    }
  },

  methods: {
    unEnrollCourse(courseId) {
      this.$store.commit('unEnrollCourse', { courseId })
    }
  }
}
</script>

