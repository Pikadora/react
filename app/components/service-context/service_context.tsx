import * as React from 'react';

const {
    Provider: ServiceProvider,
    Consumer: ServiceCostumer
} = React.createContext({});

export {
    ServiceProvider,
    ServiceCostumer
}