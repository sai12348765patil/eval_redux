import { SORT_A_B , SORT_B_A , SORT_DATE_ASC , SORT_DATE_DESC , SORT_QUL_ASC , SORT_QUL_DESC } from "./actiontypes";


export const sort_a_b = (payload) =>{
 return {
     type:SORT_A_B,
     payload
 }
}
export const sort_b_a = (payload) =>{
    return {
        type:SORT_B_A,
        payload
    }
   }

   
   export const sort_date_asc = (payload) =>{
    return {
        type:SORT_DATE_ASC,
        payload
    }
   }

   
   export const sort_date_desc = (payload) =>{
    return {
        type:SORT_DATE_DESC,
        payload
    }
   }

   
   export const sort_qul_asc = (payload) =>{
    return {
        type:SORT_QUL_ASC,
        payload
    }
   }

   
   export const sort_qul_desc = (payload) =>{
    return {
        type:SORT_QUL_DESC,
        payload
    }
   }
   

