import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../actions/index';
import { bindActionCreators } from 'redux';


//Smart Compnent(Container)
class TableList extends Component {
  
    renderList() 
    {const { categories } = this.props
        return this.props.categories.map((category) => {
            return (
            <li 
            key={category.title}
            onClick ={()=>this.props.selectCategory(category)}
            className="list-group-item"> 
            {category.title}
            </li>
        );
        });
    }

    render() {
        return (
          <ul className="list-group col-sm-4">
            {this.renderList()}
          </ul>
          
        )
      }
    }
    
    function mapStateToProps(state) {
      return {
        categories: state.categories
      };
    }

    function mapDispatchToProps(dispatch) {
        return bindActionCreators ({ selectCategory: selectCategory}, dispatch);
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(TableList);