<template>
    <div>
        <main-header />
        <search v-on:search-query="searchCocktail" />
        <cocktail :name="cocktail.strDrink" :thumbnail="cocktail.strDrinkThumb" :instructions="cocktail.strInstructions" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainHeader from '../components/MainHeader.vue';
import Search from '../components/Search.vue';

export default Vue.extend({
    data() {
        return {
            cocktail: {}
        }
    },
    head() {
        return {
            title: "Cocktails",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Best website to look up cocktails"
                }
            ]
        }
    },
  components: { MainHeader, Search },
  methods: {
        async searchCocktail(query: String) {
            try {
                const cocktail = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
                const result = await cocktail.json();
                console.log(result);
                this.cocktail = result.drinks[0];
            } catch (e) {
                console.log(e);
            }
        }
    }
  })
</script>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background: repeating-linear-gradient(rgb(34, 193, 195), rgb(253, 187, 45) 100vh, rgb(253, 187, 45) 100vh, rgb(34, 193, 195) 200vh);
        min-height: 100vh;
        min-width: 100vw;
        overflow-x: hidden;
    }
</style>
