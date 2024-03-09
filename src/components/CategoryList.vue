<template>
  <ForumList
    v-for="category in props.categories"
    :key="category.id"
    :forums="getForumsForCategory(category)"
    :title="category.name"
    :category-id="category.id"
  />
</template>

<script setup>
import ForumList from './ForumList.vue'
import sourceData from '@/data.json'
const props = defineProps({
  categories: {
    require: true,
    type: Array
  }
})

const getForumsForCategory = (category) => {
  return sourceData.forums.filter((forum) => forum.categoryId === category.id)
}
</script>
