import React from "react";
import { EvenPlayers } from "./EvenPlayers";
import { OddPlayers } from "./OddPlayers";

import {ListofIndianPlayers} from './ListofIndianPlayers';

export class ListofPlayers extends React.Component {


  render() {
    var flag = false;
    const players70 = [];
    const IndianTeam = ["Sachin1","Dhoni2","Virat3","Rohit4","Yuvraj5","Raina6"];

    const T20Players = ['First Player','Second Player','Third Player'];
    const RanjiTrophyPlayers = ['Fourth Player','Fifth Player','Sixth Player'];
    const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];
    const players = [
      { name: "Jack", score: 50 },
      { name: "Michael", score: 70 },
      { name: "John", score: 40 },
      { name: "Ann", score: 61 },
      { name: "Elisabeth", score: 61 },
      { name: "Sachin", score: 95 },
      { name: "Dhoni", score: 100 },
      { name: "Virat", score: 84 },
      { name: "Jadeja", score: 64 },
      { name: "Raina", score: 75 },
      { name: "Rohit", score: 80 },
    ];

    if(flag === true){
      return (
        <div style={{ textAlign: "left" }}>
          <h1>List of Players</h1>
          <ul>
            {players.map((item) => {
              if (item.score <= 70) {
                players70.push(item);
              }
              return (
                <li>
                  Mr. {item.name}
                  <span> {item.score} </span>
                </li>
              );
            })}
          </ul>
  
          <hr></hr>
  
          <h1>List of Players having Scores Less than 70</h1>
          <ul>
            {players70.map((item) => {
              return (
                <li>
                  Mr. {item.name}
                  <span> {item.score} </span>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }else{
      return(
        <div style= {{textAlign:"left"}}>
          <h1>Indian Team</h1>
          <h1>Odd Players</h1>
          <ul>{OddPlayers(IndianTeam)}</ul>
          <h1>Even Players</h1>
          <ul>{EvenPlayers(IndianTeam)}</ul>
          <hr></hr>
          <h1>List of Indian Players Merged:</h1>
              <ListofIndianPlayers IndianPlayers = {IndianPlayers}/>
        </div>
      );
      
    }

    
  }
}