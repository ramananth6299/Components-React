
import React from 'react';
export class Menu extends React.Component{
    render(){
        const menu=[{id:1,name:"cake",price:90},{id:2,name:"chocolate",price:20},{id:3,name:"pizza",price:160}];
        return(
            <table style={{border:"1px solid black"}}>
                <tr><th style={{border:"1px solid black"}}>Id:</th>
                <th style={{border:"1px solid black"}}>Name:</th>
                <th style={{border:"1px solid black"}}>Price:</th>
                </tr>
            {menu.map((item)=>{
                if(item.id===this.props.id){
                    return(   
                    <tr>
                       <td style={{border:"1px solid black"}}>{item.id}</td>
                        <td style={{border:"1px solid black"}}>{item.name}</td>
                        <td style={{border:"1px solid black"}}>{item.price}</td>
                    </tr>);
                    
                }
            })}</table>
        );
    }
}