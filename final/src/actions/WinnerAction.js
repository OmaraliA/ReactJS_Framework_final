
import * as actionTypes from '../constants/ActionTypes';
import * as WinnerList from '../api/WinnerList';

export const getWinners = () => (dispatch, getState) => {

  dispatch({
    type: actionTypes.ACTION_GET_WINNERS_STARTED
  })

  WinnerList.getWinners().then(
      response => {
        response
          .text()
          .then(
            value => {
              const responseObject = JSON.parse(value);
              console.log(responseObject);
              dispatch({
                type: actionTypes.ACTION_GET_WINNERS_SUCCESS,
                items: responseObject,
              });
            }
          );
      }
    )

}
