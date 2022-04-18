import moment from "moment";

export const getDates = (startDate, stopDate) => {
    const dateArray = [];
    let currentDate = moment(startDate);
    const stopDateMoment = moment(stopDate);
    while (currentDate <= stopDateMoment) {
        dateArray.push(moment(currentDate).format('YYYY-MM-DD'));
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
}