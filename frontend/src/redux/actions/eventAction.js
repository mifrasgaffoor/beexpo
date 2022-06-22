import axios from "axios";

export const getallevents = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/event/getallevents");
    dispatch({ type: "GET_ALL_EVENTS", payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
