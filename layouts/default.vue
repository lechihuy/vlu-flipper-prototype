<template>
  <div>
    <Header />
    <Sidebar />
    <Main><Nuxt /></Main>
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
        } : {
          name: 'Nguyễn Tiến Dũng',
          avatar: '/teacher-avatar.jpg',
          role: 'teacher',
        },
      courses: [
        {
          id: 1,
          name: 'Kỹ năng thuyết trình trước đám đông',
          teacher: 'Nguyễn Tiến Dũng',
          rating: '4.5',
          thumbnail: '/course-2.jpg',
          slots: 40,
          enrolled: 20,
          closedAt: '13-10-2021',
          daysLeft: 3,
          isRecommend: true,
        },

        {
          id: 2,
          name: 'Làm chủ thời gian của bạn',
          teacher: 'Lê Chí Huy',
          rating: '5.0',
          thumbnail: '/course-3.jpg',
          slots: 40,
          enrolled: 39,
          closedAt: '11-10-2021',
          daysLeft: 1,
          isRecommend: true,
        }
      ]
    }
  }
}
</script>
