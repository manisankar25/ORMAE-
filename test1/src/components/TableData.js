

import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';



import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userAction';



export class TableData extends Component{
    constructor(props){
        super(props)
    }

    onDeleteClick(id){

        console.log("selected",id);

        this.props.actions.deleteProduct(id)
        .then(
            () => {
                toastr.success('Product deleted')
                this.props.actions.loaddata()
            }
        )
        .catch(error => {
            alert(error + "me");
        });

    }

renderTableData(){
    console.log("dataaaaaaaaa",this.props.users.users)
    return this.props.users.users && this.props.users.users.map((data, index) => {
        const { albumId, id, title, url } = data //destructuring
        return (
           <tr key={id}>
              <td>{albumId}</td>
              <td>{id}</td>
              <td>{title}</td>
              <td> <button onClick={() => { this.onDeleteClick(id) }} className="btn btn-primary">Delete</button></td>
             
           </tr>
        )
     })
}

    render(){
        return(
            <div class="container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Album ID</th>
                            <th>ID</th>
                            <th>Title</th>

                        </tr>

                    </thead>
                    <tbody>
                    {this.renderTableData()}

                    </tbody>
                    </table>
                
            </div>
        )
    }

}

function mapStateToProps(state, ownProps) {
    console.log("state in allproducts",state)
        return {
            users: state.users
        };
    }
    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionCreators(userActions, dispatch)
        };
    }

export default connect(mapStateToProps, mapDispatchToProps)(TableData);