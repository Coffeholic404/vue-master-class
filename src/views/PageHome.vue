<script setup>
import sourceData from '@/data.json'
import ForumList from '@/components/ForumList.vue'
import { reactive } from 'vue'

// const threads = reactive(sourceData.threads)
const forums = reactive(sourceData.forums)

// function postById (postId) {
//   return posts.find((p) => p.id === postId)
// }
// function userById (userId) {
//   return users.find((p) => p.id === userId)
// }
</script>

<template>
  <h1>Welcome to the Forum</h1>
  <ForumList :forums="forums" />
</template>
