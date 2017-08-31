

export default function reducer(state={
  searchFieldSelected: false,
  searchFieldText: ""
},
action) {

  switch (action.type) {
    case "SEARCH_FIELD_SELECTED": {
      return {...state, searchFieldSelected: true}
    }
    case "SEARCH_FIELD_SUBMITTED": {
      return {
        ...state,
        searchFieldSelected: false,
        searchFieldText: action.payload
      }
    }
  }
  return state
}
