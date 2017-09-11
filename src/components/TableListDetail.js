import React, { Component } from 'react';
import { connect } from 'react-redux';
// also smart container

class TableListDetail extends Component {
    render() {
        if (!this.props.categories) {
            return <div> select a category</div>;
        }
        return (
            <div> 
            <h4>The category selected is </h4>
            <div> <li>title {this.props.categories.active}</li></div>
            </div>
            
        );
        console.log(this.props.categories.active)
    }
    
}

function mapStateToProps(state) {
    return {
        category: state.activeCategories
    }
}

export default connect(mapStateToProps)(TableListDetail);