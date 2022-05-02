import { type } from "@testing-library/user-event/dist/type";
import { useReducer,useEffect } from "react";
import { DATA_FETCH_FAILURE, DATA_FETCH_START, DATA_FETCH_SUCCESS } from "./types"


const initialState = {
    loading: "",
    error: "",
    data: {}
  };

  function appReducer(state, action) {
    switch (action.type) {
      case "DATA_FETCH_START":
        return { ...state, loading: "yes" };
      case "DATA_FETCH_FAILURE":
        return { ...state, loading: "", error: action.payload };
      case "DATA_FETCH_SUCCESS":
        return { ...state, loading: "", data: action.payload };
      default:
        return state;
    }
  }
  


export default function useFetch(endpoint) {

    const [data, dispatch] = useReducer(appReducer, initialState);

    useEffect(() => {
        dispatch({ type: DATA_FETCH_START })

        fetch(endpoint)
            .then(res => {
                if (!res.ok) throw Error(res.statusText);

                return res.json();
            })
            .then(json => {
                dispatch({ type: DATA_FETCH_SUCCESS, payload: json })
            })
            .catch(error => {
                dispatch({ type: DATA_FETCH_FAILURE, payload: error.message })
            })
    }, [])

    return data;

}