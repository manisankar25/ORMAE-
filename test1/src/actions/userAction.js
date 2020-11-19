import * as types from './actiontypes';
import AllApiCalls from '../apicalls/AllApiCalls';


export function addUserSuccess(user) {
  return { type: types.ADD_USER_SUCCESS, user };

}
export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}
export function addProductSuccess(user) {
  return { type: types.ADD_PRODUCT_SUCCESS, user };

}
export function deleteProductSuccess(user) {
  return { type: types.DELETE_PRODUCT_SUCCESS, user };

}
export function getProductDetails(user) {
  return { type: types.GET_PRODUCT_DETAILS, user }
}

export function loaddata() {

  return function (dispatch) {
    return AllApiCalls.LoadData().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw (error);
    })
  }
}

export function addUser(user) {

  return function (dispatch, getState) {
    return AllApiCalls.saveUser(user).then(user => {
    console.log("i am saved")
      //  dispatch(addProductSuccess(user));
    }).catch(error => {
      throw (error);
    });
  };
}

export function addProduct(user) {

  return function (dispatch, getState) {
    return AllApiCalls.addProduct(user).then(user => {
      dispatch(addUserSuccess(user));
    }).catch(error => {
      throw (error);
    });
  };
}

export function deleteProduct(id) {
  return function (dispatch, getState) {
    return AllApiCalls.deleteProduct(id).then(user => {
      dispatch(deleteProductSuccess(user));
    }).catch(error => {
      throw (error);
    })
  }

}
export function getDetails(id) {
  return function (dispatch, getState) {
    return AllApiCalls.getData(id).then(user => {
   
      console.log("in action",user);
      dispatch(getProductDetails(user));
    }).catch(error => {
      throw (error);
    })
  }
}


//   export function search(user){
//       return function(dispatch,getState){
//           debugger;
//           return AllApiCalls.LoadData().then(totaldata=>{
//               console.log(totaldata)
//           })

//       }

//   }