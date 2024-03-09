<script setup>
import sourceData from '@/data.json'
import CategoryList from '@/components/CategoryList.vue'
import { reactive } from 'vue'

// const threads = reactive(sourceData.threads)
const categories = reactive(sourceData.categories)

// function postById (postId) {
//   return posts.find((p) => p.id === postId)
// }
// function userById (userId) {
//   return users.find((p) => p.id === userId)
// }
</script>

<template>
  <h1>Welcome to the Forum</h1>
  <CategoryList :categories="categories" />
</template>
