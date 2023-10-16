
import React from 'react'
import { useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import { IconButton, Toolbar, Typography,Box,Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const Base = ({title,Description,children}) => {
  const navigate = useNavigate()
  return (
    <div className='main-container'>
      <header>
     
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar >
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>navigate('/')}
          >
            <MenuIcon />
          </IconButton>
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Admin-Dashboard
          </Typography>
          <Button color="inherit" onClick={()=>navigate('/')} >Main</Button>
          <Button color="inherit" onClick={()=>navigate('/about')}>About</Button>
          <Button color="inherit" onClick={()=>navigate('/help')}>Help</Button>
        </Toolbar>
      </AppBar>
    </Box>
      </header>
      <main className=''>
        <h1>{title}</h1> 
        <h4>{Description}</h4>
        <div className='contents'>
            {children}
        </div> 
      </main>
    </div>
  )
}

export default Base