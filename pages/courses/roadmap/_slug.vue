<template>
  <div>
    <h3 class="text-2xl text-gray-800 mb-5">Lộ trình khóa học "{{ course.name }}"</h3>

    <div class="bg-yellow-100 p-5 text-yellow-800 rounded-lg shadow mb-5">
      <h3 class="flex items-center text-xl mb-2"><solid-exclamation-icon class="w-6 h-6 mr-1" /> Trước khi trải nghiệm</h3>
      Để sửa tên mục, tiết học, hãy nhấn vào nhãn của nó. Các chức năng thêm, sửa, xóa sẽ tự động lưu
    </div>

    <div v-if="course.roadmap.length">
      <div class="border border-gray-300 divide-y divide-gray-300">
        <SectionItem
          v-for="(section, index) in course.roadmap"
          :key="index"
          :hasResource="true"
          :section="section"
          :sectionIndex="index"
          :ref="`section-${index}`"
          :courseId="course.id"
        />
      </div>
    </div>
    <button @click="addSection" type="button" class="flex items-center bg-gray-50 text-gray-800 hover:bg-gray-200 px-3 py-2 mt-2 border border-gray-300 rounded-lg">
      <outline-plus-icon class="w-5 h-5 mr-1" /> Thêm mục
    </button>
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
  },

  methods: {
    addSection() {
      this.$store.commit('addSection', { courseId: this.course.id })
    }
  }
}
</script>
