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
 import { Tab } from '@headlessui/react';
 import PropTypes from 'prop-types';
 export const Tabs = ({
   section1,
   section2,
   section3,
   content1,
   content2,
   content3,
   backgroundColor,
 }) => {
   const [toggleState, setToggleState] = React.useState(1);
   function classNames(...classes) {
     return classes.filter(Boolean).join(' ');
   }
   const toggleTab = index => {
     setToggleState(index);
   };
   return (
     <Tab.Group>
       <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
         <Tab
           className={({ selected }) =>
             classNames(
               'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
               'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
               selected
                 ? 'bg-white shadow'
                 : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
             )
           }
         >
           {section1}
         </Tab>
         <Tab
           className={({ selected }) =>
             classNames(
               'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
               'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
               selected
                 ? 'bg-white shadow'
                 : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
             )
           }
         >
           {section2}
         </Tab>
         <Tab
           className={({ selected }) =>
             classNames(
               'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
               'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
               selected
                 ? 'bg-white shadow'
                 : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
             )
           }
         >
           {section3}
         </Tab>
       </Tab.List>
       <Tab.Panels className="mt-2">
         <Tab.Panel
           className={classNames(
             'rounded-xl bg-white p-3',
             'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
           )}
         >
             {content1}
         </Tab.Panel>
         <Tab.Panel
           className={classNames(
             'rounded-xl bg-white p-3',
             'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
           )}
         >
             {content2}
         </Tab.Panel>
         <Tab.Panel
           className={classNames(
             'rounded-xl bg-white p-3',
             'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
           )}
         >
             {content3}
         </Tab.Panel>
       </Tab.Panels>
     </Tab.Group>
   );
 };

 Tabs.propTypes = {
   section1: PropTypes.string.isRequired,
   section2: PropTypes.string.isRequired,
   section3: PropTypes.string.isRequired,
   content1: PropTypes.string.isRequired,
   content2: PropTypes.string.isRequired,
   content3: PropTypes.string.isRequired,
 };
