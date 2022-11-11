<template>
  <v-container>
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
  </v-container>
</template>

<script lang="ts">
export default defineComponent({
    props: {
        name: { type: String, required: true},
        category: { type: String, required: true},
        image: { type: String, required: true}
    },
})
</script>

<style lang="scss">

</style>