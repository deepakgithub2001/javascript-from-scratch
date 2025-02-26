// (DOM (Document Object Model)

//  DOM (Document Object Model) is a programming interface that allows JavaScript and other scripting languages to interact with HTML and XML documents. It represents the structure of a web page as a tree of nodes, where each element, attribute, or piece of content becomes an object that can be modified dynamically.

// DOM Basics in JavaScript
// Introduction

// The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a webpage, allowing JavaScript to interact with and manipulate HTML and CSS dynamically. Understanding the basics of the DOM is crucial for creating dynamic, interactive web applications.

// What is the DOM?
// The DOM is a hierarchical tree-like structure created by the browser when it loads a webpage. Each element in the HTML document, such as headings, paragraphs, and images, becomes a node in the DOM tree. JavaScript can use the DOM to access, modify, and respond to elements and events on the webpage.

// Key components of the DOM include:

// Document: Represents the entire HTML document.
// Element Nodes: Represent HTML tags like <div>, <p>, or <button>.
// Text Nodes: Represent the content inside HTML elements.
// Attributes: Represent the attributes of HTML elements, such as id or class
// Common DOM Methods and Properties
// JavaScript provides various methods and properties to interact with the DOM:

// Selecting Elements

// document.getElementById('id'): Selects an element by its ID.
// document.getElementsByClassName('class'): Selects elements by their class name.
// document.getElementsByTagName('tag'): Selects elements by their tag name.
// document.querySelector('selector'): Selects the first matching element.
// document.querySelectorAll('selector'): Selects all matching elements.

// Modifying Content

// .innerHTML: Gets or sets the HTML content of an element.
// .textContent: Gets or sets the text content of an element.
// Example:

// const title = document.getElementById('title');
// title.textContent = 'Welcome to DOM Basics!';

// Changing Styles

// .style.property: Updates the inline style of an element.
// Example:

// const box = document.querySelector('.box');
// box.style.backgroundColor = 'blue';
// Adding and Removing Classes

// .classList.add('className'): Adds a class.
// .classList.remove('className'): Removes a class.
// .classList.toggle('className'): Toggles a class.
// Creating and Removing Elements

// document.createElement('tag'): Creates a new element.
// parent.appendChild(child): Appends an element as a child.
// parent.removeChild(child): Removes a child element.
// Example:

// const newElement = document.createElement('p');
// newElement.textContent = 'Hello, DOM!';
// document.body.appendChild(newElement);

// Event Handling

// .addEventListener('event', callback): Attaches an event listener to an element.
// Example:

// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     alert('Button clicked!');
// });

// Importance of the DOM

// The DOM enables JavaScript to make webpages interactive and responsive. It allows developers to:
// Dynamically update content and styles.
// Respond to user input through events.
// Create or delete elements in real-time.
// Build complex web applications with minimal effort.

// Conclusion

// The DOM serves as a bridge between the HTML/CSS structure of a webpage and the interactivity provided by JavaScript. Mastering DOM basics unlocks the potential to create dynamic and user-friendly web experiences.