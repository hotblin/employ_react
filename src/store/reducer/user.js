const token = 'fsffsdfsfsfs';
const info = {
  id: "44324234423423",
  username: "rrewrwerewrw",
  time: "today",
  ipaddress: "424242",
  another: 'info'
}
const initState = {
  token,
  info
}
export default (state = initState, actions) => {
  switch (actions.type) {
    case 'update_user':
      const updateUserInfo = actions.info;
      return {
        token: actions.token,
        info: {
          ...state.info,
          ...updateUserInfo
        }
      }
      // break;
    case 'clear_user':
      break;

    default:
      return state;
  }
}