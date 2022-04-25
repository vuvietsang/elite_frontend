import React, { Component } from 'react'
import { Route } from 'react-router-dom';


interface props{
    component:Component;
}
const ProtectedRoute=({component, ...rest}:props) =>{
  return (<Route {...rest} />
  )
}

export default ProtectedRoute