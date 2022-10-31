<template lang="html">
    <div class="header center-align">
        <div class="header-wrapper">
            <a href="/" class="center-align">
                <img :src="logo" alt="logo" />
                <span class="logo-text">Github Userboard</span>
            </a>
        </div>
        <div v-if="showSearch">
            <SearchBox />
        </div>
    </div>
</template>

<script>
import SearchBox from "@/components/common/search";
export default {
    name: 'app-header',
    components: {
        SearchBox
    },
    data() {
        return {
            logo: require("@/assets/logo.svg"),
        }
    },
    computed: {
        showSearch() {
            return !this.$route.params.username;
        }
    }
};
</script>

<style lang="scss" scoped>
.header {
    background-color: #24292F;
    box-shadow: 0px 12px 36px rgba(204, 204, 204, 0.25);
    height: 80px;
    padding: 0 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header-wrapper {
        gap: 16px;
        .logo-text {
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            letter-spacing: 0.25px;
        }
        >a {
            gap: 16px;
            text-decoration: none;
        }
    }
    .center-align {
        display: flex;
        align-items: center;
    }
}
</style>
