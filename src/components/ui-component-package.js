import React from 'react'

import PropTypes from 'prop-types'

import './ui-component-package.css'

const UiComponentPackage = (props) => {
  return (
    <div className={`ui-component-package-container ${props.rootClassName} `}>
      <div className="ui-component-package-container1">
        <div className="ui-component-package-feature-card button">
          <span className="ui-component-package-text">{props.text2}</span>
          <span className="ui-component-package-text01">{props.text11}</span>
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="ui-component-package-image"
          />
        </div>
        <div className="ui-component-package-feature-card1 button">
          <span className="ui-component-package-text02">Header</span>
          <span className="ui-component-package-text03">{props.text113}</span>
          <img
            alt={props.imageAlt2}
            src={props.imageSrc2}
            className="ui-component-package-image1"
          />
        </div>
        <div className="ui-component-package-feature-card2 button">
          <span className="ui-component-package-text04">Home Page</span>
          <span className="ui-component-package-text05">{props.text1131}</span>
          <img
            alt={props.imageAlt21}
            src={props.imageSrc21}
            className="ui-component-package-image2"
          />
        </div>
      </div>
      <div className="ui-component-package-container2">
        <div className="ui-component-package-feature-card3 button">
          <span className="ui-component-package-text06">Footer</span>
          <span className="ui-component-package-text07">{props.text1141}</span>
          <img
            alt={props.imageAlt31}
            src={props.imageSrc}
            className="ui-component-package-image3"
          />
        </div>
        <div className="ui-component-package-feature-card4 button">
          <span className="ui-component-package-text08">Form</span>
          <span className="ui-component-package-text09">{props.text114}</span>
          <img
            alt={props.imageAlt3}
            src={props.imageSrc}
            className="ui-component-package-image4"
          />
        </div>
        <div className="ui-component-package-feature-card5 button">
          <span className="ui-component-package-text10">Header</span>
          <span className="ui-component-package-text11">{props.text1142}</span>
          <img
            alt={props.imageAlt32}
            src={props.imageSrc}
            className="ui-component-package-image5"
          />
        </div>
      </div>
    </div>
  )
}

UiComponentPackage.defaultProps = {
  text11111: '500+ items sold',
  imageAlt21: 'image',
  imageAlt3: 'image',
  text21: 'Form',
  imageAlt1: 'image',
  text1131: '500+ items sold',
  text2111: 'Form',
  text: 'Header',
  text212: 'Form',
  imageAlt32: 'image',
  text1111: '500+ items sold',
  text22: 'Form',
  text241: 'Form',
  text211: 'Form',
  text113: '500+ items sold',
  imageAlt: 'image',
  text1141: '500+ items sold',
  imageAlt31: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxmb3JtfGVufDB8fHx8MTcxMjM4MTI0M3ww&ixlib=rb-4.0.3&w=200',
  text1112: '500+ items sold',
  text2: 'Form',
  text24: 'Form',
  text11: '500+ items sold',
  text3: 'Form',
  text231: 'Form',
  imageSrc1:
    'https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxmb3JtfGVufDB8fHx8MTcxMjM4MTI0M3ww&ixlib=rb-4.0.3&w=200',
  text242: 'Form',
  text12: '500+ items sold',
  text111: '500+ items sold',
  text112: '500+ items sold',
  text23: 'Header',
  text114: '500+ items sold',
  imageSrc2:
    'https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxmb3JtfGVufDB8fHx8MTcxMjM4MTI0M3ww&ixlib=rb-4.0.3&w=200',
  rootClassName: '',
  text1142: '500+ items sold',
  imageSrc21:
    'https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxmb3JtfGVufDB8fHx8MTcxMjM4MTI0M3ww&ixlib=rb-4.0.3&w=200',
  text1: '500+ items sold',
  imageAlt2: 'image',
}

UiComponentPackage.propTypes = {
  text11111: PropTypes.string,
  imageAlt21: PropTypes.string,
  imageAlt3: PropTypes.string,
  text21: PropTypes.string,
  imageAlt1: PropTypes.string,
  text1131: PropTypes.string,
  text2111: PropTypes.string,
  text: PropTypes.string,
  text212: PropTypes.string,
  imageAlt32: PropTypes.string,
  text1111: PropTypes.string,
  text22: PropTypes.string,
  text241: PropTypes.string,
  text211: PropTypes.string,
  text113: PropTypes.string,
  imageAlt: PropTypes.string,
  text1141: PropTypes.string,
  imageAlt31: PropTypes.string,
  imageSrc: PropTypes.string,
  text1112: PropTypes.string,
  text2: PropTypes.string,
  text24: PropTypes.string,
  text11: PropTypes.string,
  text3: PropTypes.string,
  text231: PropTypes.string,
  imageSrc1: PropTypes.string,
  text242: PropTypes.string,
  text12: PropTypes.string,
  text111: PropTypes.string,
  text112: PropTypes.string,
  text23: PropTypes.string,
  text114: PropTypes.string,
  imageSrc2: PropTypes.string,
  rootClassName: PropTypes.string,
  text1142: PropTypes.string,
  imageSrc21: PropTypes.string,
  text1: PropTypes.string,
  imageAlt2: PropTypes.string,
}

export default UiComponentPackage
