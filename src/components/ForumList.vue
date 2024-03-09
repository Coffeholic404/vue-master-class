<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <router-link v-if="categoryId" :to="{name: 'Category', params:{id: categoryId}}">{{ title }}</router-link>
        <span v-else>{{ title }}</span>
      </h2>

      <div class="forum-listing" v-for="forum in props.forums" :key="forum.id">
        <div class="forum-details">
          <router-link :to="{ name: 'Forum', params: { id: forum.id } }" class="forum-name">
            {{ forum.name }}
          </router-link>
          <p class="forum-description">{{ forum.description }}</p>
        </div>

        <div class="threads-count">
          <p>
            <span class="count text-lead">{{ forum.threads?.length }}</span>
          </p>
          {{ forumThreadsWord(forum) }}
        </div>

        <div class="last-thread"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  forums: {
    require: true,
    type: Array
  },
  title: {
    type: String,
    default: 'Forums'
  },

  categoryId: {
    require: false,
    type: String
  }
})

// Methods
const forumThreadsWord = (forum) => {
  if (forum.threads?.length) {
    return forum.threads.length > 1 ? 'threads' : 'thread'
  } else {
    return 'no threads'
  }
}
</script>
