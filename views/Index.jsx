const React = require('react');
//const DefaultLayout = require('./layout/Default');

class Index extends React.Component {
  render(){
    // const resume = this.props.resume;
    return (
      <div>
        {/* <nav>
          <a href="/resume/new">Create a New Fruit</a>
        </nav> */}
        <ul>
        {this.props.resume.map((resume,i) => {
                  return <li key={i}>
                      <a href={`/resume/${resume._id}`}>{resume.name}</a>

                      <form action={`/resume/${resume._id}?_method=DELETE`} method="POST">
                          <input type="submit" value="DELETE"/>
                          <a href={`/resume/${resume._id}/edit`}>Edit This Fruit</a>
                      </form>
                  </li>
              })}
        
        </ul>
      </div>
    )
  }
}

module.exports = Index;