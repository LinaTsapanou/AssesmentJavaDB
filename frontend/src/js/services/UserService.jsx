import axios from "axios";

export class UserService {
  url = "http://localhost:8083/LinaTsapanouTable";

  getAll() {
    return axios.get(this.url).then((response) => response.data);
  }
  getById(id) {
    return axios.get(`${this.url / id}`).then((response) => response.data);
  }
  save(param) {
    return axios.post(this.url, param).then((response) => response.data);
  }
}
