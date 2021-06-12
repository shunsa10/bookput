import React from "react";
import styled, { css } from "styled-components";
import { sp, tab } from "../../media";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "1rem",
  },
  cardButton: {
    position: "relative",
    top: ".7rem",
    width: "50%",
    height: "70%",
    left: "25%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const MyPutItem: React.FC = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
  
      <ChatUserPutDiv>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              shun sato
            </Typography>
            <Typography variant="h5" component="h2">
              シュガーマンのマーケティング
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.内容
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              shun sato
            </Typography>
            <Typography variant="h5" component="h2">
              シュガーマンのマーケティング
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.内容
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              shun sato
            </Typography>
            <Typography variant="h5" component="h2">
              シュガーマンのマーケティング
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.内容
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              shun sato
            </Typography>
            <Typography variant="h5" component="h2">
              シュガーマンのマーケティング
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.内容
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              shun sato
            </Typography>
            <Typography variant="h5" component="h2">
              シュガーマンのマーケティング
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.内容
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Vois>
          <Button className={classes.cardButton} variant="contained">
            通話開始
          </Button>
        </Vois>
      </ChatUserPutDiv>
  );
};

export default MyPutItem;


const ChatUserPutDiv = styled.div`
  width: 100%;
  height: 78%;
  background-color: #5b5c5c;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
 
`;
const Vois = styled.div`
  width: 90%;
  height: 10%;
  background-color: #777777;
  position: absolute;
  bottom: 1rem;
  ${tab`
width: 90%;
`}
  ${sp`
width: 100%;
`}
`;