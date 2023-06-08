import  Axios  from "axios";
import { METHODS, SERVICE_ROUTES } from "../Constant/seviceConstant"

export function HomeServices(data){
return new Promise((resolve ,reject)=>{
    let config={
        url:SERVICE_ROUTES.HOME,
        method:METHODS.GET,
        data,
    };
    Axios.request(config)
    .then((res)=>{
       return resolve(res);
    })
    .catch((err)=>{
       return reject(err);
    });
});
};