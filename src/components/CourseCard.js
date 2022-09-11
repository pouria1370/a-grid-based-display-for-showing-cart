import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import img from "../../src/images/trade.jpg";
import clip from "../../src/clips/Kukoin.mp4";
import { CardActions } from "@material-ui/core";
import { pink, purple, red } from "@material-ui/core/colors";
import React, { useEffect } from "react";
import MoreVertSharpIcon from "@material-ui/icons/MoreVertSharp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandMore from "@material-ui/icons/ExpandMore";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { useState } from "react";
import { Collapse } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import ReactPlayer from "react-player";
import { gsap, Power3 } from "gsap";
import { useRef } from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import EventIcon from "@material-ui/icons/Event";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import BrushIcon from "@material-ui/icons/Brush";
import StoreIcon from "@material-ui/icons/Store";
// interface ExpandMoreProps extends IconButtonProps {
//     expand: boolean;
//   }
// const ExpandMore = styled((props: ExpandMoreProps) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
//   })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   }));

export default function CourseCard({ data }) {
  const [expanded, setExpanded] = useState(false);
  const FavoriteRef = useRef(null);
  const theme = useTheme();
  const useStyle = makeStyles({
    mainCard: { backgroundColor: "#fff" },
    avatar:
      data.category === "forex"
        ? { backgroundColor: "green", marginLeft: "3px" }
        : data.category === "coin"
        ? { backgroundColor: "gold", marginLeft: "3px" }
        : data.category === "stock"
        ? { backgroundColor: "purple", marginLeft: "3px" }
        : data.category === "nft"
        ? { backgroundColor: "blue", marginLeft: "3px" }
        : { backgroundColor: "orange", marginLeft: "3px" },
    action: {
      color: "red",
    },
    title: {
      color: "#001759",
      fontSize: "15px",
    },
    subtitle: {
      color: "rgba(1,3,3,0.5)",
      fontSize: "12px",
      fontWeight: 100,
    },
    cardActions: {
      display: "flex",
      backgroundColor: "#001759",
    },
    ExpandMore: {
      color: "#27ced9",
      width: "10%",
      transform: !expanded ? "rotate(0deg)" : "rotate(180deg)",
      animation: "Test_1 2s forward",
    },
    explanation: { marginTop: "10px", textAlign: "justify" },
    videopPlayer: { padding: "10px", marginTop: "-50px" },
    ListItemText: {
      fontSize: "13px",
      color: "rgba(1,3,3,0.5)",
      fontWeight: "300",
      marginRight: "0px",
    },
    ListItemIcon: { color: "#27ced9", marginRight: "-20px" },
    ListItemLevel:
      data.level === "1"
        ? { color: "green" }
        : data.level === "2"
        ? { color: "orange" }
        : { color: "red" },
  });

  const handleExpandClick = () => {
    console.log(expanded);
    setExpanded(!expanded);
    if (expanded) {
      console.log(expanded, "line80");
      gsap.to(targetedComponent_2, 2, { width: "100%", ease: Power3.easeOut });
      console.log(targetedComponent_2.style.width, "line80");
    } else {
      gsap.to(targetedComponent_2, 2, { width: "2%", ease: Power3.easeOut });
    }
  };
  const favouritIconHandler=()=>{
    if(FavoriteRef.current.style.color==='red')
    {
      FavoriteRef.current.style.color='#fff2'
    }
    else{
      FavoriteRef.current.style.color='red'
    }
  }
  const Classes = useStyle(data);
  let targetedComponent_2 = useRef(null);
  // useEffect(()=>{

  //   gsap.to(targetedComponent,6,{opacity:0.6})
  // })
  return (
    <Card elevation={1} className={Classes.mainCard}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={Classes.avatar}>
            {data.category === "discentraland" ? (
              <AccountBalanceWalletIcon />
            ) : data.category === "coin" ? (
              <MonetizationOnIcon />
            ) : data.category === "forex" ? (
              <TrendingDownIcon />
            ) : data.category === "nft" ? (
              <BrushIcon />
            ) : (
              <StoreIcon />
            )}
          </Avatar>
        }
        // action={<IconButton aria-label='setting' className={Classes.action}>
        //   <MoreVertSharpIcon />
        // </IconButton>}
        title={
          <Typography variant="h3" className={Classes.title}>
            {" "}
            {data.category === "coin"
              ? "ارز"
              : data.category === "forex"
              ? "فارکس "
              : data.category === "nft"
              ? "ان اف تی"
              : data.category === "stock"
              ? "سهام"
              : "دیسنترالند"}
          </Typography>
        }
        subheader={
          <Typography variant="h6" className={Classes.subtitle}>
            {" "}
            {data.lesson}
          </Typography>
        }
      />
      <CardMedia
        className={Classes.image}
        component="img"
        height="194"
        image={img}
        alt="i am course"
      />
      <CardContent>
        <List style={{ display: "flex", flexDirection: "row" }}>
          <ListItem>
            <ListItemIcon className={Classes.ListItemIcon}>
              <SignalCellularAltIcon className={Classes.ListItemLevel} />
            </ListItemIcon>
            <ListItemText>
              <Typography className={Classes.ListItemText} variant="h6">
                {" "}
                {data.level === "1"
                  ? "اسان"
                  : data.level === "2"
                  ? "متوسط"
                  : "سخت"}
              </Typography>{" "}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon className={Classes.ListItemIcon}>
              <EventIcon />
            </ListItemIcon>
            <ListItemText className={Classes.ListItemText}>
              <Typography className={Classes.ListItemText} variant="h6">
                {" "}
                {data.date}
              </Typography>{" "}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon className={Classes.ListItemIcon}>
              <AccessTimeIcon />
            </ListItemIcon>
            <ListItemText className={Classes.ListItemText}>
              <Typography className={Classes.ListItemText} variant="h6">
                {" "}
                {data.time}'
              </Typography>{" "}
            </ListItemText>
          </ListItem>
        </List>
      </CardContent>

      <CardActions
        disableSpacing
        className={Classes.cardActions}
        flexDirection="row"
      >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={favouritIconHandler} style={{color:"#fff2"}} ref={FavoriteRef} />
        </IconButton>

        <div
          style={{ width: "100%" }}
          ref={(el) => {
            targetedComponent_2 = el;
          }}
        ></div>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          className={Classes.ExpandMore}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout={500} unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <ReactPlayer
            url={clip}
            // playing={true}
            className={Classes.videopPlayer}
            controls={true}
            width={"100%"}
            // pip={true}
            // light={true}
            stopOnUnmount={true}
          />

          <Typography paragraph className={Classes.explanation}>
            {data.article}
          </Typography>
          {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pl: 1, pb: 1 }}>
              <IconButton aria-label="previous">
                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
              <IconButton aria-label="next">
                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
              </IconButton>
            </Box>
          </Box> */}
        </CardContent>
      </Collapse>
    </Card>
  );
}
