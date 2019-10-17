const initialState = {
    isLoading: false,
    hasToken: false,
    error: "",
    user: {}
};

export const globalStore = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};