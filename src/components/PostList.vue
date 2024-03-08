<template>
  <div class="post-list">
    <div class="post" v-for="post in props.posts" :key="post.id">
      <div class="user-info">
        <a href="#" class="user-name">{{ userById(post.userId).name }}</a>

        <a href="#">
          <img class="avatar-large" :src="userById(post.userId).avatar" alt="" />
        </a>

        <p class="desktop-only text-small">107 posts</p>
      </div>
      <div class="post-content">
        <div>
          <p>
            {{ post.text }}
          </p>
        </div>
      </div>
      <div class="post-date text-faded" :title="humanFriendlyDate(post.publishedAt)">
        {{ diffForHumans(post.publishedAt) }}
      </div>
    </div>
  </div>
</template>

<script setup>
import sourceData from '@/data.json'
import { reactive } from 'vue'
import dayjs from 'dayjs'
import localizedDate from 'dayjs/plugin/localizedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.extend(localizedDate)
const users = reactive(sourceData.users)

const props = defineProps({
  posts: {
    require: true,
    type: Array
  }
})

// Methods
function userById (userId) {
  return users.find((p) => p.id === userId)
}

const diffForHumans = (timestamp) => {
  return dayjs.unix(timestamp).fromNow()
}

const humanFriendlyDate = (timestamp) => {
  return dayjs.unix(timestamp).format('llll')
}
</script>
