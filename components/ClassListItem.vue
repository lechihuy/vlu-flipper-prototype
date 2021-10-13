<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-14 w-14">
          <NuxtLink :to="`/classes/${klass.id}?role=${$store.state.user.role}`">
            <img class="h-14 w-14 rounded-lg object-cover" :src="course.thumbnail" />
          </NuxtLink>
        </div>
        <div class="ml-4">
          <div class="font-medium text-gray-900">
            <NuxtLink :to="`/classes/${klass.id}?role=${$store.state.user.role}`">
              {{ klass.name }}
            </NuxtLink>
          </div>
          <div class="text-sm text-gray-500">
            Gv. {{ teacher.name }}
          </div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-gray-700 font-semibold text-center">
      {{ klass.taughtLessons.length }}/{{ course.lessons }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-gray-700 font-semibold text-center">
      40
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-gray-700 font-semibold text-center">
      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 text-white"
            v-if="Object.keys(klass.liveLesson).length">Đang LIVE</span>
      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800"
            v-else>Chưa có tiết</span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right">
      <NuxtLink
        :to="`/classes/${klass.id}?role=${$store.state.user.role}`"
        class="bg-gray-100 text-gray-800 px-3 py-2 hover:bg-gray-200 rounded-lg">Vào lớp</NuxtLink>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    klass: {
      type: Object,
      required: true,
    }
  },

  computed: {
    teacher() {
      return this.$store.state.teachers.find(teacher => teacher.id === this.klass.teacherId)
    },

    course() {
      return this.$store.state.courses.find(course => course.id === this.klass.courseId)
    },

    user() {
      return this.$store.state.user
    }
  },
}
</script>

