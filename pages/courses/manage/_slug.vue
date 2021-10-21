<template>
  <div class="bg-white shadow rounded-lg">
    <Modal ref="confirmDelete" />
    <ModalCertificate ref="confirmCerf" />


    <h3 class="text-2xl text-gray-800 flex items-center p-5">{{ course.name }}
      <div class="ml-auto flex items-center gap-2">
        <CourseStatus :status="course.status" />
        <a @click="$refs.confirmDelete.isShown = true" class="cursor-pointer flex items-center hover:bg-red-600 hover:text-white text-base  bg-white px-3 py-2 rounded-lg text-red-500">
          <outline-trash-icon class="w-5 h-5 mr-1" /> Xóa
        </a>
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
        :class="{'border-b-2 border-blue-500 text-blue-500 font-semibold': selectedTab === 'roadmap'}"
        @click="activeTab('roadmap')"
      >Lộ trình khóa học</div>
      <div
        class="px-3 py-2 hover:text-blue-500 cursor-pointer"
        :class="{'border-b-2 border-blue-500 text-blue-500 font-semibold': selectedTab === 'schedule'}"
        @click="activeTab('schedule')"
      >Lịch học</div>
      <div
        class="px-3 py-2 hover:text-blue-500 cursor-pointer"
        :class="{'border-b-2 border-blue-500 text-blue-500 font-semibold': selectedTab === 'register'}"
        @click="activeTab('register')"
      >Trạng thái</div>
      <div
        class="px-3 py-2 hover:text-blue-500 cursor-pointer"
        :class="{'border-b-2 border-blue-500 text-blue-500 font-semibold': selectedTab === 'member'}"
        @click="activeTab('member')"
      >Học viên đã đăng ký</div>
    </div>

    <form class="grid grid-cols-12 gap-5 p-5" v-show="selectedTab === 'general'">
      <div class="col-span-8 flex flex-col gap-5">
        <div>
          <label class="font-semibold text-gray-700 mb-2 block">Tên khóa học <span class="text-red-500">*</span></label>
          <input type="text" :value="course.name" class="form-text px-3 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
        </div>
        <div>
          <label class="font-semibold text-gray-700 mb-2 block">Mô tả ngắn</label>
          <textarea rows="5" class="form-text px-3 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">{{ course.description }}</textarea>
        </div>
        <div>
          <label class="font-semibold text-gray-700 mb-2 block">Thông tin chi tiết <span class="text-red-500">*</span></label>
          <textarea rows="15" class="form-text px-3 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">{{ course.content }}</textarea>
        </div>
      </div>
      <div class="col-span-4 flex flex-col gap-5">
        <div>
          <h3 class="font-semibold mb-2 text-gray-700">Ảnh hiển thị</h3>
          <img :src="course.thumbnail" class="w-full rounded-lg mb-2 object-cover">
          <input type="file" class="form-text w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
        </div>
        <div>
          <label class="font-semibold text-gray-700 mb-2 block">Giá tiền <span class="text-red-500">*</span></label>
          <input type="number" :value="course.price" min="0" class="form-text px-3 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
          <small class="text-xs text-gray-500">Nhập "0" nếu khóa học là FREE.</small>
        </div>
        <div>
          <label class="font-semibold text-gray-700 mb-2 block">Chi phí triển khai <span class="text-red-500">*</span></label>
          <input type="number" :value="course.fee" min="0" class="form-text px-3 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
        </div>
        <div>
          <label class="font-semibold text-gray-700 mb-2 block">Giảng viên phụ trách <span class="text-red-500">*</span></label>
          <select class="form-text px-3 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
            <option value="">-- Chọn giảng viên --</option>
            <option v-for="teacher in $store.state.teachers" :value="teacher.id"
              :selected="teacher.id === course.teacherId"
            >{{ teacher.name }}</option>
          </select>
        </div>
        <div>
          <label class="font-semibold text-gray-700 mb-2 block">Địa điểm học <span class="text-red-500">*</span></label>
          <select class="form-text px-3 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
            <option value="online" :selected="course.type === 'online'">Online</option>
            <option value="offline" :selected="course.type === 'offline'">Offline</option>
          </select>
        </div>
      </div>
    </form>

    <form class="grid grid-cols-12 gap-5 p-5" v-show="selectedTab === 'roadmap'">
      <div class="col-span-12">
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
    </form>

    <form class="grid gap-5 p-5" v-show="selectedTab === 'schedule'">
      <div class="text-red-500 italic">
        * Nếu không có tiết học vào ngày đó thì để trống
      </div>
      <div>
        <div class="grid grid-cols-2 gap-5 mb-5">
          <div class="text-right">
            <p class="text-gray-500">Thời gian học từ</p>
            <input type="date" value="2021-08-13" class="form-text rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
          </div>
          <div>
            <p class="text-gray-500">đến</p>
            <input type="date" value="2021-09-25" class="form-text rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
          </div>
        </div>
        <div class="grid grid-cols-12 gap-2">
          <div class="col-span-3 p-5 rounded-lg bg-blue-200 font-semibold flex items-center">Thứ 2</div>
          <div class="col-span-9 p-5 rounded-lg bg-gray-50">
            <div class="flex items-center">
              <div>
                <span class="mr-2">Từ</span>
                <input type="time" value="19:30" class="form-text rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
              </div>
              <div class="ml-5">
                <span class="mr-2">đến</span>
                <input type="time" value="21:30" class="form-text rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
              </div>
            </div>
          </div>

          <div class="col-span-3 p-5 rounded-lg bg-blue-200 font-semibold flex items-center">Thứ 3</div>
          <div class="col-span-9 p-5 rounded-lg bg-gray-50">
            <div class="flex items-center">
              <div>
                <span class="mr-2">Từ</span>
                <input type="time" class="form-text rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
              </div>
              <div class="ml-5">
                <span class="mr-2">đến</span>
                <input type="time" class="form-text rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
              </div>
            </div>
          </div>

          <div class="col-span-3 p-5 rounded-lg bg-blue-200 font-semibold flex items-center">Thứ 4</div>
          <div class="col-span-9 p-5 rounded-lg bg-gray-50">
            <div class="flex items-center">
              <div>
                <span class="mr-2">Từ</span>
                <input type="time" value="19:30" class="form-text rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
              </div>
              <div class="ml-5">
                <span class="mr-2">đến</span>
                <input type="time" value="21:30" class="form-text rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
              </div>
            </div>
          </div>

          <div class="col-span-3 p-5 rounded-lg bg-blue-200 font-semibold flex items-center">Thứ 5</div>
          <div class="col-span-9 p-5 rounded-lg bg-gray-50">
            <div class="flex items-center">
              <div>
                <span class="mr-2">Từ</span>
                <input type="time" class="form-text rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
              </div>
              <div class="ml-5">
                <span class="mr-2">đến</span>
                <input type="time" class="form-text rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
              </div>
            </div>
          </div>

          <div class="col-span-3 p-5 rounded-lg bg-blue-200 font-semibold flex items-center">Thứ 6</div>
          <div class="col-span-9 p-5 rounded-lg bg-gray-50">
            <div class="flex items-center">
              <div>
                <span class="mr-2">Từ</span>
                <input type="time" value="19:30" class="form-text rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
              </div>
              <div class="ml-5">
                <span class="mr-2">đến</span>
                <input type="time" value="21:30" class="form-text rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
              </div>
            </div>
          </div>

          <div class="col-span-3 p-5 rounded-lg bg-blue-200 font-semibold flex items-center">Thứ 7</div>
          <div class="col-span-9 p-5 rounded-lg bg-gray-50">
            <div class="flex items-center">
              <div>
                <span class="mr-2">Từ</span>
                <input type="time" class="form-text rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
              </div>
              <div class="ml-5">
                <span class="mr-2">đến</span>
                <input type="time" class="form-text rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
              </div>
            </div>
          </div>

          <div class="col-span-3 p-5 rounded-lg bg-blue-200 font-semibold flex items-center">Chủ Nhật</div>
          <div class="col-span-9 p-5 rounded-lg bg-gray-50">
            <div class="flex items-center">
              <div>
                <span class="mr-2">Từ</span>
                <input type="time" class="form-text rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
              </div>
              <div class="ml-5">
                <span class="mr-2">đến</span>
                <input type="time" class="form-text rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

    <form class="grid gap-5 p-5" v-show="selectedTab === 'register'">
      <div>
        <label class="font-semibold text-gray-700 mb-2 block">Trạng thái <span class="text-red-500">*</span></label>
        <select @change="showEnd" class="form-text px-3 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
          <option :selected="course.status === 'Đang mở đăng ký'" value="Đang mở đăng ký">Đang mở đăng ký</option>
          <option :selected="course.status === 'Đóng đăng ký'" value="Đóng đăng ký">Đóng đăng ký</option>
          <option :selected="course.status === 'Hủy lớp'" value="Hủy lớp">Hủy lớp</option>
        </select>
      </div>
      <div ref="startDate">
        <h3 class="font-semibold mb-2 text-gray-700">Ngày bắt đầu đăng ký <span class="text-red-500">*</span></h3>
        <input type="date" value="2021-10-10" class="form-text w-full rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
      </div>
      <div ref="endDate" class="hidden">
        <h3 class="font-semibold mb-2 text-gray-700">Ngày kết thúc đăng ký <span class="text-red-500">*</span></h3>
        <input type="date" value="2021-10-14" class="form-text w-full rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
      </div>
    </form>

    <form v-show="selectedTab === 'member'" class="p-5">
      <div class="p-5 rounded-lg bg-gray-50 mb-5 flex items-center">
        <div class="flex-none">
          <label class="block font-semibold text-gray-700 mb-2">Thêm học viên vào khóa học</label>
          <input type="text" placeholder="Nhập email học viên..." min="0" class="w-56 form-text px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
          <button type="button" class="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600">Thêm</button>
        </div>
        <div class="ml-auto">
          <label class="block font-semibold text-gray-700 mb-2">Công cụ</label>
          <button type="button" @click="$refs.confirmCerf.isShown = true" class="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600">Tạo chứng chỉ</button>
          <button type="button" class="bg-white text-green-500 border border-gray-300 px-3 py-2 rounded-lg hover:bg-green-600 hover:text-white">Xuất Excel</button>
        </div>
      </div>

      <div class="grid grid-cols-12">
        <div class="col-span-3"></div>
        <label class="cursor col-span-2 flex items-center justify-center"><input @change="toggleCheckAll($event, 1)" type="checkbox" class="form-checkbox mr-2"> Buổi 1</label>
        <label class="cursor col-span-2 flex items-center justify-center"><input @change="toggleCheckAll($event,2)" type="checkbox" class="form-checkbox mr-2"> Buổi 2</label>
        <label class="cursor col-span-2 flex items-center justify-center"><input @change="toggleCheckAll($event, 3)" type="checkbox" class="form-checkbox mr-2"> Buổi 3</label>
        <div class="col-span-2 flex justify-center items-center">Trạng thái</div>
      </div>
      <div v-for="student in $store.state.students" :key="student.id" class="grid grid-cols-12">
        <div class="flex items-center mb-2 col-span-3">
          <img :src="'https://ui-avatars.com/api/?name=' + student.name" class="w-10 h-10 rounded-full mr-5">
          <div>
            {{ student.name }}
            <div class="text-xs text-gray-500 italic">
              đăng ký vào 13/08/2001
            </div>
          </div>
        </div>
        <div class="col-span-2 flex justify-center items-center"><input type="checkbox" :checked="[1, 2, 3, 4].includes(student.id)" class="form-checkbox lesson-1"></div>
        <div class="col-span-2 flex justify-center items-center"><input type="checkbox" :checked="[1, 2, 3].includes(student.id)"class="form-checkbox lesson-2"></div>
        <div class="col-span-2 flex justify-center items-center"><input type="checkbox" :checked="[1, 2].includes(student.id)"class="form-checkbox lesson-3"></div>
        <div class="col-span-2 flex justify-center items-center">
          <span v-if="[4].includes(student.id)" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Vắng quá quy định</span>
          <span v-else-if="[3, 4].includes(student.id)" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Đang học</span>
          <span v-else-if="[1, 2].includes(student.id)" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Đạt</span>
          <span v-else-if="[5].includes(student.id)" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">Nghỉ học</span>
        </div>
      </div>
    </form>

    <div class="p-5 bg-gray-50 rounded-b-lg">
      <div class="flex items-center">
        <NuxtLink :to="'/courses?role=' + $store.state.user.role" class="bg-white border border-gray-300 inline-block text-gray-800 rounded-lg px-3 py-2 hover:bg-gray-200">Trở về</NuxtLink>
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
    const courseId = parseInt(params.slug)

    return { courseId }
  },

  data() {
    return {
      selectedTab: 'general',
    }
  },

  mounted() {
    if (this.course.status === 'Đang mở đăng ký') {
      this.$refs.endDate.classList.remove('hidden')
      this.$refs.startDate.classList.remove('hidden')
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
