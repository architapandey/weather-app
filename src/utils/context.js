import { useReducer, createContext } from "react";

const initialState = {
  loading: false,
  weatherData: null,
  error: null,
  isCelcius: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload, weatherData: null };

    case "SET_WEATHER_DATA":
      return { ...state, weatherData: action.payload, error: null };

    case "SET_TEMPERATURE_IDENTIFIER":
      return { ...state, isCelcius: action.payload };

    default:
      return { ...state };
  }
};

const AppContext = createContext({
  state: initialState,
  dispatch: () => {},
});

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, AppContextProvider };
