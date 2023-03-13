// import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="App">
    </div>
  );
}


// sample example
const items = [
  { id: 1, name: "Book", price: 10 },
  { id: 2, name: "T-Shirt", price: 15 },
  { id: 3, name: "Hat", price: 8 },
  { id: 4, name: "Sunglasses", price: 12 }
];

const total = items.reduce((acc, curr) => acc + curr.price, 0);

export function ShoppingCart() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}: ({item.price})
          </li>
        ))}
      </ul>
      <p>Total: {total}</p>
    </div>
  );
}

// Question 1
//1. Create an array of objects representing movies in your watchlist. Each object has the following properties: id, title and director. Write a React component that takes the array of movies as input and returns an unordered list of movies, where each list item displays the movie's title and director.

const movies = [
  { id: 1, name: "RRR", director: "S S Rajamouli" },
  { id: 2, name: "3 Idiots", director: "Rajkumar Hirani" },
  { id: 3, name: "A Wednesday", director: "Neeraj Pandey" },
  { id: 4, name: "Piku", director: "Shoojit Sircar" },
  { id: 5, name: "Swades", director: "Ashutosh Gowarikar" }
];

export const WatchList = () => {
  return (
    <div>
      <h1>Movies WatchList</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.name}: {movie.director}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Question 2
// 2. Create an array of objects representing products in an online store. Each object has the following properties: id, name, price, and category. Write a React component that takes the array of products as input and returns an unordered list of products, where each list item displays the product's name, price, and category.

const products = [
  { id: 101, name: "Pen", price: 50, category: "Stationary" },
  { id: 102, name: "Notebook", price: 30, category: "Stationary" },
  { id: 103, name: "Spoon", price: 80, category: "Cutlery" },
  { id: 104, name: "Fork", price: 120, category: "Cutlery" },
  { id: 105, name: "Saree", price: 3000, category: "Clothing" },
  { id: 106, name: "Laptop", price: 50000, category: "Electronics" }
];

export const Items = () => {
  return (
    <>
      <h1>Items from Online Store</h1>
      <ul>
        {products.map(({ id, name, price, category }) => (
          <li key={id}>
            ItemName: {name}, Price: {price}, Category: {category}
          </li>
        ))}
      </ul>
    </>
  );
};

// Question 3
// 3. Create an array of objects representing books in a library. Each object has the following properties: id, title, author, and rating. Write a React component that takes the array of books as input and returns an unordered list of books, where each list item displays the book's title, author, and rating.

const books = [
  {
    id: 201,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 4.5
  },
  {
    id: 202,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 3.0
  },
  { id: 203, title: "1984", author: "George Orwell", rating: 3.8 },
  { id: 204, title: "Pride and Prejudice", author: "Jane Austen", rating: 4.2 }
];

export const BooksList = () => {
  return (
    <>
      <h1>List of Books</h1>
      <ul>
        {books.map(({ id, title, author, rating }) => (
          <li key={id}>
            Title: {title}, Author: {author}, Ratings: {rating}
          </li>
        ))}
      </ul>
    </>
  );
};

// Question 4
//4. Create an array of objects representing employees in a company. Each object has the following properties: id, name, department, and salary. Write a React component that takes the array of employees as input and returns an unordered list of employees, where each list item displays the employee's name, department, and salary.

const employees = [
  {
    id: 1,
    name: "John Smith",
    department: "Marketing",
    salary: 60000
  },
  {
    id: 2,
    name: "Jane Doe",
    department: "Human Resources",
    salary: 75000
  },
  {
    id: 3,
    name: "Mike Johnson",
    department: "Sales",
    salary: 80000
  },
  {
    id: 4,
    name: "Emily Kim",
    department: "Finance",
    salary: 90000
  },
  {
    id: 5,
    name: "David Lee",
    department: "Information Technology",
    salary: 100000
  }
];

export const EmployeesList = () => {
  return (
    <>
      <h1>List of Employees</h1>
      <ul>
        {employees.map(({ id, name, department, salary }) => (
          <li key={id}>
            Name: {name}, Department: {department}, Salary: {salary}
          </li>
        ))}
      </ul>
    </>
  );
};

// Question 5
// 5. Create an array of objects representing recipes in a cookbook. Each object has the following properties: id, recipe name, recipe creator name. Write a React component that takes the array of recipes as input and returns an unordered list, where each list item displays the recipe's name and recipe creator name.

const recipesArray = [
  {
    id: 1,
    recipeName: "Classic Lasagna",
    creatorName: "John Smith"
  },
  {
    id: 2,
    recipeName: "Chicken Alfredo",
    creatorName: "Jane Doe"
  },
  {
    id: 3,
    recipeName: "Beef Stroganoff",
    creatorName: "Mike Johnson"
  },
  {
    id: 4,
    recipeName: "Vegetable Stir-Fry",
    creatorName: "Emily Kim"
  },
  {
    id: 5,
    recipeName: "Chocolate Cake",
    creatorName: "David Lee"
  }
];

export const RecipeListWithMakers = () => {
  return (
    <>
      <h1>List of Recipes with Makers</h1>
      <ul>
        {recipesArray.map(({ id, recipeName, creatorName }) => (
          <li>
            Recipe: {recipeName}, Creator: {creatorName}
          </li>
        ))}
      </ul>
    </>
  );
};

// Question 6
// 6. Create an array of objects representing cars in a dealership. Each object has the following properties: id, make, model, and price. Write a React component that takes the array of cars as input and returns an unordered list of cars, where each list item displays the car's make, model, and price.

const cars = [
  { id: 1, make: "Porsche", model: "911", price: 500000 },
  { id: 2, make: "Toyota", model: "Camry", price: 1000000 }
];

export const Cars = () => {
  return (
    <>
      <h1>List of Cars</h1>
      <ul>
        {cars.map(({ id, make, model, price }) => (
          <li key={id}>
            make: {make} model: {model} price: {price}
          </li>
        ))}
      </ul>
    </>
  );
};

// Question 7
//7. Create an array of objects representing students in a class. Each object has the following properties: id, name, grade, and attendance. Write a React component that takes the array of students as input and generates an ordered list of students, where each list item displays the student's name, grade, and attendance.

const students = [
  { id: 101, name: "Ahsan", grade: 80, attendance: "50%" },
  { id: 102, name: "Chirag", grade: 60, attendance: "40%" },
  { id: 103, name: "Yash", grade: 90, attendance: "80%" },
  { id: 104, name: "Devendra", grade: 70, attendance: "60%" }
];

export const StudentsList = () => {
  return (
    <>
      <h1>Students List</h1>
      <ol>
        {students
          .filter(({ id, name, grade, attendance }) => grade > 75)
          .map(({ id, name, grade, attendance }) => (
            <li key={id}>
              StudentName: ${name}, Grade: ${grade}, Attendance: ${attendance}
            </li>
          ))}
      </ol>
    </>
  );
};

// Question 8
//8. Create an array of objects representing movies in your watchlist. Each object has the following properties: id, title, director, and runtime. Write a React component that takes the array of movies as input and generates an ordered list of movies, where each list item displays the movie's title, director, and runtime.

const favMovies = [
  { id: 1, title: "RRR", director: "S S Rajamouli", runtime: "150mins" },
  { id: 2, title: "3 Idiots", director: "Rajkumar Hirani", runtime: "140mins" },
  {
    id: 3,
    title: "A Wednesday",
    director: "Neeraj Pandey",
    runtime: "120mins"
  },
  { id: 4, title: "Piku", director: "Shoojit Sircar", runtime: "130mins" },
  { id: 5, title: "Swades", director: "Ashutosh Gowarikar", runtime: "180mins" }
];

export const Movies = () => {
  return (
    <>
      <h1>Movies List</h1>
      <ol>
        {favMovies.map(({ id, title, director, runtime }) => (
          <li key={id}>
            Title: {title}, Director: {director}, Runtime: {runtime}
          </li>
        ))}
      </ol>
    </>
  );
};

// Question 9
//9. Create an array of objects representing products in an online store. Each object has the following properties: id, name, price, and category. Write a React component that takes the array of products as input and generates an ordered list of products, where each list item displays the product's name, price, and category.

const productsFromStore = [
  { id: 101, name: "Pen", price: 50, category: "Stationary" },
  { id: 102, name: "Notebook", price: 30, category: "Stationary" },
  { id: 103, name: "Spoon", price: 80, category: "Cutlery" },
  { id: 104, name: "Fork", price: 120, category: "Cutlery" },
  { id: 105, name: "Saree", price: 3000, category: "Clothing" },
  { id: 106, name: "Laptop", price: 50000, category: "Electronics" }
];

export const StoreItems = () => {
  return (
    <>
      <h1>Items from Online Store</h1>
      <ol>
        {productsFromStore.map(({ id, name, price, category }) => (
          <li key={id}>
            ItemName: {name}, Price: {price}, Category: {category}
          </li>
        ))}
      </ol>
    </>
  );
};

// Question 10
//10. Create an array of objects representing recipes in a cookbook. Each object has the following properties: id, name, ingredients, and instructions. Write a React component that takes the array of recipes as input and generates an ordered list of recipes, where each list item displays the recipe's name, ingredients, and instructions. Data has been provided below for this questions.

const recipes = [
  {
    id: 1,
    name: "Spaghetti with Meatballs",
    ingredients: [
      "1 lb spaghetti",
      "1 lb ground beef",
      "1 cup breadcrumbs",
      "1 egg",
      "1/4 cup chopped parsley",
      "1/4 cup grated Parmesan cheese",
      "1/4 cup milk",
      "1/2 teaspoon salt",
      "1/2 teaspoon black pepper",
      "2 tablespoons olive oil",
      "1 onion, chopped",
      "3 cloves garlic, minced",
      "1 can (28 oz) crushed tomatoes",
      "1 teaspoon sugar",
      "1/4 teaspoon red pepper flakes",
      "1/4 cup chopped fresh basil"
    ],
    instructions: [
      "1. Cook the spaghetti according to package instructions until al dente.",
      "2. In a large bowl, combine the ground beef, breadcrumbs, egg, parsley, Parmesan, milk, salt, and pepper. Mix until well combined and form into meatballs.",
      "3. In a large skillet, heat the olive oil over medium heat. Add the onion and garlic and cook until softened, about 5 minutes.",
      "4. Add the crushed tomatoes, sugar, and red pepper flakes. Bring to a simmer and add the meatballs. Cover and simmer for 15-20 minutes, until the meatballs are cooked through.",
      "5. Serve the meatballs and sauce over the cooked spaghetti. Garnish with fresh basil."
    ]
  },
  {
    id: 2,
    name: "Chocolate Chip Cookies",
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 teaspoon baking soda",
      "1 teaspoon salt",
      "1 cup unsalted butter, at room temperature",
      "3/4 cup white sugar",
      "3/4 cup brown sugar",
      "2 large eggs",
      "2 teaspoons vanilla extract",
      "2 cups semisweet chocolate chips"
    ],
    instructions: [
      "1. Preheat the oven to 375 degrees F (190 degrees C). Line a baking sheet with parchment paper.",
      "2. In a medium bowl, whisk together the flour, baking soda, and salt.",
      "3. In a large bowl, beat together the butter, white sugar, and brown sugar until light and fluffy, about 2-3 minutes.",
      "4. Add the eggs one at a time, beating well after each addition. Stir in the vanilla extract.",
      "5. Gradually add the dry ingredients to the wet ingredients, mixing until just combined.",
      "6. Stir in the chocolate chips.",
      "7. Drop the dough by rounded tablespoons onto the prepared baking sheet, spacing the cookies about 2 inches apart.",
      "8. Bake for 10-12 minutes, until the edges are golden brown and the centers are set.",
      "9. Cool the cookies on the baking sheet for 5 minutes, then transfer to a wire rack to cool completely."
    ]
  }
];

export const RecipeList = () => {
  return (
    <>
      <h1>List Of Recipes</h1>
      <ol>
        {recipes.map(({ id, name, ingredients, instructions }) => (
          <li key={id}>
            Name: {name}, Ingredients:{" "}
            <ul>
              {ingredients.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
            , Instructions:{" "}
            <ul>
              {instructions.map((action) => (
                <li>{action}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </>
  );
};

