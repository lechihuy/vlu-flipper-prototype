<template>
  <div>
    <h3 class="text-2xl text-gray-800 mb-5">Lớp học</h3>

    <ClassList
      v-if="classes.length > 0"
      :classes="classes"
    />

    <div v-else class="text-center py-20">
      <div>
        <img src="/empty-enroll.jpg" class="w-52 h-52 rounded-full inline-block mx-auto">
        <p class="text-gray-600 mt-10 text-xl">Không tìm thấy lớp học nào.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    classes() {
      return this.$store.state.classes
    }
  },
}
</script>

