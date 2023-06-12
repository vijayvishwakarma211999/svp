import Axios from "axios";
import { METHODS, SERVICE_ROUTES } from "../Constant/seviceConstant";

export function HomeServices(data) {
  const { filter, page } = data;
  return new Promise((resolve, reject) => {
    let config = {
      url: `${SERVICE_ROUTES.HOME}?offset=${page}&limit=10&categoryId=${filter}`,

      method: METHODS.GET,
    };
    Axios.request(config)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

//  categories

export function CategoryService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      // url:`${SERVICE_ROUTES.PROFILE}`,
      url: SERVICE_ROUTES.CATEGORY,
      method: METHODS.GET,
    };
    Axios.request(config)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

// Add categories
export function AddCategoryService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.ADD_CATEGORY,
      method: METHODS.POST,
      data,
    };
    Axios.request(config)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

// Add Product
export function AddProductService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.ADD_PRODUCT,
      method: METHODS.POST,
      data,
    };
    Axios.request(config)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}
