import * as Types from '../actions/types';

export const initialAccordionState: Types.AccordionInitialStateInterface = { 
    isActiveKey: true,
    data:{
            isLoginTrue: false,
            user:{
                login: '',
                name: '',
                securityGroupsFromProject: [],
                securityGroupsFromSharepoint: []
            }
        },
    
};

const accordionReducers = (state = initialAccordionState, action: any) => {
    switch (action.type) {
        case 'UPDATE_ACTIVE_KEY_ACCORDION':
            return {
                ...state,
                isActiveKey: !state.isActiveKey
            }
        // изменить юзера
        case 'UPDATE_USER': {
            return {
                ...state,
                data:{
                    isLoginTrue: true,
                    user:{
                        login: action.payload.user.login,
                        name: action.payload.user.name,
                        securityGroupsFromProject: action.payload.user.securityGroupsFromProject,
                        securityGroupsFromSharepoint: action.payload.user.securityGroupsFromSharepoint
                    },
                }
            }
        }
        //получить
        case 'GET_MOCHUP_USER': {
            return {
                data:{
                    user: state.data.user,
                    isLoginTrue: state.data.isLoginTrue,
                }
            }
        }
    default:
        return state;
    };
}

export default accordionReducers;