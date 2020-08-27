export const getUsers = (state) => {
    return state.usersPage.users;
};
export const getTotalCount = (state) => {
    return state.usersPage.totalCount;
};
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};
export const getIsFollowing = (state) => {
    return state.usersPage.isFollowing;
};