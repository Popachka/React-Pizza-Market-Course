export const sortActionType = {
    TYPE_SORT: 'SORT.TYPE_SORT'
}

export const setSortBy = ({ type, order }) => ({
    type: sortActionType.TYPE_SORT,
    payload: { type, order },
  });