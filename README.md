<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


# Nest.js ToDo List API

This is a simple ToDo List API built using Nest.js framework. It provides endpoints to manage tasks in your ToDo list.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (>=12.x)
- npm (>=6.x)

## Installation

Follow these steps to get the project up and running:

1. Clone the repository:

   ```bash
   git clone https://github.com/realtirtha/nest-js-todo-list-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nest-js-todo-list-api
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run start:dev
   ```

The API will be available at [http://localhost:3000](http://localhost:3000).

## Usage

Explore the available endpoints to manage tasks in your ToDo list:

- **GET /task**: Get all tasks
- **GET /task/:id**: Get task by ID
- **POST /task/create**: Create a new task
  - Request Body:
    ```json
    {
      "title": "Sample Task",
      "description": "This is a sample task.",
      "completed": false
    }
    ```
- **PUT /task/:id**: Update task by ID
  - Request Body:
    ```json
    {
      "title": "Updated Task Title",
      "description": "Updated task description."
    }
    ```
- **DELETE /task/:id**: Delete task by ID

Access the API documentation by visiting [http://localhost:3000/api](http://localhost:3000/api) when the development server is running. This documentation provides more details about each endpoint and how to use them.


## Error Handling

The API is equipped with error handling middleware to format and handle errors. If an error occurs, it will be properly formatted and returned with appropriate HTTP status codes.


## Documentation

API documentation is generated using Swagger. Access the Swagger UI at [http://localhost:3000/api](http://localhost:3000/api) to interactively explore and understand the available endpoints.


## License

This project is open source and available under the [MIT License](LICENSE).
