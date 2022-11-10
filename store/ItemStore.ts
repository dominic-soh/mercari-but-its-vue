import { defineStore } from 'pinia'

interface Item {
    name: string
    category: string
    image: string
}

export const useItemsStore = defineStore('ItemStore', () => {
    const items = ref<Item[]>([])
    const getItems = computed(() => items)
    async function itemsApi() {
        items.value = await $fetch('/api/items')
    }
    return { getItems, itemsApi }
})