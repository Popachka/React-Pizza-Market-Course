export const categoriesActionType = {
    CHANGE_CATEGORIES: "CATEGORIES.CHANGE_CATEGORIES",
    TYPE_CATEGORIES: "CATEGORIES.TYPE_CATEGORIES",
    INDEX_CATEGORIES: "CATEGORIES.INDEX_CATEGORIES"
}

export const categoriesAction = {
    changeCategories: (payload) => ({type: categoriesActionType.CHANGE_CATEGORIES, payload}),
    typeCategories: (payload) => ({type: categoriesActionType.TYPE_CATEGORIES, payload}),
    indexCategories: (payload) => ({type: categoriesActionType.INDEX_CATEGORIES, payload}) 
}