var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function () {
//     return (
//       <h3>Examples Component</h3>
//     )
//   }
// });

var Examples = () => {
    
    return (
        <div>
        <h1 className='text-centered'>Examples</h1>
            <p>Here are a few examples to help you get started!</p>
            <ol>
            <li>
            <Link to='/?location=Philadelphia'> Philadelphia, PA </Link>
            </li>
            
            <li>

            <Link to='/?location=Rio'> Rio, Brazil</Link>

            </li>

            </ol>
            </div>
    );
    
    
}

module.exports = Examples;
