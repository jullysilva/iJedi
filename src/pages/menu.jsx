import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 500,
  },
});

function PagePrinc() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.pinimg.com/originals/6d/55/ed/6d55ed0c9933c6f43fa3dca4086eb849.jpg"
          title="Your Name"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Kimi No Na Wa - Your Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Mitsuha Miyamizu (Mone Kamishiraishi) é uma jovem que mora no interior do Japão e que deseja deixar sua pequena cidade para trás para tentar a sorte em Tóquio. Enquanto isso, Taki Tachibana (Ryûnosuke Kamiki), um jovem que trabalha em um restaurante italiano em Tóquio, deseja largar o seu emprego para tentar se tornar um arquiteto. Os dois não se conhecem, mas estão direta e misteriosamente conectados pelas imagens de seus sonhos.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PagePrinc;