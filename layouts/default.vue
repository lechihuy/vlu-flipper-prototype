<template>
  <div>
    <Header />
    <Sidebar />
    <Main>
      <Nuxt />
      <div class="flex flex-col mt-10">
        <p class="text-gray-600 text-center text-sm">Bản quyền thuộc Van Lang university &copy; 2021.</p>
        <p class="flex items-center justify-center text-xs text-gray-500">Flipper make with <solid-heart-icon class="ml-1 w-5 h-5 text-red-500 inline-block" /></p>
      </div>
    </Main>
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'bg-gray-100'
    }
  },

  provide() {
    return {
      now: '10-10-2021',
      user: this.$route.query.role === 'student'
        ? {
          name: 'Nguyễn Hồng Hoa',
          avatar: '/student-avatar.jpg',
          role: 'student',
          enrolled: [1, 2]
        } : {
          name: 'Nguyễn Tiến Dũng',
          avatar: '/teacher-avatar.jpg',
          role: 'teacher',
        },
      teachers: [
        {
          id: 1,
          name: 'Nguyễn Tiến Dũng',
          avatar: '/teacher-avatar.jpg',
        },

        {
          id: 2,
          name: 'Lê Chí Huy',
          avatar: '/teacher-avatar.jpg',
        },

        {
          id: 3,
          name: 'Bùi Nhật Hào',
          avatar: '/teacher-avatar.jpg',
        },

        {
          id: 4,
          name: 'Nguyễn Hoàng Tấn',
          avatar: '/teacher-avatar.jpg',
        }
      ],
      courses: [
        {
          id: 1,
          name: 'Làm quen với Powerpoint',
          teacherId: 4,
          rating: '5',
          thumbnail: '/course-1.jpg',
          slots: 40,
          enrolled: 35,
          closedAt: '12-10-2021',
          daysLeft: 2,
          categoryId: 2,
        },

        {
          id: 2,
          name: 'Kỹ năng thuyết trình',
          teacherId: 1,
          rating: '4.5',
          thumbnail: '/course-2.jpg',
          slots: 40,
          enrolled: 20,
          closedAt: '13-10-2021',
          daysLeft: 3,
          isRecommend: true,
          categoryId: 1,
        },

        {
          id: 3,
          name: 'Làm chủ thời gian của bạn',
          teacherId: 2,
          rating: '5.0',
          thumbnail: '/course-3.jpg',
          slots: 40,
          enrolled: 40,
          closedAt: '11-10-2021',
          daysLeft: 1,
          isRecommend: true,
          categoryId: 1,
        },

        {
          id: 4,
          name: 'Kỹ năng giao tiếp',
          teacherId: 3,
          rating: '5.0',
          thumbnail: '/course-4.jpg',
          slots: 40,
          enrolled: 38,
          closedAt: '15-10-2021',
          daysLeft: 5,
          categoryId: 1,
        },

        {
          id: 5,
          name: 'Kỹ năng dạy online',
          teacherId: 1,
          rating: '4.8',
          thumbnail: '/course-5.jpg',
          slots: 40,
          enrolled: 15,
          closedAt: '15-10-2021',
          daysLeft: 5,
          categoryId: 1,
        },

        {
          id: 6,
          name: 'Nhập môn Office 365',
          teacherId: 2,
          rating: '4.9',
          thumbnail: '/course-5.jpg',
          slots: 40,
          enrolled: 3,
          closedAt: '16-10-2021',
          daysLeft: 6,
          categoryId: 2,
        },

        {
          id: 7,
          name: 'Excel cho người mới bắt đầu',
          teacherId: 3,
          rating: '4.5',
          thumbnail: '/course-7.jpg',
          slots: 40,
          enrolled: 30,
          closedAt: '14-10-2021',
          daysLeft: 4,
          categoryId: 2,
        },

        {
          id: 8,
          name: 'Task list với OneNote',
          teacherId: 4,
          rating: '4.7',
          thumbnail: '/course-8.jpg',
          slots: 40,
          enrolled: 25,
          closedAt: '14-10-2021',
          daysLeft: 4,
          categoryId: 2,
        }
      ],
      categories: [
        {
          id: 1,
          name: 'Kỹ năng mềm'
        },
        {
          id: 2,
          name: 'Office'
        }
      ]
    }
  }
}
</script>
