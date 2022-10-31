function SET_USER_LIST(state, data) {
    state.users = data;
}

function SET_REPOSITORY_OWNER(state, data) {
    state.repositoryDetails.owner = {
        login: data.login,
        avatar_url: data.avatar_url
    }
}

function SET_USER_REPOSITORY(state, data) {
    state.repositoryDetails.repo_list = data;
}

function SET_LOADING_STATUS(state, newLoadingStatus) {
    state.loadingStatus = newLoadingStatus;
}

export default {
    SET_USER_LIST,
    SET_REPOSITORY_OWNER,
    SET_USER_REPOSITORY,
    SET_LOADING_STATUS
}