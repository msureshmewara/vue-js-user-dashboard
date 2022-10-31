<template>
    <div id="app">
        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
export default {
    name: "app",
    components: {
        Header,
        Footer
    }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import "./reset.scss";
body {
    font-family:'Roboto';
    color: #000000;

    @media screen and (max-width: 640px) {
        .header {
            padding: 0 10px !important;
            .header-wrapper {
                a {
                    gap: 10px !important;
                }
            }
            .search input {
                width: 120px !important;
            }
        }
    }
}
</style>
