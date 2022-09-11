import * as api from '../api/index.js';



export const updateGames = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, user);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};