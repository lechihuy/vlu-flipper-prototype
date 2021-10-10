<template>
  <StudentCourses v-if="user.role === 'student'" />
</template>

<script>
export default {
  inject: ['user', 'courses'],
}
</script>
