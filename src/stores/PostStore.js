import { defineStore, acceptHMRUpdate } from 'pinia'
import sourceData from '@/data.json'
import { useThreadsStore } from './ThreadsStore'

export const usePostStore = defineStore('PostStore', {
  state: () => {
    return {
      posts: sourceData.posts
    }
  },
  getters: {},
  actions: {
    createPost (post) {
      const { threads } = useThreadsStore()
      post.id = 'cccc' + Math.random()
      this.posts.push(post)
      const thread = threads.find((thread) => thread.id === post.threadId)
      thread.posts.push(post.id)
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePostStore, import.meta.hot))
}
