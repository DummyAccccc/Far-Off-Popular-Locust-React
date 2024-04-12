import React from 'react'

import { Helmet } from 'react-helmet'

import UiComponentPackage from '../components/ui-component-package'
import './ui-packages.css'

const UIPackages = (props) => {
  return (
    <div className="ui-packages-container">
      <Helmet>
        <title>UI-packages - Far Off Popular Locust</title>
        <meta
          property="og:title"
          content="UI-packages - Far Off Popular Locust"
        />
      </Helmet>
      <div className="ui-packages-features">
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="ui-packages-slider swiper"
        >
          <div
            data-thq="slider-wrapper"
            className="ui-packages-slider-wrapper swiper-wrapper"
          >
            <div
              data-thq="slider-slide"
              className="ui-packages-slider-slide swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="ui-packages-slider-slide1 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="ui-packages-slider-slide2 swiper-slide"
            ></div>
          </div>
          <div
            data-thq="slider-pagination"
            className="ui-packages-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
      </div>
      <span className="ui-packages-text">
        <span>
          React Awesome UI is a comprehensive library of beautifully designed
          and customizable
        </span>
        <br></br>
        <span>
          {' '}
          React components, crafted to enhance the user interface and user
          experience of your
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>
          web applications. With a focus on simplicity and performance, each
          component is
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>
          carefully built to be easily integrated into your project, saving you
          time and effort in
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>designing and implementing common UI elements.</span>
      </span>
      <div className="ui-packages-container1">
        <div className="ui-packages-container2">
          <button type="button" className="ui-packages-button button">
            Demo UI
          </button>
          <button type="button" className="ui-packages-button1 button">
            Components
          </button>
          <button type="button" className="ui-packages-button2 button">
            Examples
          </button>
          <button type="button" className="ui-packages-button3 button">
            Package
          </button>
        </div>
      </div>
      <UiComponentPackage rootClassName="ui-component-package-root-class-name"></UiComponentPackage>
    </div>
  )
}

export default UIPackages
