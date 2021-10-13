<template>
  <div class="grid grid-cols-12">
    <Device ref="device" />

    <Preview ref="preview" />

    <Stream ref="stream" :klass="klass" :course="course" :lesson="selectedLesson" :comments="comments" />

    <div class="bg-yellow-100 p-5 text-yellow-800 rounded-lg shadow col-span-12 mb-5">
      <h3 class="flex items-center text-xl mb-2"><solid-exclamation-icon class="w-6 h-6 mr-1" /> Trước khi trải nghiệm</h3>
      Có thể tải lại trang để làm mới các trạng thái về ban đầu
    </div>

    <div class="col-span-5 p-5 pr-10">
      <div class="flex items-center">
        <img :src="course.thumbnail" class="w-16 h-16 rounded-lg object-cover">
        <div class="ml-2">
          <h3 class="font-semibold text-gray-800">{{ klass.name }}</h3>
          <p class="text-gray-700">Gv. {{ teacher.name }}</p>
        </div>
      </div>

      <div class="mt-5 flex flex-col gap-5">
        <div
          v-for="(section, sectionIndex) in course.roadmap"
          :key="sectionIndex"
          class="text-xs text-gray-600 uppercase"
        >
          <div class="mb-2">{{ section.name }}</div>

          <div
            v-for="(lesson, lessonIndex) in section.lessons"
            :key="lesson.id"
            class="relative pl-10 pr-5 text-base py-1 rounded-lg normal-case cursor-pointer flex items-center"
            :class="[lesson.id === selectedLessonId
              ? 'bg-blue-500 text-white hover:bg-blue-600 hover:text-white'
              : 'text-gray-800 hover:bg-gray-50']"
            @click="selectLesson(lesson.id)"
          >
            <span class="lesson mr-5">{{ lesson.name }}</span>
            <span v-if="klass.liveLesson.id === lesson.id" class="flex absolute h-4 w-4 top-2 left-3.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
            </span>
            <solid-check-circle-icon
              v-else-if="klass.taughtLessons.find(taughtLesson => taughtLesson.id === lesson.id)"
              class="w-5 h-5 text-green-500 absolute top-1.5 left-3" />

          </div>
        </div>
      </div>
    </div>
    <div class="col-span-7 place-self-start bg-white rounded-lg shadow w-full">
      <div v-if="! selectedLessonId" class="flex items-center justify-center h-full">
        <div class="text-center py-20">
          <img src="/search-empty.jpg" class="w-64 inline-block mx-auto mb-5">
          <p class="text-xl text-gray-700">Hãy chọn một tiết học để bắt đầu</p>
        </div>
      </div>

      <div v-else>
        <h3 class="text-2xl text-gray-700 font-semibold flex items-center p-5">
          <solid-check-circle-icon
            v-if="klass.taughtLessons.find(taughtLesson => taughtLesson.id === selectedLesson.id)"
            class="w-6 mr-2 h-6 text-green-500" />
          <span class="mr-5">{{ selectedLesson.name }}</span>
          <div v-if="! klass.taughtLessons.find(taughtLesson => taughtLesson.id === selectedLesson.id)"
               class="ml-auto flex-none">

            <button
              v-if="$store.state.user.role === 'teacher' && ! Object.keys(klass.liveLesson).length"
              type="button" class="text-white hover:bg-indigo-600 text-base px-3 py-2 bg-indigo-500 rounded-lg flex items-center"
              @click="joinMeeting"
            >
              <solid-video-camera-icon class="w-5 h-5 mr-1" /> Tạo Meet
            </button>

            <button
              v-else-if="$store.state.user.role === 'teacher' && Object.keys(klass.liveLesson).length
                && klass.liveLesson.id === selectedLesson.id
              "
              type="button" class="text-white hover:bg-indigo-600 text-base px-3 py-2 bg-indigo-500 rounded-lg flex items-center"
              @click="joinMeeting"
            >
              <outline-login-icon class="w-5 h-5 mr-1" /> Vào lớp
            </button>

            <button
              v-else-if="$store.state.user.role === 'student' && Object.keys(klass.liveLesson).length
              && klass.liveLesson.id === selectedLesson.id"
              type="button" class="text-white hover:bg-indigo-600 text-base px-3 py-2 bg-indigo-500 rounded-lg flex items-center"
              @click="joinMeeting"
            >
              <outline-login-icon class="w-5 h-5 mr-1" /> Tham gia
            </button>
          </div>
        </h3>

        <div
          v-if="klass.taughtLessons.find(taughtLesson => taughtLesson.id === selectedLesson.id)"
          class="bg-gray-100 rounded-lg p-5 flex mx-5 mb-5">
          <div class="w-36 bg-black opacity-80 rounded-lg h-20 flex items-center justify-center cursor-pointer">
            <solid-play-icon class="w-10 h-10 text-white" />
          </div>
          <div class="ml-5">
            <h3 class="font-semibold text-gray-700 text-xl cursor-pointer">Recording - Bài 1: Giới thiệu</h3>
            <p class="flex items-center text-gray-500 mt-2"><solid-clock-icon class="w-5 h-5 mr-2"></solid-clock-icon> 02:05:45</p>
          </div>
        </div>

        <div class="flex border-b border-gray-300 px-5">
          <div
            class="px-3 py-2 hover:text-blue-500 cursor-pointer"
            :class="{'border-b-2 border-blue-500 text-blue-500 font-semibold': selectedTab === 'forum'}"
            @click="activeTab('forum')"
          >Thảo luận</div>
          <div
            class="px-3 py-2 hover:text-blue-500 cursor-pointer"
            :class="{'border-b-2 border-blue-500 text-blue-500 font-semibold': selectedTab === 'resource'}"
            @click="activeTab('resource')"
          >Tài liệu</div>
          <div
            class="px-3 py-2 hover:text-blue-500 cursor-pointer"
            :class="{'border-b-2 border-blue-500 text-blue-500 font-semibold': selectedTab === 'review'}"
            @click="activeTab('review')"
          >Đánh giá</div>
        </div>

        <div v-show="selectedTab === 'forum'">
          <CommentList :comments="comments" />

          <div class="flex p-5">
            <input type="text" class="form-text h-10 py-2 rounded-full shadow-inner w-full border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
            <button type="button" class="flex-none ml-5 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600">
              <outline-paper-airplane-icon class="w-6 h-6" />
            </button>
          </div>
        </div>

        <div v-show="selectedTab === 'resource'">
          <div class="p-5 flex flex-col gap-2" v-if="selectedLesson.resources">
            <div
              v-for="(resource, index) in selectedLesson.resources"
              class="px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-50 text-gray-700 flex items-center"
              :key="index"
            >
              {{ resource }}

              <div class="ml-auto">
                <button type="button" class="flex items-center justify-center text-gray-700 w-8 h-8 border border-gray-300 hover:bg-gray-100 rounded-lg bg-white">
                  <outline-download-icon class="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          <div class="flex items-center justify-center py-20" v-else>
            <div class="text-center">
              <img src="/search-empty.jpg" class="w-36  inline-block mx-auto">
              <p class="text-gray-600 mt-2">Chưa có tài liệu nào.</p>
            </div>
          </div>
        </div>

        <div v-show="selectedTab === 'review'">
          <div class="p-5">
            <div class="flex justify-center py-10" v-if="$store.state.user.role === 'student'">
              <div>
                <div class="flex items-center gap-1">
                  <span v-for="i in 5" :key="i" class="cursor-pointer text-gray-300 star" @click="clickStar(i)">
                    <solid-star-icon class="w-10 h-10" />
                  </span>
                </div>
                <textarea class="form-textarea mt-4 rounded-lg shadow-inner border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50" placeholder="Góp ý cho giảng viên"></textarea>
                <button type="button" class="bg-blue-500 hover:bg-blue-600 text-white block w-full mt-4 py-2 rounded-lg">Gửi đáng giá</button>
              </div>

            </div>

            <div else>
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="divide-y divide-gray-200 min-w-full">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Học viên
                      </th>
                      <th scope="col" class="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Số sao
                      </th>
                      <th scope="col" class="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Góp ý
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="student in $store.state.students" :key="student">
                      <td class="px-6 py-4 whitespace-nowrap text-gray-700 font-semibold flex items-center">
                        <img :src="'https://ui-avatars.com/api/?name=' + student" class="w-10 h-10 rounded-full mr-2">
                        {{ student }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-gray-700 font-semibold text-center">
                        {{ 5 }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-gray-700 font-semibold text-center">
                        &mdash;
                      </td>
                    </tr>
                  </tbody>
                </table>
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
      required: true
    },
    course: {
      type: Object,
      required: true
    },
    teacher: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      selectedLessonId: null,
      selectedTab: 'forum',
    }
  },

  computed: {
    selectedLesson() {
      for (const sectionIndex in this.course.roadmap) {
        for (const lessonIndex in this.course.roadmap[sectionIndex].lessons) {
          if (this.course.roadmap[sectionIndex].lessons[lessonIndex].id === this.selectedLessonId)
            return this.course.roadmap[sectionIndex].lessons[lessonIndex]
        }
      }
    },

    comments() {
      return this.klass.taughtLessons.find(lesson => lesson.id === this.selectedLesson?.id)?.comments
    }
  },

  methods: {
    selectLesson(lessonId) {
      this.selectedLessonId = lessonId
    },

    activeTab(tab) {
      this.selectedTab = tab
    },

    joinMeeting() {
      this.$store.commit('startMeeting', this.selectedLessonId)
      this.$refs.device.isShown = true
    },

    clickStar(index) {
      Array.from(document.getElementsByClassName('star')).forEach((el, i) => {
        el.classList.add('text-gray-300')
        el.classList.remove('text-yellow-500')
      })
      Array.from(document.getElementsByClassName('star')).forEach((el, i) => {
        if (i <= index - 1) {
          el.classList.remove('text-gray-300')
          el.classList.add('text-yellow-500')
        }
      })
    }
  }
}
</script>
