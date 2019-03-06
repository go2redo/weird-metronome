
const initialState = {
  bmp: 100,
  beat: 3,
  count: 0,
  run: false
};

function reducer( state = initialState, action ) {
  switch ( action.type ) {
    case 'CHANGE_FIELD':
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }
    default:
      return state;
  }
}

export default reducer;