<template>
  <div class="fixed right-5 bottom-5" v-show="isShown">
    <div @click.self="maximumMeet" class="relative cursor-pointer bg-black rounded-lg w-52 h-32 overflow-hidden shadow-lg">
      <img @click.self="maximumMeet" v-if="$store.state.user.role === 'student' || ! isTurnOffCamera" src="/webcam-teacher.jpg" alt=""
           class="w-full h-full object-cover ">

      <div class="absolute bottom-1 left-1 flex items-center gap-1">
        <button
          type="button"
          @click="$store.commit('turnOffCamera', ! isTurnOffCamera)"
          class="w-10 h-10 bg-gray-900 text-white flex items-center justify-center rounded-lg"
        >
          <component
            :is="isTurnOffCamera ? 'outline-video-camera-icon' : 'solid-video-camera-icon'"
            :class="[isTurnOffCamera ? 'text-red-500' : 'text-green-500']"
            class="w-5 h-5" />
        </button>
        <button type="button" @click="$store.commit('changeMicrophone', microphone === '0' ? '50' : '0')" class=" w-10 h-10 bg-gray-900 text-white flex items-center rounded-lg justify-center ">
          <component
            :is="microphone === '0' ? 'outline-microphone-icon' : 'solid-microphone-icon'"
            class="w-5 h-5"
            :class="[microphone === '0' ? 'text-red-500' : 'text-green-500']"
          />
        </button>
        <button type="button" @click="$store.commit('changeVolume', volume === '0' ? '50' : '0')" class="w-10 h-10 bg-gray-900 text-white flex items-center rounded-lg justify-center ">
          <component
            :is="volume === '0' ? 'solid-volume-off-icon' : 'solid-volume-up-icon'"
            class="w-5 h-5"
            :class="[volume === '0' ? 'text-red-500' : 'text-green-500']"
          />
        </button>
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
    },

    shareScreen() {
      return this.$store.state.shareScreen
    },

    comments() {
      return this.klass?.liveLesson.comments ?? []
    }
  },

  methods: {
    maximumMeet() {
      this.isShown = false
      this.$parent.$refs.stream.isShown = true
    }
  }
}
</script>

