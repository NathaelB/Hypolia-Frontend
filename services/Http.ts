import axios, {AxiosInstance} from "axios";

export default class Http {
  public http: AxiosInstance

  constructor() {
    this.http = axios.create({
      baseURL: 'http://localhost:3333/v1',
      headers: { 'Content-Type': 'application/json'},
      withCredentials: true
    })
  }
}