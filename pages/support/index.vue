<template>
  <div>
    <h3 class="text-2xl mb-5 text-gray-800 flex items-center">Đơn yêu cầu hỗ trợ học phí
      <NuxtLink v-if="user.role === 'student'" :to="'/support/create?role=' + user.role" class="flex items-center hover:bg-blue-600 text-base ml-auto bg-blue-500 px-3 py-2 rounded-lg text-white">
        <solid-plus-icon class="w-5 h-5 mr-1" /> Tạo mới
      </NuxtLink>
    </h3>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Học viên
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Khóa học
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ngày gửi
              </th>
              <th scope="col" class="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Trạng thái
              </th>
              <th scope="col" class="relative px-6 py-3"></th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(support, index) in $store.state.supports" :key="index">
                <td class="px-6 py-4 whitespace-nowrap text-gray-700 font-semibold">
                  <div class="flex items-center col-span-3">
                    <img :src="'https://ui-avatars.com/api/?name=' + $store.state.students.find(std => std.id === support.student).name" class="w-10 h-10 rounded-full mr-5">
                    <div>
                      {{ $store.state.students.find(std => std.id === support.student).name }}
                      <div class="text-xs text-gray-500 italic">
                        {{ $store.state.students.find(std => std.id === support.student).email }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-700 font-semibold">
                  {{ support.course }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-700 font-semibold">
                  13/08/2021
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-700 font-semibold text-center">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800"
                        v-if="support.status === 0">Đang xét duyệt</span>
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                        v-else>Hỗ trợ {{ support.percent }}</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right">
                  <NuxtLink
                    v-if="support.status === 0 && user.role === 'student'"
                    :to="`/support/${support.id}?role=${user.role}`"
                    class="bg-gray-100 text-gray-800 px-3 py-2 hover:bg-gray-200 rounded-lg">Sửa</NuxtLink>
                  <a
                    v-if="support.status === 0 && user.role === 'student'"
                    class="bg-gray-100 text-gray-800 px-3 py-2 hover:bg-gray-200 rounded-lg">Hủy đơn</a>
                  <a
                    v-if="support.status === 1 && user.role === 'student'"
                    class="bg-gray-100 text-gray-800 px-3 py-2 hover:bg-gray-200 rounded-lg">In đơn</a>
                  <NuxtLink
                    v-if="user.role === 'manager'"
                    :to="`/support/${support.id}?role=${user.role}`"
                    class="bg-gray-100 text-gray-800 px-3 py-2 hover:bg-gray-200 rounded-lg">Xem xét</NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>
