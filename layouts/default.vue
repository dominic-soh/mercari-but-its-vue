<template>
  <v-layout>
    <v-app-bar color="grey-lighten-1">
      <template #image>
        <img
          src="~/assets/img/logo.svg"
          width="182"
          style="padding: 0 2.25rem 0 2.25rem"
        >
      </template>
      <v-app-bar-title>
        <v-text-field
          density="compact"
          append-inner-icon="mdi-magnify"
          placeholder="search"
          bg-color="white"
          variant="outlined"
          hide-details
          style="max-width: 50rem; margin-left: 182px"
        />
      </v-app-bar-title>

      <v-btn>Notifications</v-btn>
      <v-btn>Login</v-btn>
      <v-btn>Signup</v-btn>
      <v-btn
        variant="flat"
        color="error"
      >
        Sell
      </v-btn>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
    <v-footer
      app
      class="bg-grey-darken-1"
    >
      <v-row
        justify="start"
        no-gutters
      >
        <div
          v-for="stuff in bottomStuff"
          :key="stuff"
          style="color: white; font-weight: 600;"
          class="mx-8"
        >
          {{ stuff.title }}
          <v-col
            v-for="link in stuff.subtitles"
            :key="link"
            style="padding: 0.5rem 0 0.5rem 0"
          >
            <NuxtLink
              to="https://cataas.com/cat"
              class="custom-link"
            >
              {{ link }}
            </NuxtLink>
          </v-col>
        </div>
        <v-col
          class="text-center mt-4"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>FakeMercari</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-layout>
</template>

<script lang="ts">
export default defineComponent({
    setup: () => {
        const bottomStuff = [
            {
                title: 'メルカリについて', 
                subtitles: [
                    "会社概要（運営会社）",
                    "採用情報",
                    "プレスリリース",
                    "公式ブログ",
                    "プレスキット",
                    "メルカリUS"
                    ]
            },
            {
                title: 'ヘルプ＆ガイド', 
                subtitles: [
                    "メルカリガイド",
                    "らくらくメルカリ便",
                    "ゆうゆうメルカリ便",
                    "梱包・発送たのメル便",
                    "車体取引ガイド",
                    "メルカリあんしん・あんぜん宣言！",
                    "偽ブランド品撲滅への取り組み",
                    "フリーワードからさがす",
                    "お問い合わせ"
                    ]
            },
            {
                title: 'プライバシーと利用規約', 
                subtitles: [
                    "プライバシーポリシー",
                    "メルカリ利用規約",
                    "コンプライアンスポリシー",
                    "個人データの安全管理に係る基本方針",
                    "特定商取引に関する表記",
                    "資金決済法に基づく表示",
                    "法令順守と犯罪抑止のために"
                ]
            },
        ]

        return {bottomStuff}
    },
})
</script>

<style scoped lang="scss">
.custom-link {
    color: inherit;
    font-weight: 400;
    text-decoration: none;

    &:hover {
    text-decoration: underline;
}
}
</style>