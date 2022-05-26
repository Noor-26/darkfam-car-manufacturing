import React from 'react'

function Blog() {
  return (
    <div >
      <h2 className='text-3xl'>Blog</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">

      <article className='card-body border'>
        <h2 className="text-3xl">How will you improve the performance of a React Application?</h2>
        <p>In order to  improve the performance of a React Application first of all i have to keep component state local to where necessary.Memoizing the react components to prevent unnecessary re-renders.By virtualizing or windowing in the react project.Using lazy loading images to prevents the creation of unnecessary DOM nodes, boosting the performance of our React application.</p> 
      </article>
      <article className='card-body border'>
        <h2 className="text-3xl">What are the different ways to manage a state in a React application?</h2>
        <p>Below are some different ways to manage a state in a react application : 
          <ul>
            <li>Local state : Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.</li>
            <li>Global state : Global state is data we manage across multiple components. global state is basically authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.</li>
            <li>Server state : data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</li>
            <li>URL state : Data that exists on our URLs, including the pathname and query parameters.it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state. </li>
            </ul>
            </p> 
      </article>
      <article className='card-body border'>
        <h2 className="text-3xl">How does prototypical inheritance work?</h2>
        <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.Sharing amid objects makes for easy inheritance of structure data fields, behavior of functions / methods, and state data values. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function..</p> 
      </article>
      <article className='card-body border'>
        <h2 className="text-3xl"> What is a unit test? Why should write unit tests?</h2>
        <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.It allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs.</p> 
      </article>
      <article className='card-body border'>
        <h2 className="text-3xl"> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
        <p>if i have an array of products and each product have a name, price, description, etc. in order to find a product by name i will use the find() method. The find() method returns the first value in the array, if an element in the array satisfies the provided testing function.</p> 
      </article>
      </div>
    </div>
  )
}

export default Blog