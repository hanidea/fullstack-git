<template>
    <section class="main">
        <p>我来了{{name}}</p>
        <img src="../img/hn-architecture.png" alt="">
    </section>
</template>

<script>
export default {
    data () {
        return {
            name:"vue2 + webpack4"
        }
    }
}
</script>

<style>
.main>p{
    color:blue;
}
</style>