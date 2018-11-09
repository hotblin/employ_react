export const getCompanyInfo = (value) => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: 'get_company_info',
      value
    })
  }, 1000);
}