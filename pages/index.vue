<template>
  <v-row
    justify="center"
    class="tab-container"
  >
    <v-tabs
      color="red"
    >
      <v-tab>おすすめ</v-tab>
      <v-tab>マイリスト</v-tab>
      <v-tab>ピックウップ</v-tab>
    </v-tabs>
  </v-row>
  <v-container>
    <v-row>
      <client-only>
        <div v-if="store.items.length === 0">
          Error 500: Internal Server Error
        </div>
        <v-col
          v-for="item in store.items"
          :key="item.id"
        >
          <listing-item
            :id="item.id"
            :name="item.name"
            :category="item.category"
            :image="item.image"
          />
        </v-col>
      </client-only>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useItemsStore } from '@/store/ItemStore'
import ListingItem from '~/components/ListingItem.vue'
const store = useItemsStore()
store.itemsApi()
</script>

<style scoped lang="scss">
.tab-container {
  border-bottom: black solid;
  background-color: #FAFAFA;
}
</style>