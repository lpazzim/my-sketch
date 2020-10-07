import axios from '../helpers/AxiosHelper';
import config from '../config';

const baseUrl = config.baseUrl.url;
class SpaceX {
  static getCompanyInfo() {
    return axios.get(`${baseUrl}/company`, {})
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }


  static getRockets() {
    return axios.get(`${baseUrl}/rockets`, {})
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
}

export default SpaceX;