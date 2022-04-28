export  const countTotalAmount= (project, reports)=> {

    const reportId = project.itemType === 'gateway' ? 'gatewayId' : 'projectId';

    const totalAmount =  reports.filter(report => report[reportId] === project.id).reduce((a,b) => {
        return a + b.amount
    },0);
    return Number(totalAmount.toFixed(0));
}