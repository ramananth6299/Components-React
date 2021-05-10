import React from 'react';
import src from '../Components/Office.jpg'

export class Office extends React.Component{
    render(){
        const element = "Office Space";
        const jsxatt = <img src = {src} width = "25%" height = "25%" alt = "Office Space"/>
        const ItemName = {Name:"DBS",Rent:70000,Address:'Chennai'}
        let colors = [];

        if(ItemName.Rent <= 60000){
            colors.push('red');
        }else{
            colors.push('green');
        }

        return(
            
            <div style = {{textAlign:'left',paddingLeft:'400px'}}>
                <h1>{element} , at Affordable Range</h1>
                {jsxatt}
                <h1>Name: {ItemName.Name}</h1>
                <h1 style = {{color:colors[0]}}>Rent: Rs. {ItemName.Rent}</h1>
                <h1>Address: {ItemName.Address}</h1>
            </div>
            
        );
    }
}