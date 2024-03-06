<script setup>
import sourceData from '@/data.json'
import ThreadList from '@/components/ThreadList.vue'
import { reactive } from 'vue'

const threads = reactive(sourceData.threads)

// function postById (postId) {
//   return posts.find((p) => p.id === postId)
// }
// function userById (userId) {
//   return users.find((p) => p.id === userId)
// }

</script>

<template>
  <h1>Welcome to the Forum</h1>
  <ThreadList :threads="threads"/>
</template>
