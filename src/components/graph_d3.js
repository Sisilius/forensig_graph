import React, { useState, useEffect } from 'react';
import { Graph } from "react-d3-graph";
import { socialNetwork } from './network';
import { config } from './graph_config';
import IncidentInfo from './incidentInfo';

function Graph_d3(){
    
    const [selectedIncident, setSelectedIncident] = useState(null)
    const [data, setData] = useState(socialNetwork)
    const [graph, setGraph] = useState({ nodes: [], links: [] });

    useEffect(() => {
      const nodes = data.nodes
      const links = data.links
  
      setGraph({
        nodes,
        links
      })
    }, [data])

    const onClickNode = function(nodeId) {
      console.log(nodeId);
      const selectedNode = data.nodes.find((i) => i.id === nodeId);
      setSelectedIncident(selectedNode);
  };

    const onRightClickNode = function(_, nodeId) {
      console.log(data.nodes.find((i) => i.id === nodeId))
    }

    return(
        <div> 
        <div style={{border: '2px solid grey'}}>
          <Graph
          id="graph-id" // id is mandatory
          data={graph}
          config={config}
          onClickNode={onClickNode}
          onRightClickNode={onRightClickNode}
        />
        </div>

        {selectedIncident &&
        <IncidentInfo
         incident={selectedIncident}
        />}
      </div>
    )
}

export default Graph_d3;