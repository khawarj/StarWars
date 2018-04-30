import React from 'react';
import DocumentTitle from 'react-document-title';
import { searchPlanets } from '../../actions/planetsActions';
import {connect} from "react-redux";
import PlanetTable from "./PlanetTable";

class SearchPage extends React.Component {

    constructor(props, context){
        super(props, context);
        this.changehandler = this.changehandler.bind(this);
    }

    changehandler(event){
        this.props.dispatch(searchPlanets(event.target.value));
    }

    createGroup(items){
        return(
            <div class="panel-group" id="accordion">
                {items.map((item, index)=> this.createAccordion(item, index))}
            </div>
        )
    }

    createAccordion(item, index){
        return(
                <div class="panel">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href={"#collapse"+index}>
                                {item.name}</a>
                        </h4>
                    </div>
                    <div id={"collapse"+index} class="panel-collapse collapse in">
                        <div class="panel-body">
                            <PlanetTable planet={item}/>
                        </div>
                    </div>
                </div>
        )
    }

    render() {
        const { planets } = this.props;
        return (
            <div className="container">
                <h3>Search Page</h3>
                <div className="row">
                    <input className="search-box" onChange={this.changehandler} type="text" name="search" placeholder="Search.."/>
                </div>

                <div class="row">
                        {this.createGroup(planets)}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state,ownProps){
  return{
      planets: state.planets
  }
}

export default connect(mapStateToProps)(SearchPage);