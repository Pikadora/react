import * as RightsTypes from '../../components/rights/types';

export interface RightsInitialStateInterface {
    users: RightsTypes.RightsResponseInterface[];
    isLoadingRights:boolean;
    isModalVisible:boolean;
    errorData: null;
}

export interface AccordionInitialStateInterface {
    isActiveKey: boolean,
    data:{
        isLoginTrue:boolean;
        user:RightsTypes.RightsInfoInterface,
    }
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
        user:RightsTypes.RightsInfoInterface,
    };
    type:'UPDATE_USER';
}

export interface UpdateUsersSuccessInterface{
    payload:{
        users:RightsTypes.RightsResponseInterface[];
    };
    type:'UPDATE_MOCHUP_USERS';
}

export interface GetUsersSuccessInterface{
    payload:{
        users:RightsTypes.RightsResponseInterface[];
    };
    type:'GET_MOCHUP_USERS';
}

export interface UpdateActiveKeyAccordionInterface {
    payload:{
        isActiveKey: boolean;
    }
    type: 'UPDATE_ACTIVE_KEY_ACCORDION';
}
