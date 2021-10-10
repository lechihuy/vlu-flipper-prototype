<template>
  <div class="rounded-lg overflow-hidden shadow">
    <div class="grid grid-cols-12 bg-gray-700 p-10 gap-10">
      <div class="col-span-7 relative">
        <h1 class="text-white text-3xl font-semibold mb-2">{{ course.name }}</h1>
        <p class="text-base text-gray-200">{{ course.description }}</p>

        <div class="mt-2 flex gap-4">
          <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg">
            {{ category.name }}
          </span>

          <span class="flex items-center text-yellow-500 ">
            <solid-star-icon class="w-5 h-5 text-yellow-500 ml-2 mr-1" /> {{ course.rating }}
          </span>

          <span class="flex items-center text-gray-100">
            <solid-clock-icon class="w-5 h-5 text-gray-100 ml-2 mr-1" /> {{ course.lessons }} tiết
          </span>
        </div>

        <div class="absolute bottom-0 w-full">
          <div class="px-4 py-3 r bg-gray-800 rounded-lg mt-4">
            <div class="flex items-center">
              <img :src="teacher.avatar" class="rounded-full w-10 h-10" />
              <div class="ml-2">
              <span class="text-white text-sm block">
                {{ teacher.name }}
              </span>

                <span class="bg-blue-100 px-1.5 py-0.5 rounded-full text-blue-700 text-xs">Giảng viên</span>
              </div>
            </div>
            <div class="text-gray-400 text-xs mt-2">
              {{ teacher.description }}
            </div>
          </div>

          <div class="mt-4">
            <div class="flex mb-1">
              <span class="text-xs text-gray-100">Kết thúc đăng ký sau {{ course.daysLeft }} ngày nữa</span>
              <span class="ml-auto text-xs text-gray-100">{{ course.enrolled }}/{{ course.slots }} học viên</span>
            </div>
            <div class="rounded-full shadow-inner bg-gray-800">
              <div class="h-2 bg-green-400 rounded-full" :style="{width: `${(course.enrolled/course.slots)*100}%`}"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-5 bg-white overflow-hidden rounded-lg">
        <img :src="course.thumbnail" class="w-full">

        <div class="p-5">
          <p class="text-gray-800 text-3xl font-bold">{{ course.price }}</p>
          <p class="text-gray-500 italic">(giá chưa bao gồm hỗ trợ học phí)</p>

          <div class="flex flex-col mt-4 gap-1">
            <a href=""
               class="text-center bg-red-500 hover:bg-red-600 uppercase px-5 py-3 text-white rounded-lg">
              Đăng ký ngay
            </a>
            <button type="button"
              class="rounded-lg text-gray-700 border border-gray-700 px-5 py-3 flex items-center justify-center cursor-pointer hover:bg-gray-100">
              <outline-heart-icon class="w-5 h-5 mr-1" /> Yêu thích
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="p-10 bg-white flex flex-col gap-5">
      <div>
        <h3 class="font-semibold text-xl text-gray-700 mb-2">Thông tin chi tiết</h3>
        <div v-html="course.content"></div>
      </div>

      <div>
        <h3 class="font-semibold text-xl text-gray-700 mb-2">Lộ trình khóa học</h3>
        <div v-if="course.roadmap">
          <div class="border border-gray-300 divide-y divide-gray-300 rounded-lg overflow-hidden">
            <SectionItem
              v-for="section in course.roadmap"
              :hasResource="false"
              :section="section"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['courses', 'categories', 'teachers'],

  async asyncData({ params }) {
    const courseId = parseInt(params.slug)

    return { courseId }
  },

  computed: {
    course() {
      return this.courses.find(course => course.id === this.courseId)
    },

    teacher() {
      return this.teachers.find(teacher => teacher.id === this.course.teacherId)
    },

    category() {
      return this.categories.find(category => category.id === this.course.categoryId)
    }
  },
}
</script>

