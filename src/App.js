import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MenuIcon from '@material-ui/icons/Menu';
import RestoreIcon from '@material-ui/icons/Restore';
import AlbumIcon from '@material-ui/icons/Album';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Albuns from './pages/albuns'
import Menu from './pages/menu'
import Todo from './pages/Todo'
import Postagens from './pages/postagens'
import  Logo  from './img/logo.png'
import './app.css'
import { Grid, Avatar } from '@material-ui/core'
import { ListarFotos } from './services/api'
import { Link } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: '100%',
      backgroundColor: '#050505',
      color: 'white',
    },
    selected: {
      color: '#FFFFFF',
    },
    size: {
      fontSize: '40px',
    },
    large: {
      width: '80%',
      height: '90%',
    },
  }));
  
    const classes = useStyles();
    const [value, setValue] = useState('Menu');
    const [router, setRouter] = useState('Menu');

    const handleChange = (event, newValue) => {
      setRouter(newValue)
      setValue(newValue);
    };


  return (
    <div className={'menu'}>

      <Grid container spacing={2} justify={'center'}>
        <Grid item lg={12}>
          <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Menu" className={classes.selected} value="Menu" icon={<MenuIcon className={classes.size}/>} />
            <BottomNavigationAction label="Postagens" className={classes.selected} value="Postagens" icon={<RestoreIcon className={classes.size}/>} />
            <BottomNavigationAction label="Albuns" className={classes.selected} value="Albuns" icon={<AlbumIcon className={classes.size}/>} />
            <BottomNavigationAction label="TO-DO" className={classes.selected} value="TO-DO" icon={<ListAltIcon className={classes.size}/>} />
          </BottomNavigation>
        </Grid>
      <Grid item lg={12}>
        {router === 'Albuns' ? <Albuns/> 
        : router === 'Menu' ? <Menu />
        : router === 'TO-DO' ? <Todo/>
        :  <Postagens /> }
        </Grid>
      </Grid>
    </div>
  );
}

export default App;



