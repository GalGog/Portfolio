import React from 'react';



//Import utils
import Supporter from "./Supporter";
import latestprojectsdata from '../../assets/data/latestprojectsdata';



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
                <div key={latestprojectsdata.indexOf(group)}>
                    <Supporter
                        key={group.name}
                        {...group}
                    />
                </div>

            );
        });
    }

    render(){
        return <div className="ui doubling three column grid">
            {this.renderRows()}
        </div>



    }
}



export default LatestProjects;
