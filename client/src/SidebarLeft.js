import React from 'react';
import './sidebar.css';
import SearchBox from './SearchBox'; 
import { useState } from 'react';
import './sidebarright.css'
import './horizontalbar.css'

const SidebarLeft = ({ buildingOptions, handleStartNodeChange, handleEndNodeChange, handleCalculateRoute, handleTravelTypeChange, travelType}) => {

  const [activeSection, setActiveSection] = useState('');

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection('');
    } else {
      setActiveSection(section);
    }
  };
 

  
    
  return (
        <div id="sidebarLeft">
          <div id="titleElements">
            <h1 id="title">Harita Hacettepe</h1>
            <span id="title-slant" className="uw-slant-large"></span>
          </div>
          <div id="nav-header-container">
            <h5 id="navHeader" className="header">ROTA PLANLAYICI</h5>
            <img
              id="nav-info"
              className="info-icon"
              alt="information"
              src="assets/logos/route-icon-trendy-flat-style-260nw-418178818.webp"
            ></img>
          </div>
          <span className="uw-slant"></span>
          
          <div className="inputs contentSection">
            <div className="inputDiv">
              <SearchBox
                name="startNode"
                id="startNode"
                options={buildingOptions}
                placeholder="Başlangıç Noktası"
                onChange={handleStartNodeChange}
              />
            </div>
            <div className="inputDiv">
              <SearchBox
                name="endNode"
                id="endNode"
                options={buildingOptions}
                placeholder="Varış Noktası"
                onChange={handleEndNodeChange}
              />
            </div>
            <div className="inputDiv">
               <div className="transport-options">
                  <label htmlFor="yaya">
                    <input type="radio" id="yaya" name="transport" value="yaya" checked={travelType === "yaya"} onChange={handleTravelTypeChange} />
                    <img src="assets/logos/yaya-logo.png" alt="Yaya" />
                  </label>
                  <label htmlFor="araba">
                    <input type="radio" id="araba" name="transport" value="araba" checked={travelType === "araba"} onChange={handleTravelTypeChange} />
                    <img src="assets/logos/araba-logo.png" alt="Araba" />
                  </label>
                  <label htmlFor="engelli">
                    <input type="radio" id="engelli" name="transport" value="engelli" checked={travelType === "engelli"} onChange={handleTravelTypeChange} />
                    <img src="assets/logos/engelli-logo.png" alt="Engelli" />
                  </label>
                  <label htmlFor="bisiklet">
                    <input type="radio" id="bisiklet" name="transport" value="bisiklet" checked={travelType === "bisiklet"} onChange={handleTravelTypeChange} />
                    <img src="assets/logos/bisiklet-logo.png" alt="Bisiklet" />
                  </label>
                </div>
            </div>
            <button className="navBtn" onClick={handleCalculateRoute}>
              Rota Oluştur
            </button>
          </div>

          {/* Binalar */}
          <h6 id="buildingsHeader" className="header" onClick={() => toggleSection('binalar')}>
            BİNALAR
          </h6>
          <span className="uw-slant"></span>
          <div id="buildingsSection" className={`contentSection ${activeSection === 'binalar' ? 'is-expanded' : 'is-collapsed'}`}>
            {activeSection === 'binalar' && (
              <>
                <input type="text" className="searchBar" id="buildingsSearch" placeholder="Bina Arayın..." />
                <div id="building-container" className="vertical-menu">
                  {/* [Dynamically Added] */}
                </div>
              </>
            )}
          </div>

          {/* Yemekhane */}
          <h6 id="buildingsHeader" className="header" onClick={() => toggleSection('yemekhaneler')}>
            YEMEKHANELER
          </h6>
          <span className="uw-slant"></span>
          <div id="buildingsSection" className={`contentSection ${activeSection === 'yemekhaneler' ? 'is-expanded' : 'is-collapsed'}`}>
            {activeSection === 'yemekhaneler' && (
              <>
                <input type="text" className="searchBar" id="buildingsSearch" placeholder="Bina Arayın..." />
                <div id="building-container" className="vertical-menu">
                  {/* [Dynamically Added] */}
                </div>
              </>
            )}
          </div>
          {/* Kütüphane */}    
          <h6 id="buildingsHeader" className="header" onClick={() => toggleSection('Kütüphaneler')}>
            KÜTÜPHANELER
          </h6>
          <span className="uw-slant"></span>
          <div id="buildingsSection" className={`contentSection ${activeSection === 'Kütüphaneler' ? 'is-expanded' : 'is-collapsed'}`}>
            {activeSection === 'Kütüphaneler' && (
              <>
                <input type="text" className="searchBar" id="buildingsSearch" placeholder="Bina Arayın..." />
                <div id="building-container" className="vertical-menu">
                  {/* [Dynamically Added] */}
                </div>
              </>
            )}
          </div>
          
   
      
    
    <div className="sidebarRight">
      <img id="logo" src="assets/logos/55.png" alt="" />
    </div>

    <div id="horizontalBarId" className="horizontalBar">
      <img id="startMarker" className="marker" alt="Start Point Icon" src="assets/markerIcons/location-pin.png" />
      <p id="from" className="tofrom">Başlangıç Noktası</p>
    <div className="horizontalSpacer"></div>
      <img id="endMarker" className="marker" alt="End Point Icon" src="assets/markerIcons/route_2.png" />
      <p id="to" className="tofrom">Varış Noktası</p>
    <div className="bar">  </div>
      <div id="distance"> Seyahat Tipi: {travelType}  </div>

    <div id="locationIconDiv" title="Hacettepe Üniversitesi">
      <a href ="https://www.hacettepe.edu.tr/" aria-label="Hacettepe Üniversitesi" target="_blank" rel="noreferrer">
        <img id="locationIcon" src="assets/miscIcons/hu_logo.svg" alt="//:0"></img>
      </a>
    </div>
    <div className="githubIconDiv" title="Proje GitHub Sayfası">
      <a href ="https://github.com/banbar/harita.hacettepe.edu.tr" aria-label="Proje GitHub Sayfası" target="_blank" rel="noreferrer">
        <img alt="GitHub Icon" src="assets/miscIcons/GithubIcon.png" id="githubIcon" ></img>
      </a>
      
    </div> 
    
    </div>


    
  </div>
 
 
  );
};

export default SidebarLeft;