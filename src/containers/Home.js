import React, { useState, useReducer } from 'react';
import IFrame from 'react-iframe';
import { Button, SearchField } from '../components';
import { deleteAllDomainCookies, deleteAllCookies, deleteAllCookies2, getFrameUrl } from '../utils';
import './home.scss';

const Home = () => {
  const [search, setSearch] = useState('');
  const [showFrame, setShowFrame] = useReducer((_, value) => value, false);

  const onChange = event => {
    const { target: { value = '' } = {} } = event;
    setSearch(value);
  };

  const onFrameToggle = () => {
    deleteAllCookies();
    deleteAllCookies2();
    deleteAllDomainCookies();

    setShowFrame(!showFrame);
  };

  const onFrameClose = () => {
    setShowFrame(false);
    setSearch('');
  };

  const getCookieWarningDom = () => {
    const { navigator: { cookieEnabled = true } = {} } = window;

    if (cookieEnabled) {
      return (
        <div style={{ display: 'flex', color: 'red', fontSize: '12px' }}>
          You need to disable cookies for some sites to work.
        </div>
      );
    }
  };

  const getSearchDom = () => {
    let className = 'search-page-middle';
    let containerClassname = 'container';
    if (showFrame) {
      containerClassname = null;
      className = 'search-start-middle';
    }
    return (
      <div className={containerClassname}>
        <div className={className}>
          <SearchField disabled={showFrame} value={search} onChange={onChange} />
          <Button text="Go" onClick={onFrameToggle} style={{ marginLeft: '4px' }} />
          {showFrame && (
            <Button style={{ marginLeft: 'auto' }} text="Close" onClick={onFrameClose} />
          )}
        </div>
        {!showFrame && getCookieWarningDom()}
      </div>
    );
  };

  const getFrameDom = () => {
    if (!showFrame || !search) {
      return null;
    }

    const sanitizedURL = getFrameUrl(search);

    return (
      <IFrame
        url={sanitizedURL}
        width={window.screen.availWidth}
        sandbox={['allow-scripts', 'allow-same-origin']}
        height={window.screen.availHeight}
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
      />
    );
  };

  return (
    <>
      {getSearchDom()}
      {getFrameDom()}
    </>
  );
};

export default Home;
