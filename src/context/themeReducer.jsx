const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE": {
      return { ...state,darkMode: !state.darkMode };
    }
    case "NAVSHOW": {
      return {...state, show: !state.show };
    }

    case "ENTOAR" :{
      return {...state,convert : !state.convert}
    }
    default:
      return state;
  }
};


export default ThemeReducer;