import { defineStore, acceptHMRUpdate } from 'pinia'
import sourceData from '@/data.json'

export const useUserStore = defineStore('UserStore', {
  state: () => {
    return {
      users: sourceData.users,
      authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
    }
  },
  getters: {
    authUser: (state) => state.users.find(user => user.id === state.authId)
  },
  actions: {}
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
