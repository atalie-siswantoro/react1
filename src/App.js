import React, {Component} from 'react';
import './App.css';
import Alert from './Components/Alert';
import Media from './Components/Media';

class App extends Component {

  constructor(){
    super();
    this.state = {
      type: "danger",
      header: "Fatal Error",
      content: "ini content dari alert"
    }
  }

  //fungsi untuk mengubah tipe
  changeTypeAlert = (event) =>{
    this.setState({type: event.target.value});
  }
  //fungsi untuk mengubah header
  changeHeaderAlert = (event) =>{
    this.setState({header: event.target.value});
  }
  //fungsi untuk mengubah content
  changeContentAlert = (event) =>{
    this.setState({content: event.target.value});
  }

  render(){
    //return (

      //Membuat Elemen dengan State dan Props
      /*
        <div className="App">
          <Alert type={this.state.type} header={this.state.header}>
            {this.state.content}
          </Alert>
          <hr />
          <h4>Alert Control</h4>
          <b className="text-left">Tipe Alert</b>
          <select className="form-control" name="type" value={this.state.type} onChange={this.changeTypeAlert}>
            <option value="success">Success</option>
            <option value="warning">Warning</option>  
            <option value="danger">Danger</option> 
            <option value="info">Info</option>
          </select>
          <b className="text-left">Header Alert</b>
          <input type="text" name="header" className="form-control" value={this.state.header} onChange={this.changeHeaderAlert} />
          <b className="text-left">Content Alert</b>
          <input type="text" name="content" className="form-control" value={this.state.content} onChange={this.changeContentAlert} />
        </div>
      */

      //Modifikasi App.js
      /*
        <div className="App">
          <h3>Ini Project Pertama React JS</h3>
          <p>Belajar React JS itu mudah</p>  
        </div>
      */

      //Menambahkan Bootstrap pada project React JS
      /*
        <div className="App container">  

          <div className="alert alert-info">  
            <h3 className="text-danger">Ini Project Pertama React JS</h3>  
            <p>Belajar React JS itu mudah</p>  
            <button className="mr-1 btn btn-success">Setuju</button>  
            <button className="btn btn-info">Iya Dong</button>  
          </div>  
        </div>
      */

      //Membuat Custom Element
      /* 
        <div className="App container col-sm-6">
          <Alert /> 
          <Alert />  
          <Alert />  
        </div> 
      */


      //Membuat Custom Elemen Menggunakan Props
      /* 
        <div className="App container col-sm-6">
          <Alert type="danger" header="Fatal Error">
            Ini adalah alert dengan tipe danger
          </Alert>
          <Alert type="success" header="Berhasil">
            Ini adalah alert dengan tipe success
          </Alert>
          <Alert type="warning" header="Warning">
            Ini adalah alert dengan tipe warning
          </Alert>
        </div> 
      */

      //Membuat Custom Element dengan Prop #2
      /* 
        <div>
          <Media image="react.png" title="React JS">
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus  
            scelerisque ante sollicitudin. Cras purus odio, vestibulum  
            in vulputate at, tempus viverra turpis
          </Media>
          <Media image="angular.png" title="Angular JS">
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus  
            scelerisque ante sollicitudin. Cras purus odio, vestibulum  
            in vulputate at, tempus viverra turpis
          </Media>
        </div>
      */
    //);
  }
}

export default App;
