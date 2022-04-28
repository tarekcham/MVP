import { createContext } from "react";
export const DataContext = createContext({
    filteredDate:{from:'01.01.2021', to: '31.12.2021' },
    setFilteredDate:() => {},
    selectedProjectOrGateway: {},
    setSelectedProject:() => {},
    allData: {},
    setAllData: () => {}
});