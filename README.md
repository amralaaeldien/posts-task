# Posts System

This is a simple API designed to create, list and view the details of created posts

## Technologies Used

Docker, Nodejs, Expressjs, Kafka, MongoDB

## The User and System Flow

While the system is initialed and starts listening on the port, it creates and initializes topics in Kafka together with initializing the connection to the database.

The first interaction is when the user sends a "POST" request to 
``` http://localhost:3000/posts ```
with the fields of ```title``` and ```content``` like the following
```
{ 
    title: "title1",
    content: "content1"
}
```

The system then saves the data of the entered post to the MongoDB database.

At the same time, the system produces a message with the content of the post through Kafka.

Then the consumer script (which is running alongside the application) catches this message and logs it to the terminal console.

Then also the user is presented with the details of the newly created post.

The user can then take the ```_id``` field in the post and past it in the route:
```
http://localhost:3000/posts/{_id}
```
 Then through the "GET" request, the user would get presented with all the details of the post.

 After creating several posts, the user then can visit the route

 ```
 http://localhost:3000/posts
 ```
 with the "GET" request and be presented with all the created posts iin the database.

 ## How to Run
 On the root file of the repository run the following command:
 ```
 docker compose up --build
 ```
