import React, { Component } from 'react'
import ImageZoom from 'react-medium-image-zoom'

function MyComponent(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <p>Some text...</p>

      <ImageZoom
        image={{
          src: require('./images/event-loop.png'),
          alt: 'Event Loop',
          className: 'img',
          style: { width: '50em' }
        }}
        zoomImage={{
          src: require('./images/event-loop-big.png'),
          alt: 'Event Loop'
        }}
      />

      <p>Some text...</p>
      <br />

      <ImageZoom
        image={{
          src: require('./images/$.jpeg'),
          alt: '$',
          className: 'img',
          style: { width: '50em' }
        }}
        zoomImage={{
          src: require('./images/$-big.jpeg'),
          alt: '$'
        }}
      />

      <p>Some text...</p>
      <br />

      <ImageZoom
        image={{
          src: require('./images/call-stack.png'),
          alt: 'Call Stack',
          className: 'img',
          style: { width: '50em' }
        }}
        zoomImage={{
          src: require('./images/call-stack-big.png'),
          alt: 'Call Stack'
        }}
      />

      <p>Some text...</p>
      <br />

      <ImageZoom
        image={{
          src: require('./images/command.png'),
          alt: 'Command',
          className: 'img',
          style: { width: '50em' }
        }}
        zoomImage={{
          src: require('./images/command-big.png'),
          alt: 'Command'
        }}
      />

      <p>Some text...</p>
      <br />

      <ImageZoom
        image={{
          src: require('./images/nodejs.png'),
          alt: 'Node Js',
          className: 'img',
          style: { width: '50em' }
        }}
        zoomImage={{
          src: require('./images/nodejs-big.png'),
          alt: 'Node Js'
        }}
      />

      <p>Some text...</p>
      <br />

      <ImageZoom
        image={{
          src: require('./images/v8.png'),
          alt: 'V8',
          className: 'img',
          style: { width: '50em' }
        }}
        zoomImage={{
          src: require('./images/v8-big.png'),
          alt: 'V8'
        }}
      />

      <p>Some text...</p>
      <br />

      <ImageZoom
        image={{
          src: require('./images/module.png'),
          alt: 'Module',
          className: 'img',
          style: { width: '50em' }
        }}
        zoomImage={{
          src: require('./images/module-big.png'),
          alt: 'Module'
        }}
      />

      <p>...</p>
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Image Zoom Demo</h1>
        <MyComponent />
      </div>
    );
  }
}
