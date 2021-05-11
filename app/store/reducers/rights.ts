import * as Types from '../actions/types';

export const initialRightsState: Types.RightsInitialStateInterface = { 
    users:[],
    isLoadingRights: false,
    isModalVisible:false,
    errorData: null
};

const RightsRedicer = (state = initialRightsState, action: any) => {
    switch (action.type) {
        //загрузка
        case 'LOADING': {
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
            }
        };
        //Меняем статус видимости модалки
        case 'GET_MODAL_VISIBLE': {
            return {
                ...state,
                isModalVisible: !state.isModalVisible,
            }
        };
        //Получаем информацию об ошибке
        case 'GET_ERROR':
            return {
                ...state,
                errorData: {
                    type: action.payload.data.type,
                    message: action.payload.data.message,
                },
            };
        //обновить пользователей из базы
        case 'UPDATE_MOCHUP_USERS': {
            return {
                ...state,
                users:action.payload.users,
                isLoadingRights: false,
            }
        };
        //получить пользователей из базы
        case 'GET_MOCHUP_USERS': {
            return {
                ...state,
                users:state.users,
            }
        };
        default:
            return state;
    }
};

export default RightsRedicer;
