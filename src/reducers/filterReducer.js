

function filtersExpandCollapse(state={
  filters: 'filters-closed',
  productTypeButtonState: [false, false, false, false, false] }, action) {

  switch(action.type) {
    case 'FLYRODS':
      return Object.assign(
        {}, state, {
          productTypeButtonState:
          [!state.productTypeButtonState[0], false, false, false, false]
        });
    case 'FLYREELS':
      return Object.assign(
        {}, state, {
          productTypeButtonState:
          [false, !state.productTypeButtonState[1], false, false, false]
        });
    case 'COLLAPSE':
      return Object.assign({}, state, { filters: 'filters-closed' });
    default:
      return state
  }
}
