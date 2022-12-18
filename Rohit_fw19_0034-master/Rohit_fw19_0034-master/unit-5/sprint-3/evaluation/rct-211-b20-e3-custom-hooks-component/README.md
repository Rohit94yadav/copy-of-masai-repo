## Testing Objectives for Students
1. The user should be able to create his own custom hooks, that cover most of the edge-cases, related to its functionality.
2. The user should be able to use "PropTypes" for type-checking the props that the component receives.
3. The user should be able to create his own custom React components. The components should function properly when the user passes the required props.

## Understanding Component Structure
- App
    - Todos1
    - Todos2
    - Image
    - Button

## App-view
- ![](https://i.imgur.com/6KSrwz6.png)

## Description
### Part-1: Custom Hooks
- Implement the `useTodos` custom hook
- The `useTodos` hook expects to get an array of todos/tasks, as the argument. Expect to get this initial data from the parent prop itself.
For example, initialData could be `initialData={['Task1', 'Task2']}`
- In-case the arguments are not present, take `['Task1']` to be the default parameter, in the useTodos hook

```JavaScript
 const {data, addData, clearData, removeDataByIndex, } = useTodos(initialData)
```
- `data` is the variable containing the array of todos, while the rest are functions
- `addData` is the function that adds the new todo/task to the end of the todos list.
- `clearData` function clears, all the todos, and initializes it back to an empty array.
- `removeDataByIndex` function takes index, as parameter, and removes the todos from the array, based on the index from the array.
- The idea is that you should be able to re-use the common todos logic, at 2 different components, without writing it twice.


#### Todos1 and Todos2
- Both of these hooks should accept `initialData` as props 
- Use the `useTodos` hooks inside both of these components to create a mini-todo application
    - addData: to add the task present in the input box, when the user clicks on the "Add Task" button.
    - removeDataByIndex: to remove the task present, by calling the function with the task index, when the user clicks on "Delete" button
    - clearData: to remove all the existing tasks data, when the user clicks on the "Clear Todos" button.

### Part-2: Custom Components
Create the following components in React
#### Button:

- A custom button that accepts the following props and changes the default <button> properties:
- `colorScheme`, `size`, `variant`
  - `colorScheme` has following values:`red`, `yellow`, `orange`, `green`. The default value must be `white`, if colorScheme is not specified.
  - `size` has the following values: `sm`, `md`, `lg`, `xl`. You can decide what the values are going to be for these sizes. The default value must be `md` if not given.
  - `variant` has the following values: `solid`, `ghost`, and `outline`. [Reference](https://chakra-ui.com/docs/components/button/usage#button-variants)
  - use the Button.module.css file, to use the classNames only.
 - [Reference inspiration](https://chakra-ui.com/docs/components/button)

#### Image:

- is used to show images.
- accepts following props and changes the underlying image based on props:
- `src`, `alt`, `width`, `height`.
- [Reference inspiration](https://chakra-ui.com/docs/components/image)
## Important Instructions:
- DO NOT use CHAKRA UI.
- DO NOT use inline-style.
- Use of Custom Hooks is mandatory
- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them, may lead to low scores
- Do not remove the classNames present on the tags, they are required for the UI.
- The `colorScheme`, `size`, `variant`, etc mentioned above are CASE-SENSITIVE. So ensure to use them in the same format, as given above.
- Make sure you use only the given components and dont create new files and folders as chaging component name, structures might result in giving you zero marks
- Make sure you use only the given data and dont create new data, as chaging data might result in giving you zero marks


## Submission Instructions
- Do not push node_modules and package_lock.json to GitHub
- Ensure that the GitHub link is correct. Share the link from where the package.json exists
