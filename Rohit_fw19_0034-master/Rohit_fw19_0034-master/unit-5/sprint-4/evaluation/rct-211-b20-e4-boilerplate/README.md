### Problem Statement
Create the following application: Products Dashboard using the boilerplate provided in the zip file
### Getting Started:
Unzip the rct-211-b20-e4-boilerplate file, and COPY the contents in your folder.
Run the following commands
- npm install
- npm start
- npm run server -> to start the json-server

##### NOTE:

Libraries needs to be installed by yourself
Make sure that the json-server is up and running at port 8080

### Component Structure:
- App
    - Navbar
    - MainRoutes
        - Path: /, Page: Homepage
            - Productpage (renders ProductCard component)
        - Path: /add, Page: AddProduct
        - Path: /cart, Page: CartPage

### Redux
- action.js
- actionTypes.js
- reducer.js
- store.js

### JSON Data:
db.json file is included in the boilerplate zip file and here db.json , with the initial products data (Do Not Override/Modify this data format)

### Steps:
1. The User should be able to,
    - make a requests to ‘http://localhost:8080’
    - fetch the data from db.json file and store it in redux store
    - display the data in a Productpage file (inside Homepage) - from the redux store, when the React application loads on the homepage.

2. On clicking the Add Product button on the Navbar component, a new page should open up on the path (/add)
    - The AddProduct page has all the UI elements already present. The user should be able to add all the details for the product like title, image URL, category, etc.
    - On clicking the 'Add' button, the POST API request must be made, with the product payload, and it should reflect on the db.json file.
    - After successfully adding the data, the user should be navigated to the homepage UI, where he can see the updated data.

3. On clicking the Delete button on the table row, the DELETE API request should be made, and the particular product should be removed from the db.json file
    - The deleted product should be removed from the UI as well.

4. On clicking the "+" button, and "-" button on the ProductCard component, the cartQuantity of that product should increase and decrease respectively.
    - Make a PATCH API request, with the increased count in the payload on clicking the "+" button. The data should reflect in the db.json file as well. Same for "-" button, with with decreased count.
    - The cartQuantity of a product should not exceed more than 3 or less than 0 (the default cartQuantity of each product is 0)
    - The number on the cart icon, on the navbar, should reflect, the products, which has atleast 1 cartQuantity.
    - The number on the cart icon should persist even with page refresh
5. The Cart page, should show only those products, which have atleast 1 cartQuantity.
    - You should reuse the ProductCard component for this.
    - The cart data should persist, even, with page refresh.

### General Instructions:
- Do not remove data-cy=’xxx’ from anywhere inside the code. They are the test inputs, removing them, may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the json file.
### Submission Instructions
- You need to submit Github Link as well as Netlify/Vercel Link
- Do not push node_modules and package_lock.json to GitHub
- Ensure that the GitHub link is correct. Share the link from where the package.json exists
- Make sure you use the Masai Github Account and have your own netlify/vercel account