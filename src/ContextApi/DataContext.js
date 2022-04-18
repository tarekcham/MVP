import { createContext } from "react";
export const DataContext = createContext({
    filteredDate:{},
    setFilteredDate:() => {},
    selectedProject: {},
    setSelectedProject:() => {},
    allData: {},
    setAllData: () => {}
});