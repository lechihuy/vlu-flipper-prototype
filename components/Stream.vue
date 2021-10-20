<template>
  <div class="fixed w-full h-full top-0 left-0 z-40" v-if="isShown">
    <div class="bg-black w-full h-full opacity-70"></div>
    <div class="flex w-full h-full absolute z-50 top-0 left-0  justify-center items-center" @click.self="close">
      <div class="bg-gray-800 rounded-lg w-full h-full flex flex-col overflow-hidden shadow-lg">
        <div class="p-5 flex items-center">
          <div>
            <p class="text-gray-100 text-xs">{{ klass.name }}</p>
            <h1 class="text-2xl text-white">{{ lesson.name }}</h1>
          </div>
          <div class="ml-auto flex gap-2">
            <button
              type="button"
              @click="$store.commit('shareScreen', ! shareScreen)"
              class="w-10 h-10 bg-gray-900 text-white flex items-center justify-center rounded-lg"
            >
              <outline-desktop-computer-icon
                :class="[! shareScreen ? 'text-red-500' : 'text-green-500']"
                class="w-5 h-5" />
            </button>
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
            <button @click="quitMeet" type="button" class="w-10 h-10 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-lg">
              <solid-phone-missed-call-icon class="w-5 h-5" />
            </button>
            <button type="button" @click="minimumMeet" class="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-lg">
              <outline-minus-icon class="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div class="grid grid-cols-12" style="height: calc(100vh - 5.6rem)">
          <div class="col-span-9">
            <div class="bg-black flex justify-center" style="height: calc(100% - 10rem);">
              <img v-if="shareScreen" src="/share.jpg" style="height: calc(100%);" class="inline-block mx-auto">
            </div>
            <div class="bg-gray-700 h-40 w-full overflow-x-auto whitespace-nowrap flex divide-x flex-nowrap divide-black">
              <div class="w-64 h-full flex-none">
                <img v-if="! isTurnOffCamera" :src="$store.state.user.role === 'teacher' ? '/webcam-teacher.jpg' : '/webcam-student.jpg'"
                     class="object-cover h-full w-full"
                >
                <div v-else class="flex items-center justify-center h-full">
                  <div class="text-center">
                    <img :src="$store.state.user.avatar" class="w-20 h-20 rounded-full mx-auto inline-block">
                    <p class="text-white mt-2">{{ $store.state.user.name }}</p>
                  </div>
                </div>
              </div>

              <div
                v-for="student in $store.state.students"
                :key="student"
                class="w-64 h-full flex-none">
                <div class="flex items-center justify-center h-full">
                  <div class="text-center">
                    <img :src="'https://ui-avatars.com/api/?name=' + student.name" class="w-20 h-20 rounded-full mx-auto inline-block">
                    <p class="text-white mt-2 flex items-center">{{ student.name }}
                      <outline-microphone-icon class="w-5 h-5 ml-2 text-red-500" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-3">
            <div class="flex px-5 bg-gray-900">
              <div
                class="px-3 py-2 text-white hover:text-blue-500 cursor-pointer"
                :class="{'border-b-2 border-blue-500 text-blue-500 font-semibold': selectedTab === 'forum'}"
                @click="activeTab('forum')"
              >Thảo luận</div>
              <div
                class="px-3 py-2 text-white hover:text-blue-500 cursor-pointer"
                :class="{'border-b-2 border-blue-500 text-blue-500 font-semibold': selectedTab === 'member'}"
                @click="activeTab('member')"
              >Người tham dự</div>
            </div>

            <div v-show="selectedTab === 'forum'" class="flex " style="height: calc(100%);">
              <div class="w-full" style="height: calc(100%)">
                <CommentList class="overflow-auto" style="height: calc(100% - 7rem)" :comments="comments" />

                <div class="flex p-5">
                  <input type="text" class="form-text h-10 py-2 rounded-full shadow-inner w-full border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
                  <button type="button" class="flex-none ml-5 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600">
                    <outline-paper-airplane-icon class="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            <div v-show="selectedTab === 'member'" class="flex flex-col items-start overflow-auto" style="height: calc(100%);">
              <div class="p-5 pb-0 w-full" v-if="$store.state.user.role === 'teacher'">
                <button type="button" class="bg-gray-900 text-white rounded-lg px-3 py-2 block w-full">Tắt microphone toàn bộ</button>
              </div>

              <div class="w-full mt-5">
                <div class="flex px-5 items-center pb-2">
                  <img :src="$store.state.user.avatar" class="rounded-full w-10 h-10" />
                  <div class="ml-2">
                    <span class="text-white text-sm block">
                      {{ $store.state.user.name }}
                    </span>

                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                          v-if="$store.state.user.role === 'student'">Học viên</span>
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800"
                          v-else>Giảng viên</span>
                  </div>
                  <div class="ml-auto flex items-center">
                    <component
                      :is="microphone === '0' ? 'outline-microphone-icon' : 'solid-microphone-icon'"
                      class="w-5 h-5"
                      :class="[microphone === '0' ? 'text-red-500' : 'text-green-500']"
                    />
                  </div>
                </div>

                <div v-for="student in $store.state.students" :key="student" class="flex px-5 py-2 items-center">
                  <img :src="'https://ui-avatars.com/api/?name=' + student" class="rounded-full w-10 h-10" />
                  <div class="ml-2">
                    <span class="text-white text-sm block">
                      {{ student }}
                    </span>

                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                          v-if="$store.state.user.role === 'student'">Học viên</span>
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800"
                          v-else>Giảng viên</span>
                  </div>
                  <div class="ml-auto flex items-center">
                    <outline-microphone-icon
                      class="w-5 h-5 text-red-500"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    klass: {
      type: Object,
      required: true,
    },

    course: {
      type: Object,
      required: true,
    },

    lesson: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isShown: false,
      selectedTab: 'forum',
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
    close() {
      this.isShown = ! this.isShown
    },

    activeTab(tab) {
      this.selectedTab = tab
    },

    quitMeet() {
      this.close()
    },

    toggleDropdown(e) {
      const dropdown = e.target.parentElement.nextElementSibling

      if (! dropdown.classList.contains('hidden')) {
        dropdown.classList.add('hidden')
        return
      }

      Array.from(document.getElementsByClassName('dropdown')).forEach(el => {
        el.classList.add('hidden')
      })

      dropdown.classList.remove('hidden')
    },

    minimumMeet() {
      this.isShown = false
      this.$parent.$refs.preview.isShown = true
    }
  }
}
</script>
