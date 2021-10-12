<template>
  <div>
    <h3 class="text-2xl text-gray-800 mb-5">Quản lý khóa học</h3>

    <CourseList
      v-if="courses.length > 0"
      :courses="courses"
    />
  </div>
</template>

<script>
export default {
  computed: {
    courses() {
      return this.$store.state.courses.filter(course => course.teacherId === this.$store.state.user.id)
    }
  },
}
</script>

