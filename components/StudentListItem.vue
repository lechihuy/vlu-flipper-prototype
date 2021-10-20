<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-14 w-14">
          <NuxtLink :to="`/students/${student.id}?role=${$store.state.user.role}`">
            <img class="h-14 w-14 rounded-full object-cover" :src="'https://ui-avatars.com/api/?name=' + student.name" />
          </NuxtLink>
        </div>
        <div class="ml-4">
          <div class="font-medium text-gray-900">
            <NuxtLink :to="`/students/${student.id}?role=${$store.state.user.role}`">
              {{ student.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-gray-700 font-semibold">
      {{ student.email }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-gray-700 font-semibold">
      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
            v-if="student.enrolled.length">Đã tham gia học ({{ student.enrolled.length }} khóa)</span>
      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800"
            v-else>Chưa tham gia học</span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right">
      <NuxtLink :to="`/students/${student.id}?role=${user.role}`" class="bg-gray-100 text-gray-800 px-3 py-2 hover:bg-gray-200 rounded-lg cursor-pointer"
      >Quản lý</NuxtLink>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    student: {
      type: Object,
      required: true,
    }
  },

  computed: {
    user() {
      return this.$store.state.user
    }
  },
}
</script>

