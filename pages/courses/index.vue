<template>
  <StudentCourses v-if="$store.state.user.role === 'student'" />
</template>

<script>
export default {
}
</script>
