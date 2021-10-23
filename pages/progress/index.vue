<template>
  <div class="grid gap-10">
    <div>
      <h3 class="text-2xl mb-5 text-gray-800 flex items-center">Quá trình học tập
        <div class="ml-auto flex items-center gap-2">

        </div>
      </h3>
      <div class="grid grid-cols-3 gap-5">
        <div class="bg-white rounded-lg shadow p-5">
          <p class="text-sm mb-2">Tất cả</p>
          <p class="text-4xl">5 <span class="text-xs text-gray-500">khóa học</span></p>
        </div>
        <div class="bg-white rounded-lg shadow p-5">
          <p class="text-sm mb-2">Phân loại</p>
          <div class="flex items-center">
            <div class="w-5 h-5 rounded-sm bg-green-500 mr-2"></div> 4 khóa học nội bộ
          </div>
          <div class="flex items-center">
            <div class="w-5 h-5 rounded-sm bg-gray-300 mr-2"></div> 1 khóa học ngoài
          </div>
        </div>
        <div class="bg-white rounded-lg shadow p-5">
          <p class="text-sm mb-2">Tình trạng</p>
          <div class="flex items-center">
            <div class="w-5 h-5 rounded-sm bg-green-500 mr-2"></div> 2 đã hoàn thành
          </div>
          <div class="flex items-center">
            <div class="w-5 h-5 rounded-sm bg-blue-500 mr-2"></div> 1 đang học
          </div>
          <div class="flex items-center">
            <div class="w-5 h-5 rounded-sm bg-gray-300 mr-2"></div> 2 chưa bắt đầu
          </div>
          <div class="flex items-center">
            <div class="w-5 h-5 rounded-sm bg-red-500 mr-2"></div> 0 vắng quá buổi
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-2xl mb-5 text-gray-800 flex items-center">Khóa học đã đăng ký
        <div class="ml-auto flex items-center gap-2">

        </div>
      </h3>

      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Khóa học
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tình trạng
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phân loại
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thời gian tham gia
                </th>
                <th scope="col" class="relative px-6 py-3"></th>
              </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="course in courses">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-14 w-14">
                        <NuxtLink :to="`/courses/${course.id}?role=${$store.state.user.role}`">
                          <img class="h-14 w-14 rounded-lg object-cover" :src="course.thumbnail" />
                        </NuxtLink>
                      </div>
                      <div class="ml-4">
                        <div class="font-medium text-gray-900">
                          <NuxtLink :to="`/courses/${course.id}?role=${$store.state.user.role}`">
                            {{ course.name }}
                          </NuxtLink>
                        </div>
                        <div class="text-sm text-gray-500">
                          Gv. {{ $store.state.teachers.find(t => t.id === course.teacherId).name }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span v-if="course.id === 1" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Đã hoàn thành</span>
                    <span v-else-if="course.id === 2" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Đang học</span>
                    <span v-else class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">Chưa bắt đầu</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-gray-700 font-semibold">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Nội bộ</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-gray-700 font-semibold">
                    13/08/2021
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right">
                    <NuxtLink v-if="[1, 2].includes(course.id)" class="px-3 py-2 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100" :to="`progress/${course.id}?role=${$store.state.user.role}`">Xem chi tiết</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="font-medium text-gray-900">
                            Kỹ năng dựng video thuyết trình
                        </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Đã hoàn thành</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-gray-700 font-semibold">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">Bên ngoài</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-gray-700 font-semibold">
                    13/08/2021
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right">

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    courses() {
      return this.$store.state.user.courses.map(course => {
        return this.$store.state.courses.find(c => c.id === course)
      })
    }
  }
}
</script>
