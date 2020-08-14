import React, { Component } from 'react';
import './player.scss';

export default class PlayerList extends Component {
  render() {
    return (
      <div className="player-list-outer-container">
        <div className="player-list-inner-container">
          <div className="player-list">
            <p className="player-id">
              {this.props.playerID}
            </p>
          </div>
          <div className="player-list">
            <p className="player-tag">
              {this.props.gamerTag}
            </p>
          </div>
          <div className="player-list">
            <p className="player-name">
              {this.props.playerName}
            </p>
          </div>
          <div className="player-list">
            <p className="player-total">
              $ {this.props.playerTotal}
            </p>
          </div>
          <div className="player-list">
            <p className="player-overall">
              $ {this.props.playerOverall}
            </p>
          </div>
          <div className="player-list">
            <p className="player-percent">
              {this.props.percentTotal} %
            </p>
          </div>
        </div>
      </div>
    )
  }
}
