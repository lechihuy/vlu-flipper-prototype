<template>
  <div class="grid grid-cols-12 bg-white p-10 rounded-lg shadow gap-10">
    <Modal ref="confirmPayCourse" @submit="payCourse(course.id)" />

    <div class="col-span-8">
      <h3 class="text-xl font-semibold text-gray-700 mb-5">Thanh toán khóa học</h3>
      <div class="bg-gray-50 p-5 rounded-lg flex">
        <NuxtLink :to="`/courses/${course.id}?role=${$store.state.user.role}`">
          <img :src="course.thumbnail" class="w-52 rounded-lg flex-none">
        </NuxtLink>
        <div class="ml-5 flex-grow relative">
          <NuxtLink :to="`/courses/${course.id}?role=${$store.state.user.role}`">
            <h3 class="font-semibold text-xl mb-2">{{ course.name }}</h3>
          </NuxtLink>
          <div class="flex items-center">
            <span class="text-sm text-gray-500 flex items-center">
              <outline-user-icon class="w-5 h-5 mr-1" />
              {{ $store.state.teachers.find(teacher => teacher.id === course.teacherId).name }}
            </span>
            <span class="text-sm text-gray-500 flex items-center ml-auto">
              <solid-star-icon class="w-5 h-5 mr-1 text-yellow-500" /> {{ course.rating }}
            </span>
          </div>
          <div class="flex items-center mt-2">
            <span class="text-sm text-gray-500 flex items-center">
              <solid-clock-icon class="w-5 h-5 text-gray-700 mr-1" /> {{ course.lessons }} tiết
            </span>
          </div>
          <div class="mt-2 flex items-center absolute bottom-0 w-full">
            <span class="text-gray-700 font-semibold">{{ course.price }}</span>
          </div>
        </div>
      </div>

      <h3 class="mt-5 font-semibold text-gray-700 mb-2">Hình thức thanh toán</h3>
      <div class="grid grid-cols-2 gap-5">
        <label class="flex items-center border border-gray-300 rounded-lg p-5 cursor-pointer hover:bg-gray-100">
          <input type="radio" v-model="paymentType" name="paymentType" value="cod" class="form-radio mr-5 w-5 h-5" checked> Thanh toán trực tiếp
        </label>
        <label class="flex items-center border border-gray-300 rounded-lg p-5 cursor-pointer hover:bg-gray-100">
          <input type="radio" class="form-radio mr-5 w-5 h-5" v-model="paymentType" name="paymentType" value="card"> Thanh toán bằng thẻ ngân hàng
        </label>
      </div>
      <div class="bg-gray-100 rounded-lg mt-2 p-5" v-show="isShownCard">
        <h3 class="font-semibold text-md text-gray-700 mb-2">Thẻ của tôi</h3>
        <div class="relative inline-block cursor-pointer">
          <img src="/vietcombank.png" class="w-52 rounded-lg border border-green-500">
          <solid-check-circle-icon class="w-8 h-8 text-green-500 top-2 left-2 absolute shadow rounded-full" />
        </div>
      </div>
    </div>

    <div class="col-span-4">
      <h3 class="text-xl text-gray-700 font-semibold mb-5">Hóa đơn</h3>
      <div class="italic text-gray-500 text-sm mb-5">
        * Lưu ý: Giá tiền khóa học chưa bao gồm tỷ lệ hỗ trợ học phí của trường.
      </div>
      <div class="grid grid-cols-2">
        <div class="text-gray-700 mb-2 italic font-light">Giá tiền</div>
        <div class="text-right font-mono mb-2">{{ course.price }}</div>
        <div class="text-gray-700 mb-2 italic font-light">Số lượng</div>
        <div class="text-right font-mono mb-2">1</div>
        <div class="text-gray-700 mb-2 italic font-light">VAT (đã bao gồm trong giá tiền)</div>
        <div class="text-right font-mono mb-2">10%</div>
        <div class="text-gray-700 mb-2 italic font-light border-t border-gray-700 pt-2">Tổng</div>
        <div class="text-right font-mono mb-2 text-red-600 border-t border-gray-700 pt-2">{{ course.price }}</div>
      </div>

      <a @click="$refs.confirmPayCourse.isShown = true" class="cursor-pointer block py-3 text-center bg-red-500 text-white hover:bg-red-600 uppercase rounded-lg mt-5">
        Thanh toán
      </a>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({params}) {
    const courseId = parseInt(params.slug)

    return {courseId}
  },

  data() {
    return {
      paymentType: 'cod',
    }
  },

  computed: {
    isShownCard() {
      return this.paymentType === 'card'
    },

    course() {
      return this.$store.state.courses.find(course => course.id === this.courseId)
    },

    teacher() {
      return this.$store.state.teachers.find(teacher => teacher.id === this.course.teacherId)
    },

    category() {
      return this.$store.state.categories.find(category => category.id === this.course.categoryId)
    },
  },

  methods: {
    payCourse(courseId) {
      this.$router.push(`/schedules/${courseId}?role=${this.$store.state.user.role}&payment_type=${this.paymentType}`)
    }
  }
}
</script>
