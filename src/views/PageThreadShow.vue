<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts"/>
  </div>
</template>

<script setup>
import PostList from '@/components/PostList.vue'
import sourceData from '@/data.json'
import { reactive, computed } from 'vue'

const threads = reactive(sourceData.threads)
const posts = reactive(sourceData.posts)

const props = defineProps({
  id: {
    require: true,
    type: String
  }
})

const thread = computed(() => {
  // eslint-disable-next-line no-undef
  return threads.find(thread => thread.id === props.id)
})

const threadPosts = computed(() => {
  return posts.filter(post => post.threadId === props.id)
})

</script>
