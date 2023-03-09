<template>
  <div class="root">
    <header>
      <nav>
        <li>
          <nuxt-link :to="{ name: 'decks' }">
            decks
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ name: 'decks-id', params: { id: 1 } }">
            decks id
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ name: 'decks' }">
            decks
          </nuxt-link>
        </li>
      </nav>
    </header>
    <div class="main">
      <p>abc</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'page_layout'
}
</script>
<style>
.root {
  display: flex;
  font-size: 18px;
}
.main{
  margin-left: 200px;
}
</style>
