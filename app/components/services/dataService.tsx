import * as React from 'react';
import { ServiceCostumer} from '../service-context/service_context'

const withDataService = () => (Wrapped:any) => {

    return (props:any) => {
        return (
            <ServiceCostumer>
                {
                    (dataService) => {
                        return <Wrapped {...props}
                        dataService = {dataService} />
                    }
                }
            </ServiceCostumer>
        );
    };
};

export {
    withDataService
};