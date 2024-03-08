<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />

    <div class="col-full">
      <form @submit.prevent="addPost">
        <div class="form-group">
          <label for="thread_title">Title:</label>
          <input type="text" id="thread_title" class="form-input" name="title" />
        </div>

        <div class="form-group">
          <label for="thread_content">Content:</label>
          <textarea
            v-model="newPostText"
            id="thread_content"
            class="form-input"
            name="content"
            rows="8"
            cols="140"
          ></textarea>
        </div>

        <div class="btn-group">
          <button class="btn btn-ghost">Cancel</button>
          <button class="btn btn-blue" type="submit" name="Publish">Publish</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import PostList from '@/components/PostList.vue'
import sourceData from '@/data.json'
import { reactive, computed, ref } from 'vue'

const newPostText = ref('')

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
  return threads.find((thread) => thread.id === props.id)
})

const threadPosts = computed(() => {
  return posts.filter((post) => post.threadId === props.id)
})

// Methods
// const addPost = () => {
//   const postId = 'gggg' + Math.random()
//   const post = {
//     id: postId,
//     text: newPostText,
//     publishedAt: Math.floor(Date.now() / 1000),
//     threadId: thread.value.id,
//     userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2'
//   }
//   posts.push(post)
//   thread.value.post.push(postId)
//   newPostText.value = ''
// }

function addPost () {
  const postId = 'gggg' + Math.random()
  const post = {
    id: postId,
    text: newPostText,
    publishedAt: Math.floor(Date.now() / 1000),
    threadId: thread.value.id,
    userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2'
  }
  this.posts.push(post)
  this.thread.posts.push(postId)
  newPostText.value = ''
}
</script>
