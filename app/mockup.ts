import * as RightsTypes from './components/rights/types';
//мокап-данные

export const rightsResponseMockup: RightsTypes.RightsResponseInterface = {
    Message: '',
    Payload: [
        {
            login: '65pikalovaya',
            name: 'Пикалова Юлия Александровна',
            securityGroupsFromProject: [
                {
                    id: 'PortfolioAdmin', 
                    title: 'Администраторы портфеля', 
                    rights:[
                        {
                            id:'addProjects',
                            name:'Добавлять проекты',
                        },
                        {
                            id:'seeAllProjects',
                            name:'Видеть все проекты',
                        },
                        {
                            id:'editProjects',
                            name:'Редактировать проекты',
                        },
                        {
                            id:'settingPermissions',
                            name:'Точечная настройка разрешений к проекту',
                        }
                    ]
                },
                {
                    id: 'Developers', 
                    title: 'Разработчики', 
                    rights:[
                        {
                            id:'addProjectsWithoutInitiatives',
                            name:'Добавлять все проекты, кроме инициатив',
                        },
                        {
                            id:'seeAllProjects',
                            name:'Видеть все проекты',
                        },
                        {
                            id:'editProjects',
                            name:'Редактировать проекты',
                        },
                        {
                            id:'settingPermissions',
                            name:'Точечная настройка разрешений к проекту'
                        },
                        
                    ]
                }                
            ],
            securityGroupsFromSharepoint: [
                {
                    id: 'Dpp', 
                    title: 'Работники ДПП', 
                    rights:[
                        {
                            id:'allProjects',
                            name:'Все проекты',
                        },
                        {
                            id:'switch',
                            name:'Переключатель "Расширенный/краткий/Инициативы"',
                        },
                        {
                            id:'diagrammsForDPP',
                            name:'Круговые диаграммы для сотрудников ДПП',
                        },
                        {
                            id:'diargammsStatusAndRisks',
                            name:'Круговые диаграммы "Статус и риски"',
                        },
                        {
                            id:'programms',
                            name:'Программы',
                        },
                        {
                            id:'directions',
                            name:'Направления',
                        },
                        {
                            id:'suspendedProjects',
                            name:'Приостановленные проекты',
                        },
                        {
                            id:'Risks',
                            name:'Риски',
                        },
                        {
                            id:'controlOfOrders',
                            name:'Контроль поручений',
                        },
                        {
                            id:'documentsOfProject',
                            name:'Документы проекта'
                        }
                    ]
                }
            ]
        },
        {
            login: '65ivanovii',
            name: 'Иванов Иван Иванович',
            securityGroupsFromProject: [
                {
                    id: 'Developers', 
                    title: 'Разработчики', 
                    rights:[
                        {
                            id:'addProjectsWithoutInitiatives',
                            name:'Добавлять все проекты, кроме инициатив',
                        },
                        {
                            id:'seeAllProjects',
                            name:'Видеть все проекты',
                        },
                        {
                            id:'editProjects',
                            name:'Редактировать проекты',
                        },
                        {
                            id:'settingPermissions',
                            name:'Точечная настройка разрешений к проекту',
                        }
                    ]
                }                
            ],
            securityGroupsFromSharepoint: [
                {
                    id: 'Dpp', 
                    title: 'Работники ДПП', 
                    rights:[
                        {
                            id:'allProjects',
                            name:'Все проекты',
                        },
                        {
                            id:'switch',
                            name:'Переключатель "Расширенный/краткий/Инициативы"',
                        },
                        {
                            id:'diagrammsForDPP',
                            name:'Круговые диаграммы для сотрудников ДПП',
                        },
                        {
                            id:'diargammsStatusAndRisks',
                            name:'Круговые диаграммы "Статус и риски"',
                        },
                        {
                            id:'programms',
                            name:'Программы',
                        },
                        {
                            id:'directions',
                            name:'Направления',
                        },
                        {
                            id:'suspendedProjects',
                            name:'Приостановленные проекты',
                        },
                        {
                            id:'Risks',
                            name:'Риски',
                        },
                        {
                            id:'controlOfOrders',
                            name:'Контроль поручений',
                        },
                        {
                            id:'documentsOfProject',
                            name:'Документы проекта'
                        }
                    ]
                },
                {
                    id: 'LeadersOfOrganization', 
                    title: 'Руководители организации', 
                    rights:[
                        {
                            id:'allProjects',
                            name:'Все проекты',
                        },
                        {
                            id:'diagrammsForDPP',
                            name:'Круговые диаграммы "Статус и риски"',
                        },
                        {
                            id:'suspendedProjects',
                            name:'Приостановленные проекты',
                        },
                        {
                            id:'Risks',
                            name:'Риски',
                        },
                        {
                            id:'documentsOfProject',
                            name:'Документы проекта'
                        }
                    ]
                },
                {
                    id: 'OnTheProject', 
                    title: 'По проектам (расширенный)', 
                    rights:[
                        {
                            id:'onlyTheirProjects',
                            name:'Только свои проекты',
                        },
                        {
                            id:'diargammsStatusAndRisks',
                            name:'Круговые диаграммы "Статус и риски"',
                        },
                        {
                            id:'programms',
                            name:'Программы',
                        },
                        {
                            id:'directions',
                            name:'Направления',
                        },
                        {
                            id:'suspendedProjects',
                            name:'Приостановленные проекты',
                        },
                        {
                            id:'Risks',
                            name:'Риски',
                        },
                        {
                            id:'documentsOfProject',
                            name:'Документы проекта'
                        }
                    ]
                }
            ]
        },],
    StackTrace: null,
    Success: true,
};
//
//export const groupsFromSharepointMochup:Array<RightsTypes.RightsInfoFromProjectInterface> = [
//    {
//        id: 'Dpp', 
//        title: 'Работники ДПП', 
//        rights:[
//            'Все проекты',
//            'Переключатель "Расширенный/краткий/Инициативы"',
//            'Круговые диаграммы для сотрудников ДПП',
//            'Круговые диаграммы "Статус и риски"',
//            'Программы',
//            'Направления',
//            'Приостановленные проекты',
//            'Риски',
//            'Контроль поручений',
//            'Документы проекта'
//        ]
//    },
//    {
//        id: 'LeadersOfOrganization', 
//        title: 'Руководители организации', 
//        rights:[
//            'Все проекты',
//            'Круговые диаграммы "Статус и риски"',
//            'Приостановленные проекты',
//            'Риски',
//            'Документы проекта'
//        ]
//    },
//    {
//        id: 'Department *', 
//        title: 'Департамент *', 
//        rights:[
//            'Только проекты того департамента, в которые входит пользователь',
//            'Приостановленные проекты',
//            'Риски',
//            'Документы проекта'
//        ]
//    },
//    {
//        id:'DepartmentAll', 
//        title: 'Департамент ALL', 
//        rights:[
//            'Все проекты',
//            'Приостановленные проекты',
//            'Документы проекта'
//        ]
//    },
//    {
//        id: 'OnTheProjectShort,', 
//        title: 'По проектам (краткий)', 
//        rights:[
//            'Только свои проекты',
//            'Круговые диаграммы "Статус и риски"',
//            'Приостановленные проекты',
//            'Риски',
//            'Документы проекта'
//        ]
//    },
//    {
//        id: 'OnTheProject', 
//        title: 'По проектам (расширенный)', 
//        rights:[
//            'Только свои проекты',
//            'Круговые диаграммы "Статус и риски"',
//            'Программы',
//            'Направления',
//            'Приостановленные проекты',
//            'Риски',
//            'Документы проекта'
//        ]
//    },
//    {
//        id: 'Special', 
//        title: 'Специальный доступ', 
//        rights:[
//            'Все проекты',
//            'Круговые диаграммы "Статус и риски"',
//            'Приостановленные проекты',
//            'Риски',
//            'Документы проекта'
//        ]
//    },
//    {
//        id:'WebAdmin',
//        title: 'Веб администраторы', 
//        rights:[]
//    },
//]
//
//export const groupsFromMSProjectMochup: Array<RightsTypes.RightsInfoFromProjectInterface> = [
//    {
//        id: 'AdminBKP', 
//        title: 'Администратор БКП', 
//        rights:[
//        ]
//    },
//    {
//        id: 'AdminASUP', 
//        title: 'Администраторы АСУП', 
//        rights:[
//        ]
//    },
//    {
//        id: 'AdminZNI', 
//        title: 'Администраторы ЗНИ', 
//        rights:[
//        ]
//    },
//    {
//        id: 'AdminIbASUP', 
//        title: 'Администраторы ИБ АСУП', 
//        rights:[
//            'Видеть проекты',
//            'Точечная настройка разрешений к проекту'                        
//        ]
//    },
//    {
//        id: 'PortfolioAdmin', 
//        title: 'Администраторы порфеля', 
//        rights:[
//            'Добавлять проекты',
//            'Видеть все проекты',
//            'Редактировать проекты',
//            'Точечная настройка разрешений к проекту'
//        ]
//    },
//    {
//        id: 'GroupEmployees', 
//        title: 'Ведущие сотрудники групп', 
//        rights:[
//            'Добавлять все проекты, кроме инициатив',
//        ]
//    },
//    {
//        id: 'DVA', 
//        title: 'ДВА', 
//        rights:[
//            'Видеть все проекты',
//        ]
//    },
//    {
//        id: 'ResponsiblePersons', 
//        title: 'Ответственные от ЦК', 
//        rights:[
//            'Добавлять все проекты,кроме инициатив',                
//        ]
//    },
//    {
//        id: 'Developers', 
//        title: 'Разработчики', 
//        rights:[
//            'Добавлять все проекты, кроме инициатив',
//            'Видеть все проекты',
//            'Редактировать проекты',
//            'Точечная настройка разрешений к проекту'
//        ]
//    },
//    {
//        id: 'LeadersOfOrganization', 
//        title: 'Руководители организации', 
//        rights:[
//            'Видеть все проекты',
//            
//        ]
//    },
//    {
//        id: 'LeadersOfPortfolio',
//        title: 'Руководители порфеля проектов', 
//        rights:[
//            'Добавлять все проекты, кроме инициатив',
//            
//        ]
//    },
//    {
//        id: 'LeadersOfProjects', 
//        title: 'Руководители проектов', 
//        rights:[
//            'Добавлять все проекты, кроме инициатив',
//            'Видеть только свои проекты',
//            'Редактировать свои проекты',
//            'Точечная настройка разрешений к проекту'
//        ]
//    },
//    {
//        id: 'LeadersOfProjectsProfessional', 
//        title: 'Руководители проектов Professional', 
//        rights:[
//            'Добавлять все проекты, кроме инициатив',
//            'Видеть только свои проекты',
//            'Редактировать свои проекты',
//            'Точечная настройка разрешений к проекту'
//        ]
//    },
//    {
//        id: 'ResourceManagers', 
//        title: 'Руководители ресурсов', 
//        rights:[
//            'Добавлять все проекты, кроме инициатив',         
//        ]
//    },
//    {
//        id: 'ProjectOfficeStaff', 
//        title: 'Сотрудники проектного офиса', 
//        rights:[
//            'Видеть проекты'
//        ]
//    },
//    {
//        id: 'RiskManagers', 
//        title: 'Управляющие рисками', 
//        rights:[
//     
//        ]
//    },
//    {
//        id: 'Group members', 
//        title: 'Участники групп', 
//        rights:[
//     
//        ]
//    },
//]