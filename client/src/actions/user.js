import * as api from '../api/index.js';



export const updateGames = (id, user) => async (dispatch) => {
  try {
    const { data } = await api.updateGames(id, user);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

