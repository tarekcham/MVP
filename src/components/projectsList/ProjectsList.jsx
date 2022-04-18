import React, {useContext} from 'react';
import './ProjectsList.css';
import {DataContext} from "../../ContextApi/DataContext";
import {countTotalAmount} from "../../utils/countTotalNumber";

const ProjectsList = () => {

    const {allData, selectedProject} = useContext(DataContext);
    const {reports} = allData;

    if (!selectedProject.length || !selectedProject.length) {
        return 'Sorry no Data to display';
    }


    return (
        <table className='table'>
            {selectedProject.map(project => (
                    <div key={project.projectId}>
                        <div className='table__mainRow'>
                            <tr className='table--spaceAround'>
                                <th>{project.name}</th>
                                <th>TOTAL: {countTotalAmount(project, reports).toLocaleString()} USD</th>
                            </tr>
                        </div>

                        <div className='table__secondary_rows'>

                            <tr className='table--row-width table--spaceAround table--row--height table--alignCenter'>
                                <td>Data</td>
                                <td className='table--hide'>Transaction ID</td>
                                <td>Amount</td>
                            </tr>

                            {reports.filter(report => report.projectId === project.projectId).map(report => (
                                <tr className='table--row-width table--alignCenter table--row--height table--spaceAround'
                                    key={report.paymentId}>
                                    <td>{report.created}</td>
                                    <td className='table--hide'>{report.paymentId}</td>
                                    <td>{report.amount}</td>
                                </tr>
                            ))}
                        </div>

                    </div>
                )
            )}
        </table>
    );
};

export default ProjectsList;