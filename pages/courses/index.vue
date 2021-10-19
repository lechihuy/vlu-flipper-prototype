<template>
  <StudentCourses v-if="$store.state.user.role === 'student'" />
  <ManagerCourses v-else />
</template>

<script>
export default {
}
</script>
