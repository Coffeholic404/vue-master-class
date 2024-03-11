<template>
  <div class="profile-card">
    <p class="text-center">
      <img
        :src="userStore.authUser.avatar"
        :alt="`${userStore.authUser.name} profile picture`"
        class="avatar-xlarge"
      />
    </p>

    <h1 class="title">{{ userStore.authUser.username }}</h1>

    <p class="text-lead">{{ userStore.authUser.name }}</p>

    <p class="text-justify">{{ userStore.authUser.bio || 'No bio specified.' }}</p>

    <span class="online">{{ userStore.authUser.username }} is online</span>

    <div class="stats">
      <span>{{ userPostsCount }} posts</span>
      <span>{{ userThreadsCount }} threads</span>
    </div>

    <hr />

    <p v-if="userStore.authUser.wesite" class="text-large text-center">
      <i class="fa fa-globe"></i>
      <a :href="userStore.authUser.website">{{ userStore.authUser.wesite }}</a>
    </p>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/UserStore'
import { computed } from 'vue'
const userStore = useUserStore()
const userPostsCount = computed(() => userStore.userPosts.length)
const userThreadsCount = computed(() => userStore.userThreads.length)
// const props = defineProps({

// })
</script>
