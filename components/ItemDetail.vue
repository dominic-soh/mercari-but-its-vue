<template>
  <v-row>
    <v-col>
      <v-img
        ref="cat"
        :src="image"
      />
    </v-col>
    <v-col>
      <h1>{{ name }}</h1>
      ￥200
      <v-table>
        <thead>
          <tr>
            <th>
              商品情報
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              カテゴリー
            </td>
            <td>
              {{ category }}
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({
    id: {type: String, required: true},
    name: {type: String, required: true},
    category: {type: String, required: true},
    image: {type: String, required: true}
})
</script>