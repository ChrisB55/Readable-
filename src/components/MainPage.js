import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import TableList from './TableList';
import TableListDetail from './TableListDetail';


class MainPage extends Component {
  render() {
    const { categories } = this.props
    return (
      <div>
     
  <div className="container">
      <div className="page-header">
      
          
          <TableList />
          <TableListDetail />
          
      </div>
        <p>
          <button 
          className="btn btn-primary-primary" 
          type="button">
          <Link
          to= "/resort"> Sort by Timestamp
          </Link>
          </button>
        </p>
        <p>
          
        <button 
          className="btn btn-primary-primary" 
          type="button">
            <Link
            to= "/create"> Add New Post
            </Link>
           
        </button>

          
        </p>
      <div className="table">
          <ol className="categories-grid"> 
          
       
          </ol>
          
      </div>
      <div className="page-header">
        
      </div>
  </div>
  <footer className="site-footer">
      <div className="container">
          <div className="row">
              <div className="col-sm-6">
                  <h5>Christopher Brown Web Development 2017</h5>
                </div>
          </div>
      </div>
  </footer>
  
      </div>
    );
  }
}

export default MainPage;