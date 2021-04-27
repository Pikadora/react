import * as Types from '../../components/rights/types'

export interface RightsInitialStateInterface {
    users: Types.RightsResponseInterface[];
    isLoginTrue:boolean;
    user:Types.RightsInfoInterface,
    isLoadingRights:boolean;
    errorData: null;
}

export interface GetDataSuccessInterface{
    payload:{
        data:RightsInitialStateInterface,
    };
    type:'GET_MOCKUP_DATA';
}

export interface UpdateUserSuccessInterface{
    payload:{
        isLoginTrue:boolean;
        user:Types.RightsInfoInterface,
    };
    type:'UPDATE_USER';
}

export interface UpdateUsersSuccessInterface{
    payload:{
        users:Types.RightsResponseInterface[];
    };
    type:'UPDATE_MOCHUP_USERS';
}

export interface GetUsersSuccessInterface{
    payload:{
        users:Types.RightsResponseInterface[];
    };
    type:'GET_MOCHUP_USERS';
}
