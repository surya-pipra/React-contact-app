import homeTypes from "../types/home";
export const initialState = {
  logindata: [],
  inventoryTableData: [],
  inventoryDeviceByAsic: [],
  apiError: '',
  sidebarInitialState: false,
};

function home(state = initialState, action) {
  switch (action.type) {
    case homeTypes.LOGIN_USER:
      return { ...state, isLoading: true };
    case homeTypes.LOGIN_USER_SUCCESS:
      return { ...state, logindata: action.payload }
    case homeTypes.SIDEBAR_ACTION:
      return { ...state, sidebarInitialState: action.payload }
    default:
      return { ...state };
  }
}
export default home;
