import { defineStore, acceptHMRUpdate } from 'pinia'
import sourceData from '@/data.json'

export const usePostStore = defineStore('PostStore', {
  state: () => {
    return {
        posts: sourceData.posts
    }
  },
  getters: {},
  actions: {}
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePostStore, import.meta.hot))
}
