<template>
  <v-container>
    <client-only>
      <item-detail
        :id="item.id"
        :name="item.name"
        :category="item.category"
        :image="item.image"
      />
    </client-only>
  </v-container>
</template>

<script setup>
import { useItemsStore } from '~~/store/ItemStore';
import ItemDetail from '~~/components/ItemDetail';

const store = useItemsStore()
store.itemsApi()
const router = useRoute()

const id = router.params.id

const item = store.items.find((item) => item.id === id)
</script>