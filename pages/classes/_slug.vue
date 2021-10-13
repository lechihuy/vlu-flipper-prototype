<template>
  <Class
    :klass="klass"
    :teacher="teacher"
    :course="course"
  />
</template>

<script>
export default {
  async asyncData({ params }) {
    const classId = parseInt(params.slug)

    return { classId }
  },

  computed: {
    klass() {
      return this.$store.state.classes.find(klass => klass.id === this.classId)
    },

    teacher() {
      return this.$store.state.teachers.find(teacher => teacher.id === this.klass.teacherId)
    },

    course() {
      return this.$store.state.courses.find(course => course.id === this.klass.courseId)
    },
  },
}
</script>

