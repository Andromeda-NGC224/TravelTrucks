export const selectTrucks = (state) => state.trucks.items;
export const selectHasMorePages = (state) => state.trucks.hasMore;
export const selectCurrentPage = (state) => state.trucks.currentPage;
export const selectStatus = (state) => state.trucks.status;
export const selectCurrentTruck = (state) => state.trucks.currentTruck;
export const selectFilter = (state) => state.filter;
export const selectFavorites = (state) => state.filter.favorites;
