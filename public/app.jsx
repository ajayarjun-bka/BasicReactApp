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
  onButtonClick : function(e){
    e.preventDefault();
    let nameref=this.refs.name;
    let name = nameref.value;
    nameref.value='';
    if(typeof name === 'string' && name.length>0)
    {
    this.setState({name:name,
    message:'See the cahnges'});
  }
  else{
    this.setState({message:'Please Enter a valid String into the text box'});
  }
  },
  render:function(){
    var name = this.state.name;
    var message = this.state.message;
  return(
    <div>
      <h1>Hello {name}!!</h1>
      <p>{message}</p>
      <form onSubmit={this.onButtonClick}>
        <input type="text" ref="name"/>
        <button>SUBMIT</button>
      </form>
    </div>
  );
}
});



ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
