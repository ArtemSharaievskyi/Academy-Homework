# React Homework #3: Components, Props, children, Conditional Rendering
This project is a homework assignment demonstrating the use of React components, props, conditional rendering, and basic styling with CSS Grid.

## Task
1. **Creating the Application**
- create-react-app is used to initialize a new React application.

2. **HomeworkPage Component**
- A wrapper component HomeworkPage has been created, which imports styles from HomeworkPage.css
- The component uses CSS Grid for positioning child components.

3. **Creating Components**
- **Header, Footer, Sidebar**
- Separate components Header, Footer, and Sidebar have been created.
- Each of these components receives an object with arbitrary information (e.g., title and description) via props.
- **Content**
- A Content component has been created, which defines an object with two fields: title and describe.
- The object's data is displayed using JSX
- **Count**
-Inside the Content component, a Count component is embedded, implementing a simple counter using the React useState hook.
- The counter includes buttons for increasing and decreasing the value.

4. **Styling**

- The HomeworkPage.css file contains styles for positioning and formatting the components (Header, Footer, Sidebar, Content) using CSS Grid.

5. **Git Configuration**

- A .gitignore file has been added to exclude the node_modules folder, build files, log files, environment files, and other unnecessary files from version control.