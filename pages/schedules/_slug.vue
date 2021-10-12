<template>
  <div class="grid grid-cols-12 bg-white p-10 rounded-lg shadow gap-10">
    <Modal ref="confirmPayCourse" @submit="payCourse(course.id)" />

    <div class="col-span-4" id="bill">
      <h3 class="text-xl font-semibold text-gray-700 mb-5">Hóa đơn [#ORD-{{ generateCode() }}]</h3>
      <div class="italic text-gray-500 text-sm mb-5">
        * Lưu ý: Giá tiền khóa học chưa bao gồm tỷ lệ hỗ trợ học phí của trường.
      </div>
      <div class="grid grid-cols-2">
        <div class="mb-5 col-span-2">
          <div class="font-mono mb-1">{{ course.name }}</div>
          <div class="text-sm text-gray-800">Học viên: {{ $store.state.user.name }}</div>
          <div class="text-sm text-gray-800">Email: {{ $store.state.user.email }}</div>
          <div class="text-sm text-gray-800">Thanh toán {{ $route.query.payment_type === 'cod' ? 'trực tiếp' : 'online' }}</div>
        </div>
        <div class="text-gray-700 mb-2 italic font-light">Giá tiền</div>
        <div class="text-right font-mono mb-2">{{ course.price }}</div>
        <div class="text-gray-700 mb-2 italic font-light">Số lượng</div>
        <div class="text-right font-mono mb-2">1</div>
        <div class="text-gray-700 mb-2 italic font-light">VAT (đã bao gồm trong giá tiền)</div>
        <div class="text-right font-mono mb-2">10%</div>
        <div class="text-gray-700 mb-2 italic font-light border-t border-gray-700 pt-2">Tổng</div>
        <div class="text-right font-mono mb-2 text-red-600 border-t border-gray-700 pt-2">{{ course.price }}</div>
      </div>

      <a class="cursor-pointer block py-3 text-center bg-red-500 text-white hover:bg-red-600 uppercase rounded-lg mt-5">
        Xuất hóa đơn
      </a>
    </div>

    <div class="col-span-8">
      <h3 class="text-xl text-gray-700 font-semibold mb-5">Lịch học</h3>
      <div class="grid grid-cols-2 gap-5 mb-5">
        <div class="text-right">
          <p class="text-gray-500">Thời gian học từ</p>
          <p class="font-mono text-gray-800 text-xl">13/08/2021</p>
        </div>
        <div>
          <p class="text-gray-500">đến</p>
          <p class="font-mono text-gray-800 text-xl">25/09/2021</p>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-2">
        <div class="col-span-3 p-5 rounded-lg bg-blue-200 font-semibold flex items-center">Thứ 2</div>
        <div class="col-span-9 p-5 rounded-lg bg-gray-50">
          <p class="font-mono">Lớp CLS-{{ generateCode() }}_{{ course.name }}</p>
          <p class="flex items-center"><solid-clock-icon class="w-5 h-5 mr-2" /> 19g00 - 21g00</p>
        </div>

        <div class="col-span-3 p-5 rounded-lg bg-blue-200 font-semibold flex items-center">Thứ 3</div>
        <div class="col-span-9 p-5 rounded-lg bg-gray-50">
          <p class="font-mono">Lớp CLS-{{ generateCode() }}_{{ course.name }}</p>
          <p class="flex items-center"><solid-clock-icon class="w-5 h-5 mr-2" /> 19g00 - 21g00</p>
        </div>

        <div class="col-span-3 p-5 rounded-lg bg-blue-200 font-semibold flex items-center">Thứ 5</div>
        <div class="col-span-9 p-5 rounded-lg bg-gray-50">
          <p class="font-mono">Lớp CLS-{{ generateCode() }}_{{ course.name }}</p>
          <p class="flex items-center"><solid-clock-icon class="w-5 h-5 mr-2" /> 19g00 - 21g00</p>
        </div>
      </div>
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
      alert(1)
    },

    generateCode() {
      let result           = '';
      let characters       = '0123456789';
      let charactersLength = characters.length;
      for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() *
          charactersLength));
      }

      return 'FLPVLU-' + result;
    },
  }
}
</script>
