<template lang="html">
    <div class="userlist-container">
        <div class="title-text-lg">Top Users</div>
        <div class="wrapper" :class="{'loading': loadingStatus}">
            <template v-if="loadingStatus">
                <div class="loader"><img :src="loader" alt="loader" /></div>
            </template>
            <template v-else-if="userList.length">
                <template v-for="user in userList">
                    <UserListItem :key="user.id" :user="user" />
                </template>
            </template>
            <template v-else>
                <div class="user-not-found">Users not found</div>
            </template>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import UserListItem from "./user-listitem.vue";

export default {
    name: "userlist",
    inject: ['$eventBus'],
    components: {
        UserListItem
    },
    data() {
        return {
            userList: []
        }
    },
    async mounted() {
        await this.getUsers();
        this.userList = this.users;
        this.$eventBus.$on("event-search-text", (text) => {
            text = (text && text.toLowerCase()) || text; 
            this.userList = this.users.filter(user => user.login.includes(text));
        })
    },
    computed: {
        ...mapGetters(["users", "loadingStatus"]),
        loader() {
            return require("@/assets/loader.gif");
        }
    },
    methods: {
        ...mapActions(["getUsers"])
    },
    beforeDestroy() {
        this.$eventBus.$off("event-search-text", null);
    }
};
</script>

<style lang="scss" scoped>
.userlist-container {
    padding: 3rem 3rem 4rem;
    min-height: 600px;
    .title-text-lg {
        font-weight: 800;
        font-size: 48px;
        line-height: 56px;
        text-align: center;
        padding-bottom: 4rem;
    }
    .wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 3rem;
        &.loading {
            justify-content: center;
        }
        
        .user-listItem {
            flex: 1 0 21%;
        }

        .user-not-found {
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
            text-align: center;
            width: 100%;
        }
    }

    @media screen and (max-width: 640px) {
        padding: 2rem 0.5rem 4rem;
        .title-text-lg {
            padding-bottom: 2rem;
            font-size: 40px;
            line-height: 50px;
        }
        .wrapper {
            gap: 2rem;
        }
    }
}
</style>
