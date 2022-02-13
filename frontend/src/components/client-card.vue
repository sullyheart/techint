<script>
export default {
  name: 'ClientCard',
  props: ['client'],
  data() {
    return {
      defaultBio: 'This client has no bios.'
    }
  }
}
</script>

<template lang="pug">
.box
  h1 {{ client.name }} ({{ client.age }})
  p Bio: {{ client.bio || defaultBio }}
  h2 Photos ({{ client.photos.length }})

  .photo(v-for="photo in client.photos")
    h3 {{ photo.filename }}
    p(v-if="!photo.likedBy.length")
      | no likes yet!
    p(v-else)
      | {{ photo.likedBy.map(client => client.name).join(', ') }}
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid #333;
  background: #dd0;
  border-radius: 0.3rem;
}
</style>
