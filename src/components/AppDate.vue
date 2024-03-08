<template>
  <span :title="humanFriendlyDate()">
    {{ diffForHumans() }}
  </span>
</template>

<script setup>
import dayjs from 'dayjs'
import localizedDate from 'dayjs/plugin/localizedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.extend(localizedDate)

const props = defineProps({
  timestamp: {
    require: true,
    type: Number
  }
})

// Methods
const diffForHumans = () => {
  return dayjs.unix(props.timestamp).fromNow()
}

const humanFriendlyDate = () => {
  return dayjs.unix(props.timestamp).format('llll')
}
</script>
