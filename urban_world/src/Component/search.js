import React from 'react';
import {connect} from 'react-redux'
import {search} from '../store/actions/usersAction'
import {bindActionCreators} from 'redux'
class SearchBar extends React.Component{
  
    render(){
        const {search, value} = this.props;
        return(
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  onChange={(e) => search(e.target.value)} value={value} ></input>
   
            </form>

        )
    }
}
function mapStateToProps({works}) {
    return {value: works?.value};
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({search}, dispatch);
  }

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)
