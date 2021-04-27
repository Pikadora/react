import * as Types from '../actions/types';

export const initialRightsState: Types.RightsInitialStateInterface = { 
    users:[],
    isLoginTrue: false,
    user:{
        login: '',
        name: '',
        securityGroupsFromProject: [],
        securityGroupsFromSharepoint: []
    },
    isLoadingRights: false,
    errorData: null
};

const Reducers = (state = initialRightsState, action: any) => {
    switch (action.type) {
        //загрузка
        case 'LOADING_CARDS': {
            return {
                ...state,
                isLoadingRights: action.payload.data,
            }
        };
        // получение инф-и
        case 'GET_MOCHUP_DATA': {
            return {
                ...state,
                data: action.payload,
                isLoadingRights: false,
                isLoginTrue: false,
            }
        };
        //обновить пользователей из базы
        case 'UPDATE_MOCHUP_USERS': {
            return {
                ...state,
                users:action.payload.users,
                isLoadingRights: false,
                isLoginTrue:false
            }
        };
        //получить пользователей из базы
        case 'GET_MOCHUP_USERS': {
            return {
                ...state,
                users:state.users,
            }
        };
        // изменить юзера
        case 'UPDATE_USER': {
            return {
                ...state,
                isLoginTrue: true,
                user:{
                    login: action.payload.user.login,
                    name: action.payload.user.name,
                    securityGroupsFromProject: action.payload.user.securityGroupsFromProject,
                    securityGroupsFromSharepoint: action.payload.user.securityGroupsFromSharepoint
                },
            }
        }
        //получить
        case 'GET_MOCHUP_USER': {
            return {
                user:state.user,
                isLoginTrue: state.isLoginTrue
            }
        }
        default:
            return state;
    }
};
export default Reducers;
