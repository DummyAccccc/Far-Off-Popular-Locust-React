import React from 'react'

import { Helmet } from 'react-helmet'

import './create-package.css'

const CreatePackage = (props) => {
  return (
    <div className="create-package-container">
      <Helmet>
        <title>create-package - Far Off Popular Locust</title>
        <meta
          property="og:title"
          content="create-package - Far Off Popular Locust"
        />
      </Helmet>
      <span className="create-package-text">Create a Package</span>
      <input
        type="text"
        placeholder="Title of Theme"
        className="create-package-textinput input"
      />
      <input
        type="text"
        placeholder="Description"
        className="create-package-textinput1 input"
      />
      <div className="create-package-container1"></div>
      <input
        type="text"
        placeholder="Title of Component"
        className="create-package-textinput2 input"
      />
      <div
        data-thq="thq-dropdown"
        className="create-package-thq-dropdown list-item"
      >
        <div
          data-thq="thq-dropdown-toggle"
          className="create-package-dropdown-toggle"
        >
          <span className="create-package-text1">Menu Item</span>
          <div
            data-thq="thq-dropdown-arrow"
            className="create-package-dropdown-arrow"
          >
            <svg viewBox="0 0 1024 1024" className="create-package-icon">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
          </div>
        </div>
        <ul
          data-thq="thq-dropdown-list"
          className="create-package-dropdown-list"
        >
          <li
            data-thq="thq-dropdown"
            className="create-package-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="create-package-dropdown-toggle1"
            >
              <span className="create-package-text2">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="create-package-dropdown1 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="create-package-dropdown-toggle2"
            >
              <span className="create-package-text3">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="create-package-dropdown2 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="create-package-dropdown-toggle3"
            >
              <span className="create-package-text4">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CreatePackage
