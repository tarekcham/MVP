import React, {useContext} from "react";
import './chart.css';
import {PieChart, Pie, Cell} from "recharts";
import {DataContext} from "../../ContextApi/DataContext";
import {countTotalAmount} from "../../utils/countTotalNumber";

function Chart() {
    const {allData, selectedProject} = useContext(DataContext);
    const {reports} = allData;
    const shapeData = (projects, reports) => {
        return selectedProject.map(project => {
            return {
                name: project.name,
                totalAmount: countTotalAmount(project, reports)
            };
        })
    }
    const isChartNotDisplayed = !selectedProject || selectedProject.length < 2;

    const data = shapeData(selectedProject, reports);
    const COLORS = ['#A259FF', '#F24E1E', '#FFC107', '#6497B1'];

    if (isChartNotDisplayed) {
        return null;
    }
    return (
        <div className='chart'>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="totalAmount"
                    isAnimationActive={true}
                    data={data}
                    cx={200}
                    cy={200}
                    outerRadius={80}
                    fill="#1f77b4"
                    label
                >
                    {
                        data.map((entry, index) => <Cell key={COLORS[index]} fill={COLORS[index % COLORS.length]}/>)
                    }
                </Pie>
            </PieChart>
        </div>
    )
}

export default Chart;