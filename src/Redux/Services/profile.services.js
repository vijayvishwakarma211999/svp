import  Axios  from "axios";
import { METHODS, SERVICE_ROUTES } from "../Constant/seviceConstant"

export function ProfileService(data){
    return new Promise((resolve,reject)=>{
        let config ={
            // url:`${SERVICE_ROUTES.PROFILE}`,
            url:SERVICE_ROUTES.PROFILE,
            method:METHODS.GET,
            data,
        };
        Axios.request(config)
        .then((res)=>{

            // console.log(res,"data_________________-")
            return  resolve(res);
            
        })
        .catch((err)=>{
            return reject(err);
        });
    });
}


