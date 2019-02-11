import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  
  capture=()=>{
    document.getElementById('capture').addEventListener('click',  ()=> {
        document.getElementById('canvas').getContext('2d').drawImage(document.getElementById('player'), 0, 0, 640, 480)
    })
}

render() {
        navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;

    if (navigator.getUserMedia) {
        navigator.getUserMedia({video: true},
            (stream) => {
                let video = document.getElementById('player');
                video.srcObject = stream;
                video.onloadedmetadata = (e) => {
                    video.play();

                };
            }, (err) => {
                alert(err.message);

            }
        );
    } else {
        console.log("getUserMedia not supported");
    }
    
    return (
        <div>
            <video id='player' width="640" height="480" autoPlay/>
            <button id="capture" onClick={this.capture}>Capture</button>
            <canvas id="canvas" width="380" height="280"></canvas>
        </div>

    );
}
}

export default App;
