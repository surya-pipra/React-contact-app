import homeTypes from "../types/home";
export const initialState = {
  logindata: [],
  inventoryTableData: [],
  inventoryDeviceByAsic: [],
  apiError: ''
};

function home(state = initialState, action) {
  switch (action.type) {
    case homeTypes.LOGIN_USER:
      return { ...state, isLoading: true };
    case homeTypes.LOGIN_USER_SUCCESS:
      return { ...state, logindata: action.payload }
    // case homeTypes.HEALTH_MODELS_FILTER:
    //   return { ...state, healthModelsFilter: action.payload }
    default:
      return { ...state };
  }
}
export default home;
