<template lang="html">
    <div class="footer">
        <div class="footer-wrapper">
            <a href="https://github.com/" target="_blank"><img :src="logo" alt="logo" /></a>
            <div class="footer-text">© All rights reserved, {{currentYear}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app-footer',
    data() {
        return {
            logo: require("@/assets/logo.svg"),
            currentYear: new Date().getFullYear()
        }
    }
};
</script>

<style lang="scss" scoped>
.footer {
    height: 120px;
    background: #24292F;
    box-shadow: 0px -12px 36px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;

    .footer-wrapper {
        text-align: center;
    }

    .footer-text {
        font-weight: 400;
        font-size: 10px;
        line-height: 12px;
        color: #FFFFFF;
        margin-top: 10px;
    }
}
</style>
