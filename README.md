# Frontend Mentor - Huddle landing page with curved sections solution

This is a solution to the [Huddle landing page with curved sections challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-curved-sections-5ca5ecd01e82137ec91a50f2). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

  <img src="design/desktop-design.jpg" style="width: 30%;">
  <p>Desktop design</p>
  
  <img src="design/active-states.jpg" style="width: 30%;">
  <p>Active states</p>
  
  <img src="design/mobile-design.jpg"  style="width: 30%;">
  <p>Mobile design</p>
  
  
## My process

### Built with

- Semantic HTML5 markup
- HTML forms
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned
 1. Removing the default border around an input text box. 
  This code helps to do that.
  
    input:focus, textarea:focus, select:focus{
        outline: none;
    }
    
    
 2. I also learnt about some client-side validation tool in Javascript.
    This function helps to check if the value of the input matches the format expected. for example, an email input. You can go through my full code to understand better.
    
    function myValidation() {
        if(input.validity.typeMismatch) {
            error.innerHTML = 'Check your email please!';
            error.classList.add('error-message');
            input.classList.add('red-border');
        } else {
            error.innerHTML = '';
            input.classList.remove('red-border');
        }
    }
    
    
### Continued development

    I look forward to refactoring my code and writing shorter, better, cleaner code. 

### Useful resources

- [Stack Overflow](https://www.stackoverflow.com) 
- [Google](https://www.google.com) 



## Author
- Frontend Mentor - [@Dami-Moore](https://www.frontendmentor.io/profile/Dami-Moore)
- Twitter - [@Sam_damilola](https://www.twitter.com/Sam_damilola)

