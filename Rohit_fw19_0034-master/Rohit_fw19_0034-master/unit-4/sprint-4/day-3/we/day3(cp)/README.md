# react-user-form

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if the name input tag is present, with the 'name' attribute  - 1 mark
 ✅ Check if the Username can be typed in the name input tag - 1 mark
 ✅ Check if the Gender is being selected from the Male and Female options- 1 mark
 ✅ Check if the Role is being selected from FrontEnd Developer, BackEnd Developer, FullStack Developer option - 1 mark
 ✅ should render no users found text initially when there is no users data  - 1 mark
 ✅ should display details in a table - 2 marks
 ✅ should reset the fileds with intitial data once the details are submitted - 2 marks
```

## Description

- You need to complete the application which take the name, gender, role, maritalStatus from the user.
- User should be able to enter the details in the respective input tags, with the correct type
- Name data should be taken by "input" tag should, with a type 'text'
- Gender data should be taken using a "select" tag, with options `Male`,`Female`, `Prefer Not to Say`.
- Role data should be taken using a "select" tag, with options `FrontEnd Developer`, `BackEnd Developer`, and `FullStack Developer`.
- Marital Status data should be taken using a single `checkbox` with a "Married" label if checked print as `married` else `unmarried`
- When there is no data print `no users found` in h2 tag with data-testid = `no-user-container`
- ![](https://i.imgur.com/ZSyk1ew.png)
- Once the details are filled and submitting the form should display entered details in tabular format.
  ![](https://i.imgur.com/ipfmETk.png)

## Important Instructions:

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them, may lead to low scores
- Do not remove the classNames present on the tags, they are required for the UI.
- The `options`, `type`, `name`, `tags`, etc mentioned above are CASE-SENSITIVE. So ensure to use them in the same format, as given above.

## Boilerplate

- You are given these Components:
  - App
    - User should be store all the form data in a **single object**
    - You can use the `useState` hook to store all the form data, at a single place.
    - user should be able to update the user details, in the input boxes, select boxes or check boxes present inside the form.
  - UserRow
    - should accept the following as props
      - name
      - gender
      - role
      - maritalStatus

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json

```
npm install

// run locally
npm run start

// test locally
npm run test

```

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
