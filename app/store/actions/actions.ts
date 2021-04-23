import * as Types from '../../components/rights/types'

const data = [
    {
        login: '65pikalovaya',
        name: 'Пикалова Юлия Александровна',
        securityGroupsFromProject: [
            {
                id: 'PortfolioAdmin', 
                title: 'Администраторы порфеля', 
                rights:[
                    'Добавлять проекты',
                    'Видеть все проекты',
                    'Редактирвоать проекты',
                    'Точечная настройка разрешений к проекту'
                ]
            }                
        ],
        securityGroupsFromSharepoint: [
            {
                id: 'Dpp', 
                title: 'Работники ДПП', 
                rights:[
                    'Все проекты',
                    'Переключатель "Расширенный/краткий/Инициативы"',
                    'Круговые диаграммы для сотрудников ДПП',
                    'Круговые диаграммы "Статус и риски"',
                    'Программы',
                    'Направления',
                    'Приостановленные проекты',
                    'Риски',
                    'Контроль поручений',
                    'Документы проекта'
                ]
            }
        ]
    },
    {
        login: '65ivanovii',
        name: 'Иванов Иван Иванович',
        securityGroupsFromProject: [
            {
                id: 'PortfolioAdmin', 
                title: 'Администраторы порфеля', 
                rights:[
                    'Добавлять проекты',
                    'Видеть все проекты',
                    'Редактирвоать проекты',
                    'Точечная настройка разрешений к проекту'
                ]
            }                
        ],
        securityGroupsFromSharepoint: [
            {
                id: 'Dpp', 
                title: 'Работники ДПП', 
                rights:[
                    'Все проекты',
                    'Переключатель "Расширенный/краткий/Инициативы"',
                    'Круговые диаграммы для сотрудников ДПП',
                    'Круговые диаграммы "Статус и риски"',
                    'Программы',
                    'Направления',
                    'Приостановленные проекты',
                    'Риски',
                    'Контроль поручений',
                    'Документы проекта'
                ]
            }
        ]
    },
]

export interface RightsInitialStateInterface {
    users: Types.RightsResponseInterface[];
    isLoginTrue:boolean;
    user:Types.RightsInfoInterface,
    isLoadingRights:boolean;
    errorData: null;
}

export const getData = () => {
    return{
        payload:{
            data:data,
        },
        type: 'GET_MOCKUP_DATA',
    }
}

export const getMochUpUser = (item: boolean, newUser: Types.RightsInfoInterface) => {
    return{
        payload:{
            isLoginTrue: item,
            user:  newUser,
        },
        type: 'GET_MOCKUP_USER',
    }
}

export const getMochUpUsers = (users: Types.RightsResponseInterface[]) => {
    return{
        payload:{
            users:  users,
        },
        type: 'GET_MOCKUP_USERS',
    }
}
