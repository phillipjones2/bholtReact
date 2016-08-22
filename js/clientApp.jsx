var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./myTitle')

var MyFirstComponent = () => (
  <div>
    <MyTitle title='Whatevs' color='rebeccapurple' />
    <MyTitle title='LOL' color='papayawhip' />
    <MyTitle title='omg this is awesome' color='#f06d06' />
  </div>
)

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
