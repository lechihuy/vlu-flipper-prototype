<template>
  <div class="fixed w-full h-full top-0 left-0 z-40" v-show="isShown">
    <div class="bg-black w-full h-full opacity-70"></div>
    <div class="flex w-full h-full absolute z-50 top-0 left-0  justify-center items-center" @click.self="close">
      <div class="bg-white rounded-lg w-96 p-5">
        <div class="text-center py-10">
          <img src="/confirm.jpg" class="w-24 h-24 inline-block mx-auto">
          <p class="text-center text-xl text-gray-700">Bạn có chắc với tác vụ này?</p>
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
