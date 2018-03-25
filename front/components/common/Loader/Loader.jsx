import React from 'react';
import './Loader.css';

const Loader = props => (
  <div className="Spinner">
    <div className="Spinner-line Spinner-line--1">
      <div className="Spinner-line-cog">
        <div className="Spinner-line-cog-inner Spinner-line-cog-inner--left" />
      </div>
      <div className="Spinner-line-ticker">
        <div className="Spinner-line-cog-inner Spinner-line-cog-inner--center" />
      </div>
      <div className="Spinner-line-cog">
        <div className="Spinner-line-cog-inner Spinner-line-cog-inner--right" />
      </div>
    </div>
    <div className="Spinner-line Spinner-line--2">
      <div className="Spinner-line-cog">
        <div className="Spinner-line-cog-inner Spinner-line-cog-inner--left" />
      </div>
      <div className="Spinner-line-ticker">
        <div className="Spinner-line-cog-inner Spinner-line-cog-inner--center" />
      </div>
      <div className="Spinner-line-cog">
        <div className="Spinner-line-cog-inner Spinner-line-cog-inner--right" />
      </div>
      <div className="Spinner-line Spinner-line--3">
        <div className="Spinner-line-cog">
          <div className="Spinner-line-cog-inner Spinner-line-cog-inner--left" />
        </div>
        <div className="Spinner-line-ticker">
          <div className="Spinner-line-cog-inner Spinner-line-cog-inner--center" />
        </div>
        <div className="Spinner-line-cog">
          <div className="Spinner-line-cog-inner Spinner-line-cog-inner--right" />
        </div>
      </div>
      <div className="Spinner-line Spinner-line--4">
        <div className="Spinner-line-cog">
          <div className="Spinner-line-cog-inner Spinner-line-cog-inner--left" />
        </div>
        <div className="Spinner-line-ticker">
          <div className="Spinner-line-cog-inner Spinner-line-cog-inner--center" />
        </div>
        <div className="Spinner-line-cog">
          <div className="Spinner-line-cog-inner Spinner-line-cog-inner--right" />
        </div>
      </div>
    </div>
  </div>
);

export default Loader;