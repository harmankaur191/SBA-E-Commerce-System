#Implementation of Typescript features and OOP principles.
I have used principles of OOP by implementing classes and using them by creating their instances. Additionally, I used inheritence by extending the parent Error class to create a custom Error class to handle errors correctly.

#Challenges encountered and steps taken to overcome them
1. Understanding and planning the whole SBA was quite challenging as understanding how to handle the information received in response and processing it was quite confusing. I was able to overcome this by understanding the APi response first and then utilise it in other files.
2. Working together with html and typescript was interesting. Understanding which file to use as script in html was challenging and I figured it out by researching.

#Handling asynchronous operations and error management
1. To ensure that a full response is received after making the fetch request, I used await. I used asyn function for ApiService to ensure a promise is returned once the requested is completed.
2. To ensure proper error handling, I used try/catch blocks paired with custom error classes.