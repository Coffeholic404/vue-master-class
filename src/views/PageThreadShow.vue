<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <PostEditor @save="addPost"/>
  </div>
</template>

<script setup>
import PostEditor from '@/components/PostEditor.vue'
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
  return threads.find((thread) => thread.id === props.id)
})

const threadPosts = computed(() => {
  return posts.filter((post) => post.threadId === props.id)
})

// Methods
const addPost = (eventData) => {
  console.log(eventData)
  const postId = 'gggg' + Math.random()
  const post = {
    ...eventData.post,
    threadId: thread.value.id
  }
  console.log(eventData.post)

  posts.push(post)
  thread.value.posts.push(postId)
}
</script>
