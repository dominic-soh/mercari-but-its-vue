<template>
  <v-container>
    <nuxt-link
      :to="id"
      class="custom-link"
    >
      <v-card>
        <v-img
          ref="cat"
          :src="image"
        />
        <template #title>
          {{ name }}
        </template>
        <template #subtitle>
          {{ category }}
        </template>
      </v-card>
    </nuxt-link>
  </v-container>
</template>

<script lang="ts">
export default defineComponent({
    props: {
        id: {type: String, required: true},
        name: { type: String, required: true},
        category: { type: String, required: true},
        image: { type: String, required: true}
    },
})
</script>

<style lang="scss">

</style>