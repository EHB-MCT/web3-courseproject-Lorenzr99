<template>
  <div class="search">
      <form @submit.prevent="onSubmit" class="search-form">
          <input v-model="query" type="text" class="search-bar" placeholder="Zoek op naam...">
          <input type="submit" value="Zoek cocktail">
      </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            query: ""
        }
    },
    methods: {
        onSubmit() {
            this.$emit('search-query', this.query);
            this.query = "";
        }
    }
}
</script>

<style>
    .search {
        position: absolute;
        top: 75px;
        right: 50px;
    }

    input[type="text"] {
        padding: 0.5em 1em;
        padding-right: 5vw;
        border: none;
        margin-left: 60px;
        margin-top: 25px;
    }

    input[type="text"]:focus {
        outline: none;
    }

    input[type="submit"] {
        padding: 0.5em 1em;
    }
</style>