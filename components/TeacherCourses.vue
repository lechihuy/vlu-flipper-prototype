<template>
  <div>
    <h3 class="text-2xl text-gray-800 mb-5">Quản lý khóa học</h3>

    <CourseList
      v-if="courses.length > 0"
      :courses="courses"
    />

    <div v-else class="text-center py-20">
      <div>
        <img src="/empty-enroll.jpg" class="w-52 h-52 rounded-full inline-block mx-auto">
        <p class="text-gray-600 mt-10 text-xl">Không tìm thấy khóa học nào.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    courses() {
      let courses = this.$store.state.courses.filter(course => course.teacherId === this.$store.state.user.id)

      courses = courses.filter(course => {
        return !(this.$store.state.q &&
          !this.textToSlug(course.name.toLowerCase(), ' ')
            .includes(this.textToSlug(this.$store.state.q.toLowerCase(), ' ')));
      })

      return courses
    }
  },

  methods: {
    textToSlug(text, separator = '-') {
      text = text.trim() ?? ''
      text = text
        .toLowerCase()
        .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
        .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
        .replace(/ì|í|ị|ỉ|ĩ/g, "i")
        .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
        .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
        .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
        .replace(/đ/g, "d")
        .replace(/\s+/g, "-")
        .replace(/[^A-Za-z0-9_-]/g, "")
        .replace(/-+/g, "-")
        .replace(/-+$/, '')

      if (separator) {
        return text.replace(/-/g, separator)
      }

      return text
    },
  }
}
</script>

