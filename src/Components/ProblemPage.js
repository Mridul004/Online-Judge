import React from 'react';
import '../App.css';

const ProblemPage = () => {
  return (
<>
    <div className="problem-page">
      <header className="problem-header">
        <h1>Problem Title</h1>
      </header>
      <main className="problem-content">
        <div className="problem-description">
          <h3>Time Limit : x s</h3>
          <h3>Memory Limit : y MB</h3>
          <h2>Problem Description</h2>
          <p>Consider an algorithm that takes as input a positive integer n. If n is even, the algorithm divides it by two, and if n is odd, the algorithm multiplies it by three and adds one. The algorithm repeats this, until n is one. For example, the sequence for n=3 is as follows:</p>
          <p className='example'>3&rarr;10&rarr;5&rarr;16&rarr;8&rarr;4&rarr;2&rarr;1</p>
          <p>Your task is to simulate the execution of the algorithm for a given value of n.</p>
        </div>
        <div className="input-output">
          <h2 className='problem-heading'>Input</h2>
          <pre>The only input line contains an integer n.</pre>
          <h2 className='problem-heading'>Output</h2>
          <pre>Print a line that contains all values of n during the algorithm.</pre>
          <h2>Constraints</h2>
          <pre>1 &le; n &le; 10^6</pre>
          <h2>Example</h2>
          <pre>Input : 3</pre>
          <pre>Output : 3 10 5 16 8 4 2 1 </pre>
          
        </div>
      </main>
    </div>

    <div className='file-choose'>
      <h1 >Choose a File to Submit : &nbsp;</h1>
      <form action="/upload" method="post" enctype="multipart/form-data">
          <input type="file" name="fileInput" id="fileInput"/>
          <button className='problembutton'>Submit</button>
          
      </form>
    </div>
    </>
  );
};

export default ProblemPage;
