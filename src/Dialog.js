import React, { Component, Image } from 'react';

import MapContainer from './Map.js';

//importing dialogs
import Part0 from './part0/dialog.json';
import Part1 from './part1/dialog.json';
import Part2 from './part2/dialog.json';
import Part3 from './part3/dialog.json';
import Part4 from './part4/dialog.json';
import Part5 from './part5/dialog.json';
import Part6 from './part6/dialog.json';
import Part7 from './part7/dialog.json';
import Part8 from './part8/dialog.json';
import Part9 from './part9/dialog.json';
import Part10 from './part10/dialog.json';
import Part11 from './part11/dialog.json';

class Dialog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      rawData: [Part0,Part1,Part2,Part3,Part4,Part5,Part6,Part7,Part8,Part9,Part10,Part11],
      currentViewID: 0
    }
  }

  componentDidMount() {

  }


  contentRend = (orgin, time, content) => {
    switch(orgin) {
      case "bot":
        return (
          <div className="contContainer">
            <p className="botContent">{content}</p>
            <p className="botTime">{time}</p>
          </div>
        );
        break;
      case "human":
        return (
          <div className="contContainer">
            <p className="humanContent">{content}</p>
            <p className="humanTime">{time}</p>
          </div>
        );
        break;
      case "img":
        return (
          <div className="contContainer">
            <img src={require(`./part${this.state.currentViewID}/${content}`)} width="60%" />
            <p className="imgTime">{time}</p>
          </div>
        )
        break;
      case "geo":
        return (
          <div className="contContainer" style={{ height: 10 }}>
            <MapContainer geo={content}/>
          </div>
        )
        break;
    }
  }

  dialogRend = () => {
    return(
      this.state.rawData[this.state.currentViewID].map(x => {
        return (<div key={x.id} className={x.orgin}>{this.contentRend(x.orgin, x.time, x.message)}</div>)
      })
    )
  }

  filterRend = () => {
    const PartItems = this.state.rawData.map((number, index) => <li className="filterItem" key={index} onClick={(e) => {this.updateViewID(index)}}>{`part${index}`}</li>);
    return (
      <ul>{PartItems}</ul>
    )
  }

  updateViewID = (partID) => {
    this.setState({currentViewID: partID})
  }

  render() {
    return (
      <div className="Container">
        <div className="filter">
          {this.filterRend()}
        </div>
        <div className="Dialog">
          { this.dialogRend() }
        </div>
      </div>
    );
  }
}

export default Dialog;
