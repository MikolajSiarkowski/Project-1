import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import "./App.css"
import { Login } from './Login/Login'
import { Link, Routes, Route } from "react-router-dom"
import HomePage from './HomePage'
import { Registration } from './Registration/Registration'
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(null);
  return (
  <>
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{
        backgroundColor: "#1a237e",
        color: "whitesmoke",
        '&:hover': {
          color: "whitesmoke",
        }
      }}>
      <BottomNavigationAction 
        component={Link}
        to="/Homepage"
        value="/Homepage"
        label="Homepage"
        sx={{
          color: "whitesmoke",
          '&:hover': {
            color: "whitesmoke",
          }
        }}
      />
      <BottomNavigationAction 
        component={Link}
        to="/Login"
        value="/Login"
        label="Login" 
        sx={{
          color: "whitesmoke",
          '&:hover': {
            color: "whitesmoke",
          }
        }} 
      />
      <BottomNavigationAction 
        component={Link}
        to="/Registration"
        value="/Registration"
        label="Registration" 
        sx={{
          color: "whitesmoke",
          '&:hover': {
            color: "whitesmoke",
          }
        }} 
      />
    </BottomNavigation>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/HomePage' index element={<HomePage />}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/Registration' element={<Registration />}/>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </>
  )
}

function NoMatch() {
  return(
    <div>Nothing to see here</div>
  )
}
