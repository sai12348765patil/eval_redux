import { SORT_A_B , SORT_B_A , SORT_DATE_ASC , SORT_DATE_DESC , SORT_QUL_ASC , SORT_QUL_DESC } from "./actiontypes";



const init = {
    data  : []
}

export const datareducer = (store=init , {type , payload})=>{
  
    if(type===SORT_A_B){
        data=data.sort((a,b)=>{
            return  a-b;
        })
    }

    if(type===SORT_B_A){
        data=data.sort((a,b)=>{
            return a-b;
        })
    }

}