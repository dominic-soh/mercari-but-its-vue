import { defineStore } from 'pinia'

export interface Item {
    name: string
    category: string
    image: string
}

export const useItemsStore = defineStore('ItemStore', {
    state: () => ({
        items: [] as Item[]
    }),
    actions: {
        async itemsApi() {
            this.items = useFetch('/api/items').data.value?.items ?? []
        }
    }
})