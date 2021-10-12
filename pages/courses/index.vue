<template>
  <Search v-if="'q' in $route.query" />
  <StudentCourses v-else-if="$store.state.user.role === 'student'" />

</template>

<script>
export default {
}
</script>
