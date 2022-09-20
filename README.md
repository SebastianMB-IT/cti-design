# **CTI Design**

CTI Design is a Components Library made for creating consistent, usable and accessible communication platforms in the browser.

- Based on: [Tailwind](https://tailwindcss.com/)
- Figma design file: [CTI Design Figma](https://www.figma.com/community/file/1149758596138467720)
- Built on Storybook: [Storybook](https://storybook.js.org/)
- Repo: [Github](git@github.com:SebastianMB-IT/cti-design.git)

**ANALYSIS STEPS**

- Apply the Atomic Design concepts
- Start from Atoms
- Analize the old UI and get screens of the elments 
- Create boards categorize elements and merge them
- Repeat for Molecules -> Organisms -> Templates -> Pages

**DESIGN STEPS**

- Create the design inside the Figma design file
- Validate the design with the team members
- Implement the designed component
- The components already made can be very usefull as inspiration

**REPO STRUCTURE**

- The components are in src/components each one inside a specific directory
- Files can have .jsx or .tsx extensions for JS/React files
- The same rules are applied to templates but they are in src/templates
- In conclusion components, stories and tests are in the same directory
- The other files and directories in the repository are for configuration an build steps

**DEVELOPMENT STEPS**

- Start development with Storybook:
```
npm run storybook
```
- After the analisys steps it’s time to merge elements creating components and templates
- Components are base components and templates are more complex components
- All components logic is implemented using React
- The components development  follows the CDD approach driven by Storybook

**CREATING A COMPONENT**

- Add a new directory named Component in src/components
- Create a Component.tsx/.jsx file for the logic with React
- Create a Component.stories.tsx/.jsx file for Storybook stories
- Create a Component.test.tsx/.jsx file for Unit Tests with Jest and React Testing Library
- Do the same things in templates for a new template
- Add examples and code snippets to the [CTI Design Site](https://github.com/SebastianMB-IT/cti-design-site)

**TESTING A COMPONENT**

- Test that the component renders without crash
- Test that the component renders correctly the props

**COMPONENT DOCS**

- Document how the component can be used
- Document the properties of the component with types

**BUILD & RELEASE STEPS**

- Build the library:
```
npm run build
```
- Publish the library on npm using the np command and cli
- Ensure that you are logged in on npm and your account is inside collaborators

_To see all the npm scripts available check the [package.json](https://github.com/SebastianMB-IT/cti-design/blob/master/package.json)._