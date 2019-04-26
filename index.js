import React from 'react';


// Components
import Supporter from "./Supporter";
import latestprojectsdata from '../../assets/data/latestprojectsdata';
import styledCompnLatestProjects from './styledCompnLatestProjects.css';



class LatestProjects extends React.Component {
    constructor(props) {
        super(props);

        this.renderRows = this.renderRows.bind(this);
    }

    shouldComponentUpdate() {
        return false;
    }

    renderRows() {
        return latestprojectsdata.map((group) => {
            return (
                <div className="content-upp" key={latestprojectsdata.indexOf(group)}>
                    <Supporter
                        key={group.name}
                        {...group}
                    />
                </div>

            );
        });
    }

    render(){
        return <div>
            {this.renderRows()}
        </div>



    }
}



export default LatestProjects;
