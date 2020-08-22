import request from '../../utils/HttpRequest'

const api = {
  postLogin(data) {
    return request({
      url: `${process.env.REACT_APP_API_BASEURL}login`,
      method: 'post',
      data: data
    })
  },
  postSignUp(data) {
    return request({
      url: `${process.env.REACT_APP_API_BASEURL}signup`,
      method: 'post',
      data
    })
  }
};

export default api
