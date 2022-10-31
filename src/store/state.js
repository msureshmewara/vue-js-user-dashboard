export default function() {
    return {
        loadingStatus: false,
        users: [],
        repositoryDetails: {
            owner: {
                login: '',
                avatar_url: ''
            },
            repo_list: []
        }
    }
}