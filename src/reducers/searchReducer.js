export default function reducer(state={
  searchFieldSelected: false,
  searchFieldText: ""
},
action) {

  switch (action.type) {
    case "SEARCH_FIELD_SELECTED": {
      return {...state, searchFieldSelected: true}
    }
    case "UPDATE_SEARCH_FIELD": {
      return {...state, searchFieldSelected: false, searchFieldText: action.payload}
      break;
    }
  }
  return state
}
