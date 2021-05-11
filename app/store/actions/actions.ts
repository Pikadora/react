import { Dispatch } from 'redux';
import * as api from '../../api';
import * as Types from './types';

export const getUsersFromApi = ():any => {
    return async (dispatch:Dispatch, getState: () => any) => {
        try {
            const state = getState();
            dispatch(loading(true));
            const response: any = await api.getUsers();
            console.log(response);
            if (response !== undefined && response !== null) {
                if (response.users.Success){
                    dispatch(getData(state));
                    console.log(state);
                    dispatch(updateMochUpUsers(response.users.Payload));
                    dispatch(loading(false));
                } else {
                    dispatch(getError({type: "modal", message: response.users.Message}));
                    dispatch(loading(false));
                }
            } else {
                dispatch(getError({type: "modal", message: "Неизвестная ошибка"}));
                dispatch(loading(false));
            }
        } catch (error){
            dispatch(getError({type: "modal", message: error.message}));
            dispatch(loading(false));
        }
    } 
}

export const loading = (data: boolean) => {
    return {
        payload: { data },
        type: 'LOADING',
    };
}

export const getModalVisible= () => {
    return {
        type: 'GET_MODAL_VISIBLE',
    };
}

export const getError = (data: {type: "modal", message: string | null}) => {
    return {
        payload: { data },
        type: 'GET_ERROR',
    };
}

export const getData = (data:any): Types.GetDataSuccessInterface => {
    return{
        payload:{data},
        type: 'GET_MOCKUP_DATA',
    }
}

export const updateUser = (item: boolean, newUser:any): Types.UpdateUserSuccessInterface => {
    return{
        payload:{
            isLoginTrue: item,
            user:  newUser,
        },
        type: 'UPDATE_USER',
    }
}

export const updateMochUpUsers = (users:any): Types.UpdateUsersSuccessInterface => {
    return{
        payload: { 
            users:users,
        },
        type: 'UPDATE_MOCHUP_USERS',
    }
}

export const getMochUpUsers = (users:any): Types.GetUsersSuccessInterface => {
    return{
        payload: { 
            users:users,
        },
        type: 'GET_MOCHUP_USERS',
    }
}

export const updateActiveKeyAccordion = (key:boolean):Types.UpdateActiveKeyAccordionInterface => {
    return{
        payload:{
            isActiveKey: key,
        },
        type: 'UPDATE_ACTIVE_KEY_ACCORDION',
    }
}
