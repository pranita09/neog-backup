// Question
// Write a function that takes an object blog and returns true if the blog has more than 1000 views (i.e. has a views property greater than 1000)

// const getViews = blog => blog.views>1000;

// const getViews = ({title, author, views}) => views > 1000;   // destructured

const getViews = ({views}) => views > 1000;       // removed unnecessary keys

const blog1 = {title: 'How to Learn JavaScript', author: 'John Doe', views: 1430};
const blog2 = {title: '10 Reasons to Start a Blog', author: 'Jane Smith', views: 500};
console.log(getViews(blog1)); // true
console.log(getViews(blog2)); // false