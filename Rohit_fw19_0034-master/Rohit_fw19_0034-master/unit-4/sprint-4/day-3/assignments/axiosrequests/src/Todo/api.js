import axios from "axios";

export function getTodos(params = {}) {
  return axios.get("https://json-server-mocker-masai.herokuapp.com/cities", {
    params: {
      _page: params.page,
      _limit: params.limit,
      _sort: params.sort,
      _order: params.order
    }
  });
}

export function addTodosCities(data = {}) {
  return axios.post("https://json-server-mocker-masai.herokuapp.com/cities", {
    name: data.name,
    population: data.population,
    country: data.country
  });
}

export function deleteTodos(id) {
  return axios({
    baseURL: "https://json-server-mocker-masai.herokuapp.com/cities",
    url: `/${id}`,
    method: "DELETE"
  });
}
