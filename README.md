# Frontend Mentor - Ping coming soon page

This is a solution to the [Ping Single Column Coming Soon Page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgement](#acknowledgement)


## Overview

### The challenge

- Build out the project to the designs provided.

### Screenshot

# Mobile Preview 

![screenshot](https://github.com/romila2003/Ping-Single-Column-Coming-Soon-Page/blob/main/Mobile%20preview.PNG)

# Mobile Preview - active

![screenshot](https://github.com/romila2003/Ping-Single-Column-Coming-Soon-Page/blob/main/Mobile%20preview%20-%20active.PNG)

# Desktop Preview 

![screenshot](https://github.com/romila2003/Ping-Single-Column-Coming-Soon-Page/blob/main/Desktop%20preview.PNG)

# Desktop Preview - active

![screenshot](https://github.com/romila2003/Ping-Single-Column-Coming-Soon-Page/blob/main/Desktop%20preview%20-%20active.PNG)


### Links

 - Source code: [https://github.com/romila2003/Ping-Single-Column-Coming-Soon-Page](https://github.com/romila2003/Ping-Single-Column-Coming-Soon-Page)
 - Live website: [https://ping-single-column-coming-soon-page.netlify.app/](https://ping-single-column-coming-soon-page.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Plain CSS
- Vanilla Javascript
- Flexbox
- Mobile-first workflow

### What I learned

This was an interesting challenge and found the mobile view quite simple however adjusting the elements as the screen increased was slightly difficult however I managed to create thwe web page that looks similar to the design provided. The javascript was not that difficult however I did gain help from a YouTube video regarding the emailFormat variable.

Javascript - email validation: 

```javasript

let emailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

submit.addEventListener("click", () => {
    if (email.value.match(emailFormat)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please provide a valid email address";
        text.style.padding = "0 0 1.5em 0";
        email.style.border = "1px solid var(--light-red)";
    }
});

```

### Continued development

For future developments, I need to work on using more javascript in future projects. Also, I should begin taking on more challenging responsive projects to test my layout skills. 


## Author

- Frontend Mentor - [@romila2003](https://www.frontendmentor.io/profile/romila2003)
- Twitter - [@romila003](https://www.twitter.com/romila003)

# Acknowledgement

I gained support from a [YouTube video](https://www.youtube.com/watch?v=HzJngc-Se9Q&t=238s) to help me with the Javascript validation aspect of the challenge.

