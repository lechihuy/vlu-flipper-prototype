<template>
  <aside class="fixed bg-gray-800 top-0 left-0 min-h-screen w-60 z-20">
    <div class="flex justify-center h-14 items-center bg-gray-900">
      <Logo class="text-white" />
    </div>

    <ul class="px-2 mt-4">
      <li
        v-for="(item, index) in navigative" :key="index"
        class="text-white px-3 py-2 rounded-lg hover:bg-gray-900 font-semibold hover:cursor-pointer"
      >
        {{ item.label }}
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  setup() {
    const navigative = []
    return { navigative }
  }
}
</script>
