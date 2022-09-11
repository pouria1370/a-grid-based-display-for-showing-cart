import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { Box, Grid, makeStyles, Paper } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import CourseCard from '../components/CourseCard'
import { Pagination } from '@material-ui/lab'
import {ArrowBackIcon} from '@material-ui/icons'
import {ArrowForwardIcon} from '@material-ui/icons'
// داده ها بدین شکل باشند
const Data = [{
  category: "forex", lesson: "کیف پول تراست ولت", image: "", id: "sss",
  time: "3", level: "1", date: "1400/5/2", article: "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید"
},
{
  category: "coin", lesson: "ارز های نو", image: "", id: "sss2",
  time: "4", level: "2", date: "1400/6/2", article: "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید"
},
{
  category: "discentraland", lesson: "کیف پول کوینومی", image: "", id: "sss3",
  time: "5", level: "3", date: "1400/5/2", article: "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید"
},
{
  category: "nft", lesson: "چنگالهای اندروز", image: "", id: "sss4",
  time: "6", level: "1", date: "1400/5/2", article: "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید"
},
{
  category: "nft", lesson: "شمع های ژاپنی", image: "", id: "sss5",
  time: "4", level: "3", date: "1400/12/12", article: "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید"
},
{
  category: "forex", lesson: "فیبونانچی", image: "", id: "sss6",
  time: "3", level: "2", date: "1400/5/2", article: "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید"
},
{
  category: "stock", lesson: "ایچیموکو", image:"", id: "sss7",
  time: "6", level: "1", date: "1400/5/22", article: "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید"
}
,
{
  category: "stock", lesson: "ایچیموکو", image:"", id: "sss7",
  time: "6", level: "1", date: "1400/5/22", article: "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید"
}
,
{
  category: "stock", lesson: "ایچیموکو", image:"", id: "sss7",
  time: "6", level: "1", date: "1400/5/22", article: "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید"
}
,
{
  category: "stock", lesson: "ایچیموکو", image:"", id: "sss7",
  time: "6", level: "1", date: "1400/5/22", article: "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید"
}
,
{
  category: "stock", lesson: "ایچیموکو", image:"", id: "sss7",
  time: "6", level: "1", date: "1400/5/22", article: "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید"
}
,
{
  category: "stock", lesson: "ایچیموکو", image:"", id: "sss7",
  time: "6", level: "1", date: "1400/5/22", article: "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید"
}
,
{
  category: "stock", lesson: "ایچیموکو", image:"", id: "sss7",
  time: "6", level: "1", date: "1400/5/22", article: "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید"
}
,
{
  category: "nft", lesson: "ایچیموکو", image:"", id: "sss7",
  time: "6", level: "1", date: "1400/5/22", article: "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید"
}
,
{
  category: "nft", lesson: "ایچیموکو", image:"", id: "sss7",
  time: "6", level: "1", date: "1400/5/22", article: "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید"
}
,
{
  category: "stock", lesson: "ایچیموکو", image:"", id: "sss7",
  time: "6", level: "1", date: "1400/5/22", article: "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید"
}
,
{
  category: "coin", lesson: "ایچیموکو", image:"", id: "sss7",
  time: "6", level: "1", date: "1400/5/22", article: "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید"
}
]

export default function Courses() {
  const [page, setPage] = useState(1)
  const useStyle = makeStyles({
    Cards: {
      padding: '10px',
      backgroundColor:"#202329",
      width:'100%',
      marginRight:'-3px'

    },
    pagination:{
      "& .MuiPaginationItem-root":{
        color:"#fff",
      },
      "& .MuiPaginationItem-root:active":{
        backgroundColor:"secondary",
      },
    }
 
  })

  const Classes = useStyle()
  return (
    
      <Grid className={Classes.Cards} container spacing={3} columns={{ xs: 4, md: 12 }}>
        {Data.slice((page-1)*10,(page-1)*10+10).map((node) => ( <Grid item xs={12} sm={6} md={4}>{<CourseCard key={node.id} data={node} />}</Grid> ))}
      <Grid item xs={12} sm={12} md={12}>
      <Pagination  style={{
        width:"100%",
        display:'flex',
        justifyContent:"center",
        scrollBehavior:"smooth"
      }}
      classes={{ul:Classes.pagination}}
      count={(Data.length/10).toFixed(0)}
      onChange={(_,value)=>{
        setPage(value);
        window.scroll(0,0)
      }}
      color="secondary" 
      />
      </Grid>
        </Grid>
      
      
  )
}
