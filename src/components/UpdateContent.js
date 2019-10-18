import React, {Component} from 'react';
import { SourceMapConsumer } from '../../../../Users/C2H5OH/AppData/Local/Microsoft/TypeScript/3.6/node_modules/source-map/source-map';

class UpdateContent extends Component{
    constructor(props){
      super(props);
      this.state ={
        title:this.props.data.title,
        desc:this.props.data.desc
      }

      this.inputFormHandler = this.inputFormHandler.bind();
    }
    inputFormHandler(e){
      this.setState({[e.target.name]:e.target.value});   

    }
    render (){
      console.log("UP", this.props.data);
      console.log('UpdateContent render');
      return (
        <article>
        <h2>Update</h2>
        <form action="update" method="POST"
          onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value
             );
              alert('Submutt');              
          }.bind(this)}
        >
          <p><input 
          type="text" 
          name="title" 
          placeholder="title"
          value={this.state.title}
          onChange={this.inputFormHandler}
          ></input></p>
          <p>
            <textarea 
            onChange={this.inputFormHandler}
  
           name="desc" placeholder="input text please" value={this.state.desc}>
           </textarea>
          </p>
          <p><input type="submit"></input></p>
        </form>
  
    </article>
  
      );
    }
  }

  export default UpdateContent;
