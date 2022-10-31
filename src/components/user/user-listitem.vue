<template>
    <div class="user-listItem">
        <div class="user-avatar" :class="{'empty': !userAvatar}">
            <img :src="userAvatar ? userAvatar : emptyAvatar" alt="user_avatar" />
        </div>
        <a class="username" @click="redirectToUserDetail">{{user.login}}</a>
        <a class="user-gitlink" :href="user.html_url" target="_blank"><img :src="linkIcon" alt="link" />github</a>
    </div>
</template>

<script>
export default {
    name: "user-listitem",
    props: {
        user: {
            type: Object,
            require: true
        }
    },
    computed: {
        userAvatar() {
            return this.user && this.user.avatar_url;
        },
        emptyAvatar() {
            return require("@/assets/duck.svg");
        },
        linkIcon() {
            return require("@/assets/link.svg");
        }
    },
    methods: {
        redirectToUserDetail() {
            this.$router.push({name: 'UserDetail', params: { username: this.user.login }});
        }
    }
};
</script>

<style lang="scss" scoped>
.user-listItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .user-avatar {
        height: 140px;
        width: 140px;
        img {
            height: 100%;
            width: 100%;
            border-radius: 50%;
        }
        &.empty {
            background-color: #54A3FF;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                height: 100px;
                width: 100px;
            }
        }
    }
    .username {
        font-size: 20px;
        line-height: 24px;
        font-weight: 800;
        margin-top: 10px;
        margin-bottom: 5px;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
    .user-gitlink {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #54A3FF;
        display: flex;
        align-items: center;
        text-decoration: none;
        img {
            margin-right: 3px;
        }
    }
}
</style>