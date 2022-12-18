export const getCities = ({ sortByPopulation, page = 1, limit = 10 }) => {
  return fetch(
    `https://json-server-mocker-masai.herokuapp.com/cities?_sort=population&_order=${sortByPopulation}&_page=${page}&_limit=${limit}`
  ).then((res) => res.json());
};

export const getCityById = (id) => {
  return fetch(
    `https://json-server-mocker-masai.herokuapp.com/cities/${id}`
  ).then((res) => res.json());
};
