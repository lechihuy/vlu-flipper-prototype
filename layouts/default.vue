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
  }
}
</script>
