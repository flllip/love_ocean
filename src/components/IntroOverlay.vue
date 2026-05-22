<script setup>
defineProps({
  visible: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div v-if="visible" class="intro-overlay" aria-hidden="true">
    <h1 class="intro-title">欢迎来到小玥玥和小泽泽的世界</h1>
  </div>
</template>
