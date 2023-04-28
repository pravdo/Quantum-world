import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
// import { FaLinkedin } from 'react-icons/fa';

import { ReactComponent as MainLogo } from '../images/main-logo.svg';

const Footer = () => {
  return (
    <>
      <Container className="top">
        <MainLogo alt="main" style={{ maxWidth: '10rem', maxHeight: '6rem' }} />
        <div className="links">
          <div>
            <h2>Platform</h2>
            <p>Direct</p>
          </div>
          <div>
            <h2>Cloud</h2>
            <p>Core</p>
          </div>
        </div>
      </Container>
      <Container className="bottom">
        <div className="legal">
          &copy; {new Date().getFullYear()}
          <span> Quantum World </span>
          <h5>All rights reserved</h5>
        </div>

        <div className="links">
          {/* <a className='fa-brands fa-github'></a> */}
          <FontAwesomeIcon
            icon={faAddressCard}
            style={{ fill: '#2980B9', height: '2em', width: '2em' }}
          />
          <FontAwesomeIcon icon="fa-brands fa-twitter" />
          {/* <FontAwesomeIcon
            icon={FaLinkedin}
            style={{ fill: '#2980B9', height: '2em', width: '2em' }}
          /> */}
        </div>
      </Container>
    </>
  );
};

const Container = styled.footer`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  margin: 0 30px;
  color: #a2b5cd;

  &.top {
    border-bottom: 2px solid #3a4f6a;
    padding-bottom: 20px;

    .links {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }

    .legal span {
      font-weight: bold;
      color: #fff;
    }
  }

  &.bottom {
    padding: 20px 0;
    justify-content: space-between;
  }

  &.links > div {
    display: grid;
    gap: 10px;
    margin-top: 30px;
  }

  & h2 {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    color: #f7f7f7;
  }

  &.legal {
    font-size: 12px;
  }

  &.legal > p {
    margin: 0 4px;
  }

  &.legal > span {
    margin-right: 10px;
  }

  &.bottom {
    .links {
      display: flex;
      gap: 18px;
    }
  }

  @media (width >=620px) {
    & {
      margin: 0 auto;
      max-width: 600px;
      padding: 0;
    }
  }

  &.bottom {
    .links > p {
      font-size: 24px;
    }
  }

  @media (width < 420px) {
    & {
      text-align: center;
      align-items: center;
    }

    &.top {
      .links {
        grid-template-columns: 1fr;
      }
    }

    &.bottom {
      align-items: center;
    }

    &.legal {
      span {
        display: block;
        margin-right: 0;
        margin-bottom: 2px;
      }
    }
  }
`;

export default Footer;
