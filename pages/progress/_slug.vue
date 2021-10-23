<template>
  <div class="bg-white shadow rounded-lg">


    <h3 class="text-2xl text-gray-800 flex items-center p-5">{{ course.name }}
      <div class="ml-auto flex items-center gap-2">
        <span v-if="course.id === 2" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Đang học</span>
        <span v-else-if="course.id === 1" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Đạt</span>
      </div>
    </h3>

    <div class="flex border-b border-gray-300 px-5">
      <div
        class="px-3 py-2 hover:text-blue-500 cursor-pointer"
        :class="{'border-b-2 border-blue-500 text-blue-500 font-semibold': selectedTab === 'member'}"
        @click="activeTab('member')"
      >Điểm danh</div>

      <div
        v-if="course.id === 1"
        class="px-3 py-2 hover:text-blue-500 cursor-pointer"
        :class="{'border-b-2 border-blue-500 text-blue-500 font-semibold': selectedTab === 'certificate'}"
        @click="activeTab('certificate')"
      >Chứng chỉ</div>
    </div>

    <form v-show="selectedTab === 'member'" class="p-5">
      <div class="grid grid-cols-12">
        <label class="cursor col-span-2 flex items-center justify-center">Buổi 1</label>
        <label class="cursor col-span-2 flex items-center justify-center">Buổi 2</label>
        <label class="cursor col-span-2 flex items-center justify-center">Buổi 3</label>
      </div>
      <div class="grid grid-cols-12 mt-2">
        <div class="col-span-2 flex justify-center items-center"><input type="checkbox" checked disabled class="form-checkbox lesson-1"></div>
        <div class="col-span-2 flex justify-center items-center"><input type="checkbox" checked disabled class="form-checkbox lesson-2"></div>
        <div class="col-span-2 flex justify-center items-center"><input type="checkbox" :checked="course.id === 1" disabled class="form-checkbox lesson-3"></div>
      </div>
    </form>

    <form class="grid grid-cols-1 gap-5 p-5" v-show="selectedTab === 'certificate'" v-if="course.id === 1">
      <div class="grid grid-cols-2 gap-5">
        <Certificate :name="$store.state.user.name" :course="course.name" />
      </div>
    </form>

  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const courseId = parseInt(params.slug)

    return { courseId }
  },

  data() {
    return {
      selectedTab: 'member',
    }
  },

  computed: {
    course() {
      return this.$store.state.courses.find(course => course.id === this.courseId)
    },
  },

  methods: {
    activeTab(tab) {
      this.selectedTab = tab
    },

    addSection() {
      this.$store.commit('addSection', { courseId: this.course.id })
    },

    showEnd(e) {
      const val = e.target.value
      if (val === 'Đang mở đăng ký') {
        this.$refs.endDate.classList.remove('hidden')
        this.$refs.startDate.classList.remove('hidden')
      } else {
        this.$refs.endDate.classList.add('hidden')
        this.$refs.startDate.classList.add('hidden')
      }
    },

    toggleCheckAll(e, index) {
      const val = e.target.checked
      Array.from(document.getElementsByClassName(`lesson-${index}`)).forEach(el => el.checked = val)
    }
  }
}
</script>
