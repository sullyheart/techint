<script>
import Counter from '@/components/counter.vue'
import { mapActions } from 'vuex'

export default {
  name: 'ClientList',
  components: { Counter },
  data() {
    return {
      users: [],
      time: new Date()
    }
  },
  async created() {
    this.users = await this.fetchUsers()
  },
  methods: {
    ...mapActions(['fetchUsers'])
  }
}
</script>

<template lang="pug">
  .home
    h1 Techint
    p The time is: {{ time }}
    h2 Users
    div(v-for="client in users")
      router-link(:to="`/users/${client._id}`") {{ client.name }}
    Counter
</template>
