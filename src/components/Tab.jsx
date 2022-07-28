/**
 * It can be used to show a Tab.
 *
 * @param {string} section1 Used to render the name of the first section.
 * @param {string} section2 Used to render the name of the second section.
 * @param {string} section3 Used to render the name of the third section.
 * @param {string} content1 Used to render the name of the first section.
 * @param {string} content2 Used to render the name of the second section.
 * @param {string} content3 Used to render the name of the third section.
 */

import React from 'react';
import PropTypes from 'prop-types';

export const Tab = ({
  section1,
  section2,
  section3,
  content1,
  content2,
  content3,
  backgroundColor,
}) => {
  const [toggleState, setToggleState] = React.useState(1);

  const toggleTab = index => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              onClick={() => toggleTab(1)}
              className={
                toggleState === 1
                  ? 'inline-block p-4 rounded-t-lg border-b-2'
                  : 'inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
              }
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              {section1}
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              onClick={() => toggleTab(2)}
              className={
                toggleState === 2
                  ? 'inline-block p-4 rounded-t-lg border-b-2'
                  : 'inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
              }
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              {section2}
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              onClick={() => toggleTab(3)}
              className={
                toggleState === 3
                  ? 'inline-block p-4 rounded-t-lg border-b-2'
                  : 'inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
              }
              id="settings-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              {section3}
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div
          className={
            toggleState === 1
              ? 'p-4 bg-gray-50 rounded-lg dark:bg-gray-800'
              : 'hidden'
          }
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">{content1}</p>
        </div>
        <div
          className={
            toggleState === 2
              ? 'p-4 bg-gray-50 rounded-lg dark:bg-gray-800'
              : 'hidden'
          }
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">{content2}</p>
        </div>
        <div
          className={
            toggleState === 3
              ? 'p-4 bg-gray-50 rounded-lg dark:bg-gray-800'
              : 'hidden'
          }
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">{content3}</p>
        </div>
      </div>
    </div>
  );
};

Tab.propTypes = {
  section1: PropTypes.string.isRequired,
  section2: PropTypes.string.isRequired,
  section3: PropTypes.string.isRequired,
  content1: PropTypes.string.isRequired,
  content2: PropTypes.string.isRequired,
  content3: PropTypes.string.isRequired,
};
