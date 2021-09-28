<template>
    <div>
        <main-header />
        <cocktail :name="cocktail.strDrink" :thumbnail="cocktail.strDrinkThumb" :instructions="cocktail.strInstructions" />
    </div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';
import Cocktail from '../components/Cocktail.vue';

export default {
  components: { MainHeader, Cocktail },
    data() {
        return {
            cocktail: {}
        }
    },
    async created() {
        try {
            const cocktail = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            const result = await cocktail.json();
            console.log(result);
            this.cocktail = result.drinks[0];
        } catch (e) {
            console.log(e);
        }
    },
    head() {
        return {
            title: "Random cocktail",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Best website to look up cocktails"
                }
            ]
        }
    }
}
</script>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background: linear-gradient(rgb(203, 53, 107), rgb(189, 63, 50));
        height: 100vh;
        width: 100vw;
    }
</style>