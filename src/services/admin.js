
import axios from 'axios'
import { config } from './config';


export async function register(firstName,lastName,email,password){
    const body = {firstName,lastName,email,password};

    try{
        const responce =  await axios.post(`${config.serverURL}/admin/register`,body)


       

        return responce.data;

    }
    catch(ex){
        console.log('exception: ',ex);
    }


    return null
  

   

}

export async function login(email,password){
    const body = {email,password};

    try{
        const responce = await axios.post(`${config.serverURL}/admin/login`,body) 
        return responce.data;

    }
     catch(ex){
        console.log('exceptionL: ',ex);
     }
}