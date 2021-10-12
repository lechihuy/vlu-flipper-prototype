<template>
  <div class="flex flex-col gap-5">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-8 bg-white rounded-lg shadow-sm">
        <div class="p-5">
          <div class="flex items-center mb-5">
            <h3 class="text-gray-800 font-semibold">Kết quả tìm kiếm cho từ khóa "{{ q }}"</h3>
          </div>

          <div class="grid grid-cols-2 gap-5" v-if="courses.length">
            <RecommendCourseItem
              v-for="course in courses"
              :key="course.id"
              :course="course"
            />
          </div>
          <div v-else class="flex flex-col py-20">
            <img src="/search-empty.jpg" class="w-52 inline-block mx-auto" alt="">
            <p class="text-gray-600 text-center">Không tìm thấy kết quả nào.</p>
          </div>
        </div>
      </div>

      <div class="col-span-4 bg-white rounded-lg shadow-sm p-5 flex flex-col gap-5">
        <div>
          <h3 class="font-semibold mb-2 text-gray-700">Danh mục</h3>
          <select class="form-select px-3 py-2 w-full rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50" v-model="categoryId">
            <option value="">Tất cả</option>
            <option v-for="category in categories" :key="category.id" :value="category.id"
            >{{ category.name }}</option>
          </select>
        </div>

        <div>
          <h3 class="font-semibold mb-2 text-gray-700">Ngày kết thúc đăng ký</h3>
          <input type="date" class="form-text w-full rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50" v-model="closedAt">
        </div>

        <div>
          <h3 class="font-semibold mb-2 text-gray-700">Giá tiền</h3>
          <div>
            <label class="flex items-center mb-1 text-gray-700 cursor-pointer">
              <input type="radio" class="form-radio mr-2" name="price" v-model="price" value=""> Không giới hạn
            </label>
            <label class="flex items-center mb-1 text-gray-700 cursor-pointer">
              <input type="radio" class="form-radio mr-2" name="price" v-model="price" value="0-500000"> Dưới 500,000đ
            </label>
            <label class="flex items-center mb-1 text-gray-700 cursor-pointer">
              <input type="radio" class="form-radio mr-2" name="price" v-model="price" value="500000-1000000"> Từ 500,000đ - 1,000,000đ
            </label>
            <label class="flex items-center mb-1 text-gray-700 cursor-pointer">
              <input type="radio" class="form-radio mr-2" name="price" v-model="price" value="1000000-2000000"> Từ 1000,000đ - 2,000,000đ
            </label>
            <label class="flex items-center mb-1 text-gray-700 cursor-pointer">
              <input type="radio" class="form-radio mr-2" name="price" v-model="price" value="2000000-5000000"> Từ 2000,000đ - 5,000,000đ
            </label>
            <label class="flex items-center mb-1 text-gray-700 cursor-pointer">
              <input type="radio" class="form-radio mr-2" name="price" v-model="price" value="5000000-"> 5,000,000 trở trên
            </label>
          </div>
        </div>

        <button type="button" class="border border-gray-300 text-gray-500 block rounded-lg px-3 py-2 hover:text-gray-700 hover:border-gray-700" @click="resetFilter">
          Làm mới bộ lọc
        </button>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      categoryId:'',
      price: '',
      closedAt: null
    }
  },

  beforeCreate() {
    this.$store.commit('loadQuery', { q: this.$route.query.q })
  },

  computed: {
    q() {
      return this.$store.state.q
    },

    categories() {
      return this.$store.state.categories
    },

    courses() {
      return this.$store.state.courses.filter(course => {
        if (this.q &&
          ! this.textToSlug(course.name.toLowerCase(), ' ')
            .includes(this.textToSlug(this.q.toLowerCase(), ' '))) {
          return false
        }

        if (this.categoryId && course.categoryId.toString() !== this.categoryId) {
          return false
        }

        if (this.closedAt) {
          const courseClosedAt = course.closedAt.split('-').reverse().join('-')

          if (courseClosedAt !== this.closedAt)
            return false
        }

        if (this.price) {
          const [start, end] = this.price.split('-')

          if (start === '0' && parseInt(end) <= course.numberPrice)
            return false

          if (end === '' && parseInt(start) >= course.numberPrice)
            return false

          if (parseInt(start) > course.numberPrice || parseInt(end) < course.numberPrice)
            return false
        }

        return true
      })
    },
  },

  methods: {
    textToSlug(text, separator = '-') {
      text = text.trim() ?? ''
      text = text
        .toLowerCase()
        .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
        .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
        .replace(/ì|í|ị|ỉ|ĩ/g, "i")
        .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
        .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
        .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
        .replace(/đ/g, "d")
        .replace(/\s+/g, "-")
        .replace(/[^A-Za-z0-9_-]/g, "")
        .replace(/-+/g, "-")
        .replace(/-+$/, '')

      if (separator) {
        return text.replace(/-/g, separator)
      }

      return text
    },

    resetFilter() {
      this.categoryId = ''
      this.price = ''
      this.closedAt = null
    }
  }
}
</script>
