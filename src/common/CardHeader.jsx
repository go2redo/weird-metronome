import React from "react";

const CardHeader = ({ bpm, count }) => {
  return (
    <header className="uk-card-header">
      <div className="uk-grid-small uk-flex-middle">
        <div className="uk-width-expand">
          <h1 className="App-title">Weird-react-metronome</h1>
          <p className="uk-text-meta uk-margin-remove-top">
            <time>
              {bpm}: BPM | {count} : count
            </time>
          </p>
        </div>
      </div>
    </header>
  );
};

export default CardHeader;
