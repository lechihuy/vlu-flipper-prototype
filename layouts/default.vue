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

  beforeCreate() {
    this.$store.commit('loadUser', { role: this.$route.query.role })
    if (this.$route.query.role === 'student') {
      this.$store.commit('startMeeting')
    }
  },

  watch:{
    $route (to, from){
      this.$store.commit('loadQuery', { q: null })
    }
  }
}
</script>
