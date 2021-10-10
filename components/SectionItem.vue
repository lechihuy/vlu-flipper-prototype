<template>
  <div class="font-semibold text-gray-800 flex flex-col bg-gray-100">
    <div class="flex items-center p-3 cursor-pointer" @click="toggleSection">
      <component :is="isShown ? 'outline-chevron-up-icon' : 'outline-chevron-down-icon'" class="w-5 h-5 mr-3" />
      {{ section.name }}
      <span class="ml-auto text-gray-400 text-sm font-normal">{{ section.lessons.length }} tiết</span>
    </div>

    <div
      v-show="isShown"
      class="p-5 bg-white border-t border-gray-300 flex flex-col gap-3"
    >
      <div
        v-for="(lesson, index) in section.lessons"
        :key="index"
        class="flex items-center"
      >
        {{ lesson.name }}
        <div
          v-if="hasResource && lesson.resources"
          :ref="`resource-${index}`"
          class="border border-gray-400 rounded-lg ml-auto w-8 h-8 flex items-center justify-center relative cursor-pointer"
          @click="toggleResource(index)"
        >
          <outline-folder-open-icon class="w-5 h-5 text-gray-500" />

          <div class="bg-white absolute w-36 py-2 border border-gray-400 rounded-lg right-9 top-0 resource-dropdown hidden">
            <div
              v-for="file in lesson.resources"
              class="px-3 py-1 hover:bg-gray-100 text-left font-normal"
            >
              {{ file }}
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
    section: {
      type: Object,
      required: true
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
      this.$refs[`resource-${index}`][0].lastElementChild.classList.toggle('hidden')
    }
  }
}
</script>
