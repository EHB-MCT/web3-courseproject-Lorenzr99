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
    transition: 'home',
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
    .home-enter-active, .home-leave-active { transition: transform 1s; }
    .home-enter, .home-leave-active { transform: translateY(-100vh); }
</style>