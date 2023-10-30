import React from 'react';
import '../App.css';


export default function Home() {
  return (
    <>
    <h2 className='tagline'>"Code, Compete, Conquer: Your Path to Programming Mastery"</h2>

    <div className='baseline'></div>

    <div className='Card'>
        <div className='box1'>
          <a href="/Problems">Problem Set</a>
          <div className='content'>
          <a href="/EasyProblems "><h4 >-Easy Level</h4></a>
          <a href="/MediumProblems "><h4 >-Medium Level</h4></a>
          <a href="/HardProblems "><h4 >-Hard Level</h4></a>
          <a href="/Problems "><h4 >-Top Interview Questions</h4></a>
          <a href="/Problems "><h4 >-Tag Based</h4></a>
       
          </div>
        </div>
        <div className='box1'>
            <div className='content'>
                <a href="/Contest"><h4>Contests</h4></a>
                <h4> - No Upcoming Contests</h4>
            </div>
        </div>
        <div className='box1'>
          <div className='content'>
            <a href="/Learn"><h4>Learn</h4></a>
            <h4>-Standard Template Library</h4>
            <h4>-Data Structures</h4>
            <h4>-OOP's</h4>
          </div>
        </div>
        <div className='box1'>
            <div className='content'>
             <a href="/Refernces"><h4>Refernces</h4></a>
              <h4>-Basic building Blocks</h4>
              <h4>-Zero to Hero</h4>
              <h4>-Rankup Roadmap</h4>
            </div>
        </div>
    </div>
    <div className='Card'>
    </div>
    

    </>
  )
}
