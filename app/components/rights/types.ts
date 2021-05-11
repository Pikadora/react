export type RightInterface = {
    id: string, 
    name:string,
}

export type RightsInfoFromSharepointInterface = {
    id: string, 
    title: string, 
    rights:RightInterface[]
}

export type RightsInfoFromProjectInterface = {
    id: string, 
    title: string, 
    rights:RightInterface[]
}

export type RightsInfoInterface = {
    login: string | null,
    name: string,
    securityGroupsFromProject: RightsInfoFromProjectInterface[],
    securityGroupsFromSharepoint: RightsInfoFromSharepointInterface[]
}

export type ResponseInterface = {
    Message: string | null;
    StackTrace: null;
    Success: boolean;
}

export type RightsResponseInterface = ResponseInterface & {
    Payload: RightsInfoInterface[];
}
