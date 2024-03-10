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
import { usePostStore } from '@/stores/PostStore'
import { useThreadsStore } from '@/stores/ThreadsStore'
import { computed } from 'vue'

const postStore = usePostStore()
const threadStore = useThreadsStore()

const props = defineProps({
  id: {
    require: true,
    type: String
  }
})

const thread = computed(() => {
  return threadStore.threads.find((thread) => thread.id === props.id)
})

const threadPosts = computed(() => {
  return postStore.posts.filter((post) => post.threadId === props.id)
})

// Methods
const addPost = (eventData) => {
  const post = {
    ...eventData.post,
    threadId: thread.value.id
  }
  postStore.createPost(post)
}
</script>
