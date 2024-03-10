import { defineStore, acceptHMRUpdate } from 'pinia'
import { usePostStore } from './PostStore'
import { useThreadsStore } from './ThreadsStore'
import sourceData from '@/data.json'

export const useUserStore = defineStore('UserStore', {

  state: () => {
    const { posts } = usePostStore()
    const { threads } = useThreadsStore()
    return {
      users: sourceData.users,
      authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3',
      posts,
      threads
    }
  },
  getters: {
    authUser: (state) => state.users.find(user => user.id === state.authId),
    userPosts: (state) => state.posts.filter(post => post.userId === state.authUser.id),
    userThreads: (state) => state.threads.filter(thread => thread.userId === state.authUser.id)
  },
  actions: {}
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
