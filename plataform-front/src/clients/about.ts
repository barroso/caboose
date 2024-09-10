import Axios from 'axios';

class ApiCaller {
  async getAbout() {
    Axios.get('http://localhost:3000/about.json').then(response => {
      console.log(response.data);
    });
  }
}

export default ApiCaller;
