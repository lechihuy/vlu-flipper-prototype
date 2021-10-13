<template>
  <div class="w-3/4" :class="[user.id !== comment.userId ? 'ml-auto' : '']">
    <span class="text-xs text-gray-500 block mb-2" :class="[user.id !== comment.userId ? 'text-right' : '']">{{ comment.name }}</span>
    <div class="rounded-lg px-3 py-2"
      :class="[user.id === comment.userId ? 'bg-blue-500 text-white' : 'bg-gray-50 text-gray-700']"
    >
      {{ comment.body }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  },

  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>
