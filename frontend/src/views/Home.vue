<script>
import axios from 'axios'
import ClientCard from '@/components/client-card.vue'

export default {
  name: 'Home',
  components: {
    ClientCard
  },
   data() {
    return {
      users: [],
      time: new Date()
    },
  async created() {
 const usersRequest = await axios.get('/api/users')
 this.users = usersRequest.data
  }
}
</script>

<template lang="pug">
  .home
    h1 Techint
    p The time is: {{ time }}
    user-card(v-for="client in users" :client="client")
</template>

