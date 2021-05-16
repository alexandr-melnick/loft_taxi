

export const sagas = function* saga() {
  yield takeLatest(ActionTypes.BOOKS.GET_BANKS, getAllBanks)

}
