<template>
  <div class="flex flex-col gap-5 p-5" v-if="comments.length">
    <CommentListItem
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
  </div>
  <div class="flex items-center justify-center py-20" v-else>
    <div class="text-center">
      <img src="/search-empty.jpg" class="w-36  inline-block mx-auto">
      <p class="text-gray-600 mt-2">Chưa có bình luận nào.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
