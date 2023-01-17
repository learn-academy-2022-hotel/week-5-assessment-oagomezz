# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer: Calling super in a class allows you to use keys that have been defined in a parent class for example if the parent class was animal and it had a attribute of name written into it and later you create an instance of dog instead of having to hard code all of the individual attributes within the animal class you can use super to inherit all of the attributes and apply them to the new object.  

Researched answer: Calling the super method in a class allows a developer to access the methods created for the parent class and use them on any of the child classes. They get called on like a regular method call.

2. What is a gem?

Your answer: a gem is a library similar to a node from react that contains code that has been created for the benefit of the community. If you thought of a specific functionality somebody else has probably already thought of a solution and a gem is how that solution is shared.

Researched answer: a gem is a ruby library that contains code that will grant the developer the functionality of the code withiin the gem without having to code it. One example of a gem would be RSPEC the behavior based testing development tool is a gem that can be accessed.

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is comprised linked tables by a specified relationship. It could be a has_many: belongs_to relationship. 

Researched answer: A relational database allows for developers to create tables that can be linked to one another based on a primary key. It allows us to collect data and associate items that have some degree of a relationship. The parent table will recieve the primary key and any child table recieves a foreign key that is identical to the primary key to establish a link. 

4. What are primary keys? Why are they important? 

Your answer: Primary keys are used when referencing databases on sql. They will allow models to be associated with one another. It allows for a table to be referenced 

Researched answer: The primary key  is  a unique identifier that gets assigned to data as it gets collected within one of the models in the database. It can later be referenced in additional tables to create a relationship with any child tables and have access to the data.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: The HTTP verbs are:
    get: Reads data
    post: Creates data
    put: Updates data by replacing content 
    patch: Updates data that has been changed
    delete: deletes data 

Researched answer:
    get: retrieves data from a server, should only retrieve no other effect.
    post: sends data to a server from a http client.
    put: Updates data by creating new resource and replaces a target resource.
    patch: Updates data that has been changed
    delete: deletes data 
## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: a set of standards that aims to properly identify the best routes to be dynamic and efficient based around the HTTP methods which are the (Get, put, post, patch,delete) and the HTTP actions which are (Create,Read,Update,Delete).

2. Model validations: Model validations are checks to make sure that only valid and clean data get added to the database. 

3. Params: Params is just another word for parameters that get passed into a controller. Params is a method that returns an ActionController::Parameters Object

4. ERB: ERB is short for Embedded RuBy which allows a developer to generate text from templates. ERB's main component is a library that will allow a developer to input just about any string and impose no limitation. 

5. API: API stands for Application programming interface and it provides a means for the program to communicate or interact with external applications. 
