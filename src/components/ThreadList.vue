<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>

      <div v-for="thread in props.threads" :key="thread.id" class="thread">
        <div>
          <p>
            <RouterLink :to="{ name: 'ThreadShow', params: { id: thread.id } }">{{
              thread.title
            }}</RouterLink>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#">{{ userById(thread.userId).name }}</a
            >, <AppDate :timestamp="thread.publishedAt" />.
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">{{ thread.posts.length }} replies</p>

          <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="" />

          <div>
            <p class="text-xsmall">
              <a href="#">{{ userById(thread.userId).name }}</a>
            </p>
            <p class="text-xsmall text-faded">
              <AppDate :timestamp="thread.publishedAt" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import sourceData from '@/data.json'
import { reactive } from 'vue'

const props = defineProps({
  threads: {
    require: true,
    type: Array
  }
})

// eslint-disable-next-line no-unused-vars
const posts = reactive(sourceData.posts)
const users = reactive(sourceData.users)

// function postById (postId) {
//   return posts.find((p) => p.id === postId)
// }
function userById (userId) {
  return users.find((p) => p.id === userId)
}
</script>
