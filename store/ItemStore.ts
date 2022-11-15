import { defineStore } from 'pinia'

export interface Item {
    name: string
    category: string
    image: string
    id: string
}

export const useItemsStore = defineStore('ItemStore', {
    state: () => ({
        items: [] as Item[]
    }),
    actions: {
        async itemsApi() {
            this.items = useFetch('/api/items').data.value?.items ?? []
        },
        getItemById(id: string) {
            return this.$state.items.find((item) => item.id === id)
        }
    }
})