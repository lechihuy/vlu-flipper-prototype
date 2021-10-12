<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-14 w-14">
          <NuxtLink :to="`/courses/${course.id}?role=${$store.state.user.role}`">
            <img class="h-14 w-14 rounded-lg object-cover" :src="course.thumbnail" />
          </NuxtLink>
        </div>
        <div class="ml-4">
          <div class="font-medium text-gray-900">
            <NuxtLink :to="`/courses/${course.id}?role=${$store.state.user.role}`">
              {{ course.name }}
            </NuxtLink>
          </div>
          <div class="text-sm text-gray-500">
            Gv. {{ teacher.name }}
          </div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <span
        v-if="course.enrolled === course.slots"
        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        Lớp sẵn sàng
      </span>
      <span
        v-else
        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
        Chưa đủ học viên ({{ course.enrolled }}/{{ course.slots }})
      </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-gray-700 font-semibold">
      {{ course.price }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right">
      <NuxtLink :to="`/payments/${course.id}?role=${$store.state.user.role}`" v-if="course.enrolled === course.slots"
         class="bg-blue-500 text-white px-3 py-2 hover:bg-blue-600 rounded-lg">Thanh toán</NuxtLink>
      <a class="bg-gray-100 text-gray-800 px-3 py-2 hover:bg-gray-200 rounded-lg cursor-pointer"
         @click="showConfirmUnEnrollCourseModal"
      >Hủy đăng ký</a>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true,
    }
  },

  computed: {
    teacher() {
      return this.$store.state.teachers.find(teacher => teacher.id === this.course.teacherId)
    }
  },

  methods: {
    showConfirmUnEnrollCourseModal() {
      this.$parent.$parent.$refs.confirmUnEnrollCourseModal.isShown = true
      this.$parent.$parent.unEnrollCourseCallback = this.unEnrollCourse
    },

    unEnrollCourse() {
      this.$store.commit('unEnrollCourse', { courseId: this.course.id })
    }
  },
}
</script>

