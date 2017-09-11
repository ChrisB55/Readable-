import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../actions/index';
import { bindActionCreators } from 'redux';


//Smart Compnent(Container)
class TableList extends Component {
  
    renderList() 
    {const { category} = this.props
        return this.props.categories.map((category) => {
            return (
            <button
            key={category.title}
            onClick={()=>this.props.selectCategory(category)}
            className="list-group-item"> 
            {category.title}
            </button>
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