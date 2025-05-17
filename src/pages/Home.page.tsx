import React from 'react';
import './styles.css';

import subsurfaceEquipment from '../static/subsurface-equipment.webp';
import { IconChessKnight, IconMapCheck, IconMapPin, IconWorld } from '@tabler/icons-react';

export const HomePage: React.FC = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content main-container">
          <h1>Welcome to CCUS Tools – Your Trusted Partner for Energy Equipment Sourcing.</h1>

          <p>
            We specialize in sourcing upstream oil and gas equipment from subsurface to surface,
            including Carbon Capture, Utilization, and Storage (CCUS) technologies.
          </p>
          <p>
            Serving Saudi Arabia, UAE, Qatar, and Oman. Explore our offerings or request a custom
            quote today.
          </p>
          <a href="#equipment" className="btn-primary">
            Request a Quote
          </a>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="categories">
        <h2>Equipment Categories</h2>
        <div className="category-cards">
          <div className="card">
            <div className="image-container">
              <img src={subsurfaceEquipment} alt="Subsurface Equipment" />
            </div>
            <div className="content">
              <h3>Subsurface Equipment</h3>
              <p>
                Drilling Tools, Casings, MWD/LWD, Wellheads, Coiled Tubing Unit, Wireline and
                Sclickline tools and equipment
              </p>
            </div>
          </div>
          <div className="card">
            <div className="image-container">
              {/* <img src={surfaceEquipment} alt="Surface Equipment" /> */}
            </div>
            <div className="content">
              <h3>Surface Equipment</h3>
              <p>Separators, Pipelines, Well Testing Packages</p>
            </div>
          </div>
          <div className="card">
            <div className="image-container">
              {/* <img src={ccusEquipment} alt="CCUS Equipment" /> */}
            </div>
            <div className="content">
              <h3>CCUS Equipment</h3>
              <p>CO₂ Capture Units, Compressors, Injection Tools, Sensors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2>Why Choose CCUS Tools</h2>
        <div className="features">
          <div className="feature">
            <IconChessKnight />
            <h4>Our Vision</h4>
            <p>
              To be the most trusted sourcing partner for energy equipment across traditional and
              low-carbon markets.
            </p>
          </div>
          <div className="feature">
            <IconMapCheck />
            <h4>Our Mission</h4>
            <p>
              To deliver technically sound, cost-effective, and timely equipment solutions by
              leveraging a global vendor network and regional expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Need a Quote?</h2>
        <a href="#contact" className="btn-primary">
          Request Equipment Info
        </a>
      </section>
    </div>
  );
};
