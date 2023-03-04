import axios from "axios";

export const Backend = process.env.REACT_APP_BACKEND;

export const Run = async()=>{
    await axios.get(Backend, {withCredentials: true, headers: {'Content-Type': 'application/json'} })
}


// export const Backend = "http://localhost:3001/";


