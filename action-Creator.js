import { GET_CHOCOLATES, GET_CHOCOLATES_SUCCESS, GET_CHOCOLATES_FAILURE,
    GET_BRANDS, GET_BRANDS_SUCCESS, GET_BRANDS_FAILURE, GET_BRANDS_DETAILS,
    GET_BRANDS_DETAILS_SUCCESS, GET_BRANDS_DETAILS_FAILURE, GET_CHOCOLATES_DETAILS, GET_CHOCOLATES_DETAILS_SUCCESS, GET_CHOCOLATES_DETAILS_FAILURE, GET_LOGIN, GET_LOGIN_SUCCESS, GET_LOGIN_FAILURE, GET_SIGNUP, GET_SIGNUP_SUCCESS, GET_SIGNUP_FAILURE, CHANGE_INPUT, SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE } from "./action-Type";

export function getChocolates(){
    return { type: GET_CHOCOLATES };
}

export function getChocolatesSuccess(chocolates){
    return { type: GET_CHOCOLATES_SUCCESS, chocolates };
}

export function getChocolatesFailure(error){
    return { type: GET_CHOCOLATES_FAILURE, error };
}

//Chocolates details
// export function getChocolatesDetails(id){
//     return { type : GET_CHOCOLATES_DETAILS, id };
// }

// export function getChocolatesDetailsSuccess(chocolatesDetails){
//     return { type: GET_CHOCOLATES_DETAILS_SUCCESS, chocolatesDetails };
// }

// export function getChocolatesDetailsFailure(error){
//     return { type: GET_CHOCOLATES_DETAILS_FAILURE, error };
// }

// brands
export function getBrands(){
    return { type: GET_BRANDS };
}

export function getBrandsSuccess(brands){
    return { type: GET_BRANDS_SUCCESS, brands };
}

export function getBrandsFailure(error){
    return { type: GET_BRANDS_FAILURE, error };
}

//brands details
export function getBrandsDetails(id){
    return { type : GET_BRANDS_DETAILS, id };
}

export function getBrandsDetailsSuccess(brandsDetails){
    return { type: GET_BRANDS_DETAILS_SUCCESS, brandsDetails };
}

export function getBrandsDetailsFailure(error){
    return { type: GET_BRANDS_DETAILS_FAILURE, error };
}

//login
export function getLogin(body){
    return { type: GET_LOGIN, body};
}

export function getLoginSuccess(user){
    return { type: GET_LOGIN_SUCCESS, user};
}

export function getLoginFailure(error){
    return { type: GET_LOGIN_FAILURE, error};
}

//signup
export function getSignup(body){
    return { type:GET_SIGNUP, body};
}

export function getSignupSuccess(users){
    return { type: GET_SIGNUP_SUCCESS, users}
}

export function getSignupFailure(error){
    return { type: GET_SIGNUP_FAILURE, error};
}

//
export function changeInput(fieldName, fieldValue){
    return { type : CHANGE_INPUT, fieldName, fieldValue};
}

export function search(){
    return { type: SEARCH};
}

export function searchSuccess(value){
    return { type: SEARCH_SUCCESS, value};
}

export function searchFailure(error){
    return { type: SEARCH_FAILURE, error};
}