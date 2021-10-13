<template>
  <div class="fixed w-full h-full top-0 left-0 z-40" v-show="isShown">
    <div class="bg-black w-full h-full opacity-70"></div>
    <div class="flex w-full h-full absolute z-50 top-0 left-0  justify-center items-center" @click.self="close">
      <div class="bg-gray-800 rounded-lg w-96 flex flex-col overflow-hidden shadow-lg">
        <div class="p-5">
          <img v-if="! isTurnOffCamera" :src="$store.state.user.role === 'teacher' ? '/webcam-teacher.jpg' : '/webcam-student.jpg'"
            class="rounded-lg object-cover border-2 border-black h-44 w-full"
          >
          <div v-else class="bg-black w-full h-44 rounded-lg border-2 border-black"></div>

          <button
            type="button"
            @click="$store.commit('turnOffCamera', ! isTurnOffCamera)"
            class="px-3 py-2 bg-gray-900 text-white flex items-center rounded-lg inline-block mx-auto mt-4"
          >
            <component
              :is="isTurnOffCamera ? 'solid-video-camera-icon' : 'outline-video-camera-icon'"
              class="w-5 h-5 mr-1" /> {{ isTurnOffCamera ? 'Mở camera' : 'Tắt camera' }}
          </button>
        </div>
        <div class="p-5">
          <div class="flex items-center gap-5">
            <button type="button" @click="$store.commit('changeMicrophone', microphone === '0' ? '50' : '0')" class="flex-none w-10 h-10 bg-gray-900 text-white flex items-center rounded-lg justify-center ">
              <component
                :is="microphone === '0' ? 'outline-microphone-icon' : 'solid-microphone-icon'"
                class="w-5 h-5"
                :class="[microphone === '0' ? 'text-red-500' : 'text-green-500']"
              />
            </button>
            <input type="range" class="w-full" min="0" max="100" step="1"
                   @change="$store.commit('changeMicrophone', $event.target.value)">
          </div>

          <div class="flex items-center gap-5 mt-5">
            <button type="button" @click="$store.commit('changeVolume', volume === '0' ? '50' : '0')" class="flex-none w-10 h-10 bg-gray-900 text-white flex items-center rounded-lg justify-center ">
              <component
                :is="volume === '0' ? 'solid-volume-off-icon' : 'solid-volume-up-icon'"
                class="w-5 h-5"
                :class="[volume === '0' ? 'text-red-500' : 'text-green-500']"
              />
            </button>
            <input type="range" class="w-full" min="0" max="100" step="1"
                   @change="$store.commit('changeVolume', $event.target.value)">
          </div>
        </div>

        <div class="bg-gray-900 p-5 flex justify-end gap-2">
          <button @click="close" type="button" class="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 flex items-center rounded-lg justify-center ">
            <outline-x-icon class="w-5 h-5 mr-1" /> Hủy
          </button>
          <button type="button" @click="submitJoinMeeting" class="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white flex items-center rounded-lg justify-center ">
            <outline-login-icon class="w-5 h-5 mr-1" /> Tiếp tục
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

  computed: {
    isTurnOffCamera() {
      return this.$store.state.isTurnOffCamera
    },

    microphone() {
      return this.$store.state.microphone
    },

    volume() {
      return this.$store.state.volume
    }
  },

  methods: {
    close() {
      this.isShown = ! this.isShown
    },

    submitJoinMeeting() {
      this.close()
      this.$parent.$refs.stream.isShown = true
    },
  }
}
</script>
