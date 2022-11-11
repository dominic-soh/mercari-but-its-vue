<template>
  <v-container>
    <listing-item
      :id="id"
      :name="name"
      :category="category"
      :image="image"
    />
  </v-container>
</template>

<script setup>
import { useItemsStore } from '~~/store/ItemStore';

const store = useItemsStore()
store.itemsApi()

const router = useRoute()


const {id,name,category,image} = store.items.filter((item) => item.id === router.params.id)[0]
</script>