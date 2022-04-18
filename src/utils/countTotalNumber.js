export  const countTotalAmount= (project, reports)=> {
    const totalAmount =  reports.filter(report => report.projectId === project.projectId).reduce((a,b) => {
        return a + b.amount
    },0);
    return Number(totalAmount.toFixed(0));
}