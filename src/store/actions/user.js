export const update_user = (token, info) => {
  return {
    type: "update_user",
    token,
    info
  }
}

export const clear_user = () => {
  return {
    type: "clear_user"
  }
}