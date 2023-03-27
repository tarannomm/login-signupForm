import { toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export const notify=(type,text)=>{
   if(type==="success"){
    toast.success(text)
   }
   else if (type==="error"){
    toast.error(text)
   }
}