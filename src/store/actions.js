import axios from 'axios';

async function getUsers({ commit }) {
    try {
        commit('SET_LOADING_STATUS', true);

        const resp = await axios.get("https://api.github.com/users?per_page=16");
        if(resp.status == 200 && resp.data && resp.data.length) {
            commit('SET_USER_LIST', resp.data);
        } else {
            commit('SET_USER_LIST', []);
        }
        commit('SET_LOADING_STATUS', false);
    } catch (error) {
        console.log(error);
        commit('SET_LOADING_STATUS', false);
    }
}

async function getUserRepositoryDetails({ commit }, payload) {
    try {
        commit('SET_LOADING_STATUS', true);
        const username = payload;
        const userDetails = await axios.get(`https://api.github.com/users/${username}`);
        const repoDetails = await axios.get(`https://api.github.com/users/${username}/repos`);
        
        if(repoDetails.status == 200 && userDetails.status == 200 ) {
            commit('SET_REPOSITORY_OWNER', userDetails.data);
            commit('SET_USER_REPOSITORY', repoDetails.data);  
        }
        commit('SET_LOADING_STATUS', false);
    } catch (error) {
        console.log(error);
        commit('SET_LOADING_STATUS', false);
    }
}

export default {
    getUsers,
    getUserRepositoryDetails
}