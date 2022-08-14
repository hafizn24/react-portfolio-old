import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';  

function StatisticsCard({list ,title}) {
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

    const unique = [...new Set(list)]
    const count = countFunc()
    const countDisplay = Array.from(
        count.entries(), ([key, value]) => 
        <div>{key + ": " + value}</div>
    )

    return (
        <Card sx={{ maxWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body1">
                    {countDisplay}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default StatisticsCard