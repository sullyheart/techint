<script>
import Counter from '@/components/counter.vue'
import UserCard from '@/components/client-card.vue'
import { mapActions } from 'vuex'

export default {
  name: 'ClientDetail',
  components: { ClientCard, Counter },
  data() {
    return {
      user: null
    }
  },
  async created() {
    this.user = await this.fetchUser(this.$route.params.id)
  },
  methods: {
    ...mapActions(['fetchUser'])
  }
}
</script>

<template lang="pug">
  .about
    h1 This is a client detail
    ClientCard(:client="client" v-if="client")
    Counter
</template>
