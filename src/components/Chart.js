import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



function Chart({list ,title}) {
    function countFunc(){
        let tempmap =  new Map()
        for(let i in unique){
            let index = 0
            for(let j in list){
                if(list[j] == unique[i]){
                    index += 1
                }
            }
            tempmap.set(unique[i], index)
        }
        return tempmap
    }

    function value(){
        const values = []
        Array.from(count.entries(), ([key, value]) => 
            values.push(value)
        )
        return values
    }

    const unique = [...new Set(list)]
    const count = countFunc()
    
    // const countDisplay = Array.from(
    //     count.entries(), ([key, value]) => 
    //     <div>{key + ": " + value}</div>
    // )

    const data = {
        labels: unique,
        datasets: [
          {
            label: title,
            data: value(),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
  return (
    <Pie data={data}/>
  )
}

export default Chart