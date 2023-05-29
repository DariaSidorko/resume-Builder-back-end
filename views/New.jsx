const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>New Resume page</h1>
            <form action="/resume" method="POST">
              Name: <input type="text" name="name" /><br/>
              Title: <input type="text" name="title" /><br/>
              Email: <input type="text" name="email" /><br/>
              Phone: <input type="text" name="phone" /><br/>
              <input type="submit" name="" value="Create Resume"/>
            </form>
            
        </div>);
    }
  }

module.exports = New;
