<template>
  <div class="cocktail">
      <div class="name-desc">
        <h2>{{name}}</h2>
        <p>{{instructions}}</p>
      </div>
      <img :src="thumbnail" alt="">
  </div>
</template>

<script>
export default {
    name: "Cocktail",
    props: ["name", "thumbnail", "instructions"]
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

    .cocktail {
        font-family: 'Raleway', sans-serif;
        display: flex;
        justify-content: space-evenly;
    }

    h2 {
        font-family: 'Kaushan Script', cursive;
        font-size: 8vw;
    }

    p {
        margin-top: 25px;
        margin-left: 20px;
    }

    .name-desc {
        margin: 0 50px;
        margin-top: 30px;
    }
    
    img {
        max-width: 33%;
        margin: 0 50px;
        margin-top: 30px;
    }
</style>