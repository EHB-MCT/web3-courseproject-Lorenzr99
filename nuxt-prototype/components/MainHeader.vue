<template>
    <header>
        <h1>Cocktails</h1>
        <ul>
            <li><nuxt-link to="/">Search</nuxt-link></li>
            <li class="middle"></li>
            <li><nuxt-link to="/random">Random</nuxt-link></li>
        </ul>
    </header>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

    header {
        display: flex;
        font-family: 'Kaushan Script', cursive;
    }

    h1 {
        margin-top: 5vh;
        margin-left: 4vw;
        color: white;
        font-size: 5.5vw;
        animation: shadow 5s ease infinite alternate;
        transform: rotate(-10deg);
    }

    @keyframes shadow {
        from { text-shadow: 0px 0px 0px black; }
        to { text-shadow: 10px 10px 0px black; }
    }

    ul {
        width: 25vw;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: absolute;
        top: 25px;
        right: 50px;
    }

    li {
        margin: auto;
        text-align: center;
        list-style-type: none;
        color: white;
        transition: .3s ease;
        cursor: pointer;
        font-size: 2.5vw;
        transition: .8s ease;
    }

    li:hover {
        text-shadow: 5px 5px 0px black;
    }

    .middle {
        width: 2.5vw;
        height: 2.5vw;
        background-image: url('../static/palm-tree.png');
        background-size: contain;
        cursor: auto;
    }

    a {
        color: white;
        text-decoration: none;
    }
</style>