import React, {useContext} from 'react';
import './ProjectsOrGatewaysList.css';
import {DataContext} from "../../ContextApi/DataContext";
import {countTotalAmount} from "../../utils/countTotalNumber";

export const componentRef = React.createRef();

const ProjectsOrGatewaysList = () => {

    const {allData, selectedProjectOrGateway} = useContext(DataContext);
    let {reports} = allData;
    reports = reports.sort((a, b)=>{
        const c = new Date(a.created);
        const d = new Date(b.created);
        return c-d;
    });

    if (!selectedProjectOrGateway.length || !selectedProjectOrGateway.length) {
        return 'Sorry no Data to display';
    }

    return (
        <table className='table' ref={componentRef}>
            {selectedProjectOrGateway.map(item => (
                    <tbody key={item.id}>
                        <tbody className='table__mainRow'>
                            <tr className='table--spaceAround'>
                                <th>{item.name}</th>
                                <th>TOTAL: {countTotalAmount(item, reports).toLocaleString()} USD</th>
                            </tr>
                        </tbody>

                        <tbody className='table__secondary_rows'>

                            <tr className='table--row-width table--spaceAround table--row--height table--alignCenter'>
                                <td>Data</td>
                                <td className='table--hide'>Transaction ID</td>
                                <td>Amount</td>
                            </tr>
                            {reports.filter(report => report[`${item.itemType === 'gateway' ? 'gatewayId' : 'projectId'}`] === item.id).map(report => (
                                <tr className='table--row-width table--alignCenter table--row--height table--spaceAround'
                                    key={report.paymentId}>
                                    <td>{new Date(report.created).toLocaleDateString("uk-Uk")}</td>

                                    <td className='table--hide'>{report.paymentId}</td>
                                    <td>{report.amount}</td>
                                </tr>
                            ))}
                        </tbody>

                    </tbody>
                )
            )}
        </table>
    );
};

export default ProjectsOrGatewaysList;