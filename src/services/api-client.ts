import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'c86dde6141594e439bb800590fa17c06'
  }
});