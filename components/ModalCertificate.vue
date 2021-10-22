<template>
  <div class="fixed w-full h-full top-0 left-0 z-40" v-show="isShown">
    <div class="bg-black w-full h-full opacity-70"></div>
    <div class="flex w-full h-full absolute z-50 top-0 left-0  justify-center items-center" @click.self="close">
      <div class="bg-white rounded-lg w-1/2 p-5">
        <div class="pb-5">
          <h3 class="mb-5 font-semibold text-gray-600">Danh sách học viên có thể nhận chứng chỉ</h3>
          <div v-for="student in $store.state.students.filter(std => [1, 2].includes(std.id))" :key="student.id">
            <div class="flex items-center mb-2 col-span-3">
              <img :src="'https://ui-avatars.com/api/?name=' + student.name" class="w-10 h-10 rounded-full mr-5">
              <div>
                {{ student.name }}
                <div class="text-xs text-gray-500 italic">
                  đăng ký vào 13/08/2001
                </div>
              </div>
              <input type="checkbox" class="form-checkbox ml-auto" checked>
            </div>
          </div>
          <div class="mt-5">
            <label class="text-gray-700 font-semibold block mb-2">Chữ ký giảng viên đào tạo</label>
            <input type="file">
          </div>
        </div>
        <div class="flex items-center justify-center gap-5">
          <button type="button" class="flex justify-center items-center w-12 h-12 rounded-full border border-gray-300 bg-white text-gray-300 hover:bg-gray-300 hover:text-white" @click="close">
            <outline-x-icon class="w-8 h-8" />
          </button>
          <button type="button" class="flex justify-center items-center w-12 h-12 rounded-full border border-green-500 bg-white text-green-500 hover:bg-green-500 hover:text-white" @click="submit">
            <outline-check-icon class="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShown: false,
    }
  },

  methods: {
    close() {
      this.isShown = ! this.isShown
    },

    submit() {
      this.$emit('submit')
      this.close()
    }
  }
}
</script>
