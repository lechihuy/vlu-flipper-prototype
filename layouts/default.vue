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
      user: this.$route.query.role === 'student'
        ? {
          name: 'Nguyễn Hồng Hoa',
          avatar: '/student-avatar.jpg',
          role: 'student',
        } : {
          name: 'Nguyễn Tiến Dũng',
          avatar: '/teacher-avatar.jpg',
          role: 'teacher',
        }
    }
  }
}
</script>
