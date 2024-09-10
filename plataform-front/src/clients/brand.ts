import Axios from 'axios';

class ApiCaller {
  async getBrands() {
    return Axios.get('http://localhost:3000/brands.json')
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log("Api call brands", error);
      return [];
    })
    .finally(function () {
      // always executed
    });
  }
}

export default ApiCaller;
