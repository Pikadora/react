import * as Actions from '../actions/actions';


export const initialRightsState: Actions.RightsInitialStateInterface = { 
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
        // получение инф-и
        case 'GET_MOCHUP_DATA': {
            return {
                ...state,
                isLoadingRights: false,
                isLoginTrue: false,
            }
        };
        //получить пользователей из базы
        case 'GET_MOCHUP_USERS': {
            return {
                ...state,
                isLoadingRights: false,
                isLoginTrue:false
            }
        };
        // получить юзера
        case 'GET_MOCHUP_USER': {
            return {
                ...state,
                isLoginTrue: true,
                user:{
                    login: action.payload.login,
                    name: action.payload.name,
                    securityGroupsFromProject: action.payload.securityGroupsFromProject,
                    securityGroupsFromSharepoint: action.payload.securityGroupsFromSharepoint
                },
            }
        }
        default:
            return state;
    }
};
export default Reducers;
