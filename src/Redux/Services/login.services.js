import { Axios } from "axios";
import { METHODS, SERVICE_ROUTES } from "../Constant/seviceConstant"

export function UserLoginService(data){
    return new Promise((resolve,reject)=>{
        let config ={
            url:SERVICE_ROUTES.USER_LOGIN,
            method:METHODS.POST,
            data,
        };
        Axios.request(config)
        .then((response)=>{
            console.log(response,"_________")
            return resolve(response);
        })
        .catch((error)=>{
            return reject(error);
        });
    });
}