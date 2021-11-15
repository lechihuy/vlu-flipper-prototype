<template>
  <div class="font-semibold text-gray-800 flex flex-col bg-gray-50">
    <div class="flex items-center p-3 cursor-pointer" @click="toggleSection">
      <component :is="isShown ? 'outline-chevron-up-icon' : 'outline-chevron-down-icon'" class="w-5 h-5 mr-3" />
      <span @click="showInput"
      >{{ section.name ? section.name : '(Rỗng)' }}</span>
      <input type="text" class="w-full mr-2 form-text px-2 py-1 rounded-lg hidden" :value="section.name"
             @focusout="hideInput"
             @change="changeSection"
      >
      <div class="ml-auto flex-none flex items-center">
        <span class="text-gray-400 text-sm font-normal">{{ section.lessons.length }} tiết</span>
        <button v-if="hasResource && $store.state.user.role === 'teacher'" type="button" class="ml-2 w-8 h-8 rounded-lg border border-gray-300 bg-white flex justify-center items-center"
          @click.stop="removeSection"
        ><outline-x-icon class="w-5 h-5" /></button>
      </div>
    </div>

    <div
      v-show="isShown"
      class="p-5 bg-white border-t border-gray-300 flex flex-col gap-3"
    >
      <div
        v-for="(lesson, index) in section.lessons"
        :key="index"
        class="flex items-center font-normal relative"
      >
        <span @click="showInput"
        >{{ lesson.name ? lesson.name : '(Rỗng)' }}</span>
        <input type="text" class="w-full mr-2 form-text px-2 py-1 rounded-lg hidden" :value="lesson.name"
               @focusout="hideInput"
               @change="changeLesson($event, index)"
        >
        <div class="ml-auto flex-none flex items-center">
          <div
            v-if="hasResource && ($store.state.user.role === 'manager' || lesson.resources)"
            :ref="`resource-${section.name}-${index}`"
            class="border border-gray-400 rounded-lg ml-auto w-8 h-8 flex items-center justify-center cursor-pointer"
            @click.self="toggleResource(`resource-${section.name}-${index}`)"
            style="background-image: url('/resource.png'); background-repeat: no-repeat; background-position: center;"
          >
            <div class="bg-white z-10 absolute w-52 py-2 border border-gray-400 rounded-lg right-20 top-0 resource-dropdown hidden">
              <label
                v-if="$store.state.user.role === 'manager'"
                class="flex flex-col items-center px-3 py-1 mx-3 mb-2 bg-gray-100 text-gray-800 rounded-lg tracking-wide border border-gray-300 cursor-pointer hover:bg-gray-200">
                <span class="text-base leading-normal">Tải tệp mới</span>
                <input type="file" class="hidden" @input="uploadResource($event, index)" />
              </label>
              <div
                v-for="file in lesson.resources" :key="file"
                class="px-3 py-1 hover:bg-gray-100 text-left font-normal truncate flex items-center"
              >
                <span class="mr-2 block truncate">{{ file }}</span>
                <span class="ml-auto flex-none" @click="removeResource(index, file)"><outline-x-icon class="w-5 h-5" /></span>
              </div>
            </div>
          </div>
          <button v-if="hasResource && $store.state.user.role === 'manager'" type="button" class="ml-2 w-8 h-8 rounded-lg border border-gray-300 bg-white flex justify-center items-center "
            @click="removeLesson(index)"
          ><outline-x-icon class="w-5 h-5" /></button>
        </div>

      </div>
      <button v-if="hasResource && $store.state.user.role === 'manager'" @click="addLesson" type="button" class="flex inline-block items-center bg-gray-50 text-gray-800 hover:bg-gray-100 px-3 py-2 border border-gray-300 rounded-lg">
        <outline-plus-icon class="w-5 h-5 mr-1" /> Thêm tiết
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    courseId: {
      type: Number,
      required: true,
    },
    section: {
      type: Object,
      required: true
    },
    sectionIndex: {
      type: Number,
      required: true,
    },
    hasResource: {
      type: Boolean,
      required: true,
    }
  },

  data() {
    return {
      isShown: false,
    }
  },

  methods: {
    toggleSection() {
      this.isShown = ! this.isShown
    },

    toggleResource(index) {
      if (this.$refs[index][0].lastElementChild.classList.contains('hidden')) {
        this.$refs[index][0].lastElementChild.classList.remove('hidden')
      } else {
        this.$refs[index][0].lastElementChild.classList.add('hidden')
      }
    },

    uploadResource(e, lessonIndex) {
      const files = e.target.files

      const filename = files[0].name

      this.$store.commit('uploadResource', {
        courseId: this.courseId,
        sectionIndex: this.sectionIndex,
        lessonIndex: lessonIndex,
        filename: filename
      })

      this.$forceUpdate()
    },

    removeResource(lessonIndex, filename) {
      this.$store.commit('removeResource', {
        courseId: this.courseId,
        sectionIndex: this.sectionIndex,
        lessonIndex: lessonIndex,
        filename: filename
      })

      this.$forceUpdate()
    },

    changeSection(e) {
      this.$store.commit('changeSection', {
        courseId: this.courseId,
        sectionIndex: this.sectionIndex,
        name: e.target.value,
      })
    },

    changeLesson(e, lessonIndex) {
      this.$store.commit('changeLesson', {
        courseId: this.courseId,
        sectionIndex: this.sectionIndex,
        lessonIndex: lessonIndex,
        name: e.target.value,
      })
    },

    showInput(e) {
      if (! this.hasResource) return
      e.target.classList.add('hidden')
      e.target.nextElementSibling.classList.remove('hidden')
      e.target.nextElementSibling.focus()
    },

    hideInput(e) {
      e.target.classList.add('hidden')
      e.target.previousElementSibling.classList.remove('hidden')
    },

    removeSection() {
      this.$store.commit('removeSection', {
        courseId: this.courseId,
        sectionIndex: this.sectionIndex,
      })
    },

    removeLesson(lessonIndex) {
      this.$store.commit('removeLesson', {
        courseId: this.courseId,
        sectionIndex: this.sectionIndex,
        lessonIndex: lessonIndex,
      })
    },

    addLesson() {
      this.$store.commit('addLesson', {
        courseId: this.courseId,
        sectionIndex: this.sectionIndex,
      })
    }
  }
}
</script>
