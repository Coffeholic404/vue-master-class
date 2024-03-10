<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
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

        <p class="text-xsmall text-faded text-center">
          Member since june 2003, last visited 4 hours ago
        </p>

        <div class="text-center">
          <hr />
          <a href="edit-profile.html" class="btn-green btn-small">Edit Profile</a>
        </div>
      </div>

      <div class="col-7 push-top">
        <div class="profile-header">
          <span class="text-lead"> Joker's recent activity </span>
          <a href="#">See only started threads?</a>
        </div>

        <hr />
        <PostList :posts="userStore.userPosts" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PostList from '@/components/PostList.vue'
import { useUserStore } from '@/stores/UserStore'
import { computed } from 'vue'
const userStore = useUserStore()
console.log(userStore.userPosts.value)

const userPostsCount = computed(() => userStore.userPosts.length)
const userThreadsCount = computed(() => userStore.userThreads.length)

console.log(userPostsCount.value, userThreadsCount.value)
</script>
