<template>
    <footer>
        <div class="container">
            <a class="footer-link" href="https://www.pgs-soft.com/pl/" target="noopener _blank">Powered by PGS</a>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/helpers/variables';

footer {
    background-color: $bg-dark;
    text-align: center;
    font-size: 1.5rem;
    padding: 1rem 0;

    a {
        color: lighten($text-color-light, 30%);
        padding: 2rem 0;
        border-top: 1px solid rgba($text-color-light, .6);
        display: inline-block;
        width: 320px;
        max-width: 100%;
        font-weight: 300;
        text-decoration: none;

        &:hover,
        &:active {
            color: lighten($text-color-light, 70%);
        }
    }
}
</style>


