<template lang="html">
    <div class="user-details">
        <template v-if="loadingStatus">
            <div class="loader"><img :src="loader" alt="loader" /></div>
        </template>
        <template v-else-if="repoList && repoList.length">
            <a class="back-btn" href="/"><img :src="backIcon" alt="back_icon"/></a>
            <div class="user-details-wrapper">
                <div class="user-avatar" :class="{'empty': !avatar}">
                    <img :src="avatar? avatar : emptyAvatar" alt="user_avatar" />
                </div>
                <div class="username">{{userLogname}}</div>
                <div class="repo-list d-flex">
                    <div class="repo-list-item d-flex" v-for="repo in filterRepos" :key="repo.id">
                        <div class="left-item">
                            <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
                        </div>
                        <div class="right-item d-flex">
                            <div class="watcher"><img :src="watcherIcon" alt="watchers"/>{{ repo.watchers_count }}</div>
                            <div class="star"><img :src="starIcon" alt="stars"/>{{ repo.stargazers_count }}</div>
                        </div>
                    </div>
                </div>
                <a class="expand-btn" v-if="repoList && repoList.length > initialRepoCount" @click="viewMore">
                    <span v-text="expand?'View All' : 'View Less'"></span>
                </a>
            </div>
        </template>
        <template v-else>
            <div>User data not found</div>
        </template>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "userdetail",
    inject: ['$eventBus'],
    data() {
        return {
            expand: true,
            filterRepos: null,
            initialRepoCount: 5
        }
    },
    async mounted() {
        const username = this.$route.params.username;
        await this.getUserRepositoryDetails(username);
        this.filterRepos = this.repoList && this.repoList.slice(0, this.initialRepoCount);
    },
    computed: {
        ...mapGetters(["repositories", "loadingStatus"]),
        avatar() {
            return this.repositories && this.repositories.owner.avatar_url;
        },
        userLogname() {
            return this.repositories && this.repositories.owner.login;
        },
        repoList() {
            return this.repositories && this.repositories.repo_list;
        },
        starIcon() {
            return require("@/assets/star.svg");
        },
        watcherIcon() {
            return require("@/assets/watcher.svg");
        },
        backIcon() {
            return require("@/assets/back.svg");
        },
        emptyAvatar() {
            return require("@/assets/duck.svg");
        },
        loader() {
            return require("@/assets/loader.gif");
        }
    },
    methods: {
        ...mapActions(["getUserRepositoryDetails"]),
        viewMore() {
            this.expand = !this.expand;
            if(this.expand) {
                this.filterRepos = this.repoList.slice(0, this.initialRepoCount);
            } else {
                this.filterRepos = this.repoList;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.user-details {
    padding: 3rem 3rem 7rem;
    display: flex;
    justify-content: center;
    position: relative;
    min-height: 600px;
    .back-btn {
        position: absolute;
        left: 3rem;
        top: 2.5rem;
    }
    .expand-btn {
        margin-top: 1.5rem;
        position: absolute;
        color: #54A3FF;
        cursor: pointer;
    }
    .d-flex {
        display: flex;
    }
    .user-details-wrapper {
        width: 700px;
        .user-avatar {
            height: 300px;
            width: 300px;
            margin: auto;
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
                    height: 240px;
                    width: 240px;
                }
            }
        }
        .username {
            font-weight: 800;
            font-size: 40px;
            line-height: 47px;
            text-align: center;
            text-transform: capitalize;
            padding: 1.5rem 0;
        }
        .repo-list {
            flex-direction: column;
            .repo-list-item {
                justify-content: space-between;
                font-size: 20px;
                line-height: 23px;
                font-weight: 400;
                .right-item {
                    align-items: center;
                    width: 240px;
                    justify-content: space-between;
                    >div img {
                        margin-right: 8px;
                    }
                    .star {
                        width: 120px;
                        float: left;
                    }
                }
                .left-item {
                    a {
                        color: #000000;
                        text-decoration: none;
                        &:hover {
                            color: #54A3FF;
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 640px) {
        padding: 3rem 0px 7rem;
        .back-btn {
            top: 16px;
            left: 10px;
        }
        .user-details-wrapper {
            width: 360px;
            .user-avatar {
                height: 250px;
                width: 250px;
                &.empty {
                    img {
                        height: 200px;
                        width: 200px;
                    }
                }
            }
            .repo-list .repo-list-item {
                font-size: 16px;
                line-height: 20px;
                .left-item {
                    width: 160px;
                    word-wrap: break-word;
                }
                .right-item {
                    width: 170px !important;
                    .watcher, .star {
                        width: 80px !important;
                    }
                }
            }
            .username {
                font-size: 35px;
                line-height: 40px;
            }
        }
    }
}
</style>
