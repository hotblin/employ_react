const companyInfo = {
  id: '432423423',
  name: "八度",
  buildTim: "创建时间"
}


export default (state = companyInfo, actions) => {
  switch (actions.type) {
    case 'get_company_info':
      const value = actions.value || {};
      return {
        ...state,
        ...value
      }
    default:
      return state
  }
}