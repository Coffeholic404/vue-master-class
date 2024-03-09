<template>
  <h1>{{ category.name }}</h1>
  <ForumList :title="category.name" :forums="getForumsForCategory(category)" />
</template>

<script setup>
import ForumList from '@/components/ForumList.vue'
import sourceData from '@/data.json'
import { computed, reactive } from 'vue'

const categories = reactive(sourceData.categories)
const props = defineProps({
  id: {
    require: true,
    type: String
  }
})

const category = computed(() => {
  return categories.find((category) => category.id === props.id)
})

const getForumsForCategory = (category) => {
  return sourceData.forums.filter((forum) => forum.categoryId === category.id)
}
</script>
