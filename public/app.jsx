var GreeterMessage = React.createClass({
  render: function(){
    var name = this.props.name;
    var message = this.props.message;
    return(
      <div>
        <h1>Hello {name}!!!</h1>
        <p>{message}</p>
      </div>
  );
  }
});

var GreeterForm = React.createClass({
  onSubmit : function(e){
    e.preventDefault();
    let nameref=this.refs.name;
    let name = nameref.value;
    nameref.value='';
    let messageref=this.refs.message;
    let message = messageref.value;
    messageref.value='';
    console.log(name);
    console.log(message);
    if((typeof name === 'string' && name.length>0) || (typeof message === 'string' && message.length>0))
    {
      console.log('Condition Passed');
      this.props.onNewName(name,message);
  }
  else{
    console.log('Condition Failed');
    // name = '';
    // this.props.onNewName(name)
  }
},
  render:function(){
    return(
      <form onSubmit={this.onSubmit}>
        <input type="text" ref="name" placeholder="Enter a Name"/>
        <br></br>
        <br></br>
        <input type="textarea" ref="message" placeholder="Enter a message"/>
        <br></br><br></br>
        <button>SUBMIT</button>
      </form>
    );
  }
});

// MAIN COMPONENT
var Greeter = React.createClass({
  getDefaultProps : function()
  {
    return {
      name:'React',
      message: 'Type you name into the text box to see the changes'
    };
  },
  getInitialState : function(){
    return({
      name : this.props.name,
      message :this.props.message
    })
  },
  handleNewName : function(name,message){
    if(name.length>0)
    {
    this.setState({name:name});
  }
  if(message.length>0)
  {
  this.setState({message:message});
  }
  // else {
  //     this.setState({message:'Enter Valid Text into the textbox'});
  // }
},
  render:function(){
    var name = this.state.name;
    var message = this.state.message;
  return(
    <div>
      <GreeterMessage name={name} message={message}/>
      <GreeterForm onNewName={this.handleNewName}/>
    </div>
  );
}
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
