const initialState = {
  bmp: 120,
  beat: 4,
  run: false,
  count: 0
};

function reducer( state = initialState, action ) {
  switch ( action.type ) {
    case 'CHANGE_FIELD':
      return {
        ...state,
        [ action.payload.key ]: action.payload.value
      }
    default:
      return state;
  }
}

export default reducer;