<template>
  <div class="bg-white shadow rounded-lg">
    <Modal ref="confirmDelete" />

    <h3 class="text-2xl text-gray-800 flex items-center p-5">Học viên {{ student.name }}
      <div class="ml-auto flex items-center gap-2">
        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
              v-if="student.enrolled.length">Đã tham gia học</span>
        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800"
              v-else>Chưa tham gia học</span>
        <NuxtLink v-if="student.enrolled.length" :to="`/students/certificate/${student.id}?role=${$store.state.user.role}`" class="cursor-pointer flex items-center hover:bg-blue-600 text-base  bg-blue-500 px-3 py-2 rounded-lg text-white">
          <outline-document-text-icon class="w-5 h-5 mr-1" /> Tạo chứng chỉ
        </NuxtLink>
      </div>
    </h3>

    <div class="flex border-b border-gray-300 px-5">
      <div
        class="px-3 py-2 hover:text-blue-500 cursor-pointer"
        :class="{'border-b-2 border-blue-500 text-blue-500 font-semibold': selectedTab === 'general'}"
        @click="activeTab('general')"
      >Chung</div>
      <div
        class="px-3 py-2 hover:text-blue-500 cursor-pointer"
        :class="{'border-b-2 border-blue-500 text-blue-500 font-semibold': selectedTab === 'course'}"
        @click="activeTab('course')"
      >Khóa học đã đăng ký</div>
      <div
        class="px-3 py-2 hover:text-blue-500 cursor-pointer"
        :class="{'border-b-2 border-blue-500 text-blue-500 font-semibold': selectedTab === 'certificate'}"
        @click="activeTab('certificate')"
      >Chứng chỉ</div>
    </div>

    <form class="grid grid-cols-12 gap-5 p-5" v-show="selectedTab === 'general'">
      <div class="col-span-8 flex flex-col gap-5">
        <div>
          <label class="font-semibold text-gray-700 mb-2 block">Họ tên <span class="text-red-500">*</span></label>
          <input type="text" :value="student.name" class="form-text px-3 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
        </div>
        <div>
          <label class="font-semibold text-gray-700 mb-2 block">Email <span class="text-red-500">*</span></label>
          <input type="text" :value="student.email" class="form-text px-3 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
        </div>
      </div>
      <div class="col-span-4 flex flex-col gap-5">
        <div>
          <h3 class="font-semibold mb-2 text-gray-700">Ảnh đại diện</h3>
          <img :src="'https://ui-avatars.com/api/?name=' + student.name" class="w-20 rounded-full mb-2 object-cover">
          <input type="file" class="form-text w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
        </div>
      </div>
    </form>

    <form class="grid grid-cols-12 gap-5 p-5" v-show="selectedTab === 'course'">
      <div class="col-span-12 flex flex-col gap-2" v-if="student.enrolled.length">
        <div v-for="course in student.enrolled" :key="course">
          <div class="flex items-center">
            <div class="flex-shrink-0 h-14 w-14">
              <NuxtLink :to="`/courses/${$store.state.courses.find(c => c.id === course).name}?role=${$store.state.user.role}`">
                <img class="h-14 w-14 rounded-lg object-cover" :src="$store.state.courses.find(c => c.id === course).thumbnail" />
              </NuxtLink>
            </div>
            <div class="ml-4">
              <div class="font-medium text-gray-900">
                <NuxtLink :to="`/courses/${course}?role=${$store.state.user.role}`">
                  {{ $store.state.courses.find(c => c.id === course).name }}
                </NuxtLink>
              </div>
              <div class="text-sm text-gray-500">
                Gv. {{ $store.state.teachers.find(t => t.id === $store.state.courses.find(c => c.id === course).teacherId).name }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12" v-else>
        Chưa tham gia khóa học nào
      </div>
    </form>

    <form class="grid grid-cols-1 gap-5 p-5" v-show="selectedTab === 'certificate'">
      <div v-if="student.passes.length" class="grid grid-cols-2 gap-5">
        <Certificate v-for="course in student.passes" :name="student.name" :course="$store.state.courses.find(c => c.id === course).name" />
      </div>
      <div class="col-span-12" v-else>
        Chưa có chứng chỉ nào
      </div>
    </form>

    <div class="p-5 bg-gray-50 rounded-b-lg">
      <div class="flex items-center">
        <NuxtLink :to="'/students?role=' + $store.state.user.role" class="bg-white border border-gray-300 inline-block text-gray-800 rounded-lg px-3 py-2 hover:bg-gray-200">Trở về</NuxtLink>
        <div class="ml-auto">
          <button type="button" class="bg-blue-500 text-white rounded-lg px-3 py-2 hover:bg-blue-600">Lưu thay đổi</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const studentId = parseInt(params.slug)

    return { studentId }
  },

  data() {
    return {
      selectedTab: 'general',
    }
  },

  computed: {
    student() {
      return this.$store.state.students.find(student => student.id === this.studentId)
    },
  },

  methods: {
    activeTab(tab) {
      this.selectedTab = tab
    },
  }
}
</script>
