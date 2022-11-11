<template>
  <v-container>
    <v-row>
      <v-col
        v-for="item in store.items"
        :key="item.name"
      >
        <listing-item
          :name="item.name"
          :category="item.category"
          :image="item.image"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useItemsStore } from '@/store/ItemStore'
import ListingItem from '~/components/ListingItem.vue'
const store = useItemsStore()
store.itemsApi()
</script>

