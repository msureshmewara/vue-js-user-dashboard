<template lang="html">
    <div class="search">
        <input type="text" v-model="searchText" @input="handleChange" />
    </div>
</template>

<script>
export default {
    name: 'search',
    inject: ['$eventBus'],
    data() {
        return {
            searchText: ''
        }
    },
    methods: {
        handleChange(event) {
            this.$eventBus.$emit("event-search-text", event.target.value);
        }
    }
};
</script>

<style lang="scss" scoped>
.search {
    input {
        display: block;
        width: 230px;
        padding: 6px 8px 6px 40px;
        background: #ffffff url("~@/assets/searchIcon.svg") no-repeat 15px center;
        background-size: 15px 15px;
        font-size: 16px;
        border: none;
        border-radius: 12px;
    }
}
</style>