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
               class="text-center bg-red-500 hover:bg-red-600 uppercase px-5 py-3 text-white">
              Đăng ký ngay
            </a>
            <button type="button"
              class="text-gray-700 border border-gray-700 px-5 py-3 flex items-center justify-center cursor-pointer hover:bg-gray-100">
              <outline-heart-icon class="w-5 h-5 mr-1" /> Yêu thích
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="p-10 bg-white">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, cupiditate distinctio eaque expedita inventore, iure laudantium maiores nihil nobis, odit omnis quod suscipit velit. A ab amet aspernatur consequuntur doloremque ducimus ea eius eligendi incidunt ipsa ipsum iure magni minima necessitatibus neque nesciunt odit pariatur quam, quis quo repellat repudiandae sed unde ut voluptas! Aliquam dolores eveniet inventore iure quibusdam? Architecto asperiores atque cum dolor ipsum laudantium magni molestiae, natus neque nihil optio perspiciatis, soluta! Assumenda, distinctio earum enim illum iure nobis officia sed tempora unde ut. Accusantium corporis deleniti doloribus facere reiciendis! Ab aliquid aperiam aspernatur assumenda consequatur cupiditate deserunt doloremque earum enim eveniet, excepturi exercitationem fuga illo ipsa itaque iure laborum libero maiores molestias natus necessitatibus nemo nesciunt non officia omnis placeat quibusdam quisquam rem similique ullam vitae voluptatem voluptates voluptatum. Accusantium assumenda dolorum explicabo facilis, fuga hic molestiae mollitia non, officiis porro quisquam, quo tempore voluptate? Ab accusamus architecto dignissimos exercitationem illum itaque libero magni minima minus mollitia nisi nostrum obcaecati quaerat, quia quibusdam quos repellendus reprehenderit sapiente velit vitae? Deserunt nulla porro quod. Animi asperiores blanditiis consequatur consequuntur est eveniet iste laudantium libero nesciunt pariatur quaerat quas quibusdam, quis, quisquam quos, rem sapiente sequi voluptatem? Ad culpa eius, enim eum harum labore neque nisi nobis numquam optio quidem quo, quod, repudiandae vel voluptatum? Ad asperiores aspernatur aut beatae consequatur cum dolore doloribus facere, magnam nemo quidem tempora? Aliquam enim in, ipsa itaque laborum optio quisquam voluptas. Ab aut exercitationem maiores natus saepe! Aliquid, animi aperiam, asperiores cum cupiditate deserunt dolore dolorem eligendi error, est ex excepturi illum iure magnam nesciunt nihil nostrum numquam officiis quibusdam quod rem repellendus soluta unde veniam veritatis! A aspernatur beatae, delectus ducimus exercitationem, expedita molestiae non perspiciatis quae similique temporibus unde vero. A alias animi aperiam architecto at aut commodi consequuntur distinctio, ducimus ea eveniet explicabo hic ipsam ipsum itaque laudantium maxime molestias nam necessitatibus non nostrum pariatur placeat possimus provident quibusdam quisquam quod rem sequi ullam ut veritatis vitae voluptatibus voluptatum? Amet corporis explicabo facere hic inventore laborum nam praesentium vitae voluptates? Est ipsa, necessitatibus? Assumenda consequatur cum expedita, magnam maxime minima neque nobis nulla numquam quam quo soluta tempore? Accusamus alias atque aut consequuntur cumque deleniti deserunt dolor illum ipsa, ipsum iure labore modi numquam optio praesentium provident, quidem repellat voluptates? Debitis doloremque error fuga iusto ut! Ab adipisci aliquam, aspernatur cupiditate deleniti, doloribus illo labore minus modi nulla, optio perspiciatis rerum saepe. Ea fugiat id nobis quam sed voluptas voluptatem voluptatum? Animi corporis cupiditate dicta dolorum eius enim facilis fuga fugit id illo illum in inventore ipsa, ipsam iure iusto magni nihil nobis odit optio pariatur placeat quaerat quam quisquam quos temporibus ullam. Autem, culpa doloremque, eaque esse exercitationem fuga inventore itaque maxime officia pariatur repellendus vero. Autem corporis dolorum iste iure labore non, quae voluptatum! Architecto aut commodi ducimus ea eius esse explicabo illo impedit ipsum maiores minus modi nesciunt nobis omnis porro possimus recusandae repudiandae sint voluptates, voluptatum! Consequuntur delectus esse id molestiae, porro praesentium repellat.
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
  }
}
</script>

