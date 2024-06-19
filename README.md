# Next JS with O Authentication

This project demonstrates the implementation of authentication in a Next.js application using NextAuth.js. The goal is to create a secure login and registration system with session management.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)
- PostgreSQL
- Vercel CLI (for deployment)

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/SamuelkohP04/Next-JS-with-O-Authentication.git
    cd Next-JS-with-O-Authentication
    ```

2. **Install dependencies:**

    Using npm:

    ```sh
    npm install
    ```

    Or using yarn:

    ```sh
    yarn install
    ```

3. **Set up environment variables:**

    Create a `.env.development.local` file in the root of the project and add your environment variables:

    ```env
    DATABASE_URL=your_postgres_connection_string
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your_nextauth_secret
    ```

    Ensure your PostgreSQL database is running and accessible.

### Running the Project

1. **Migrate the database:**

    ```sh
    npx prisma migrate dev --name init
    ```

2. **Start the development server:**

    Using npm:

    ```sh
    npm run dev
    ```

    Or using yarn:

    ```sh
    yarn dev
    ```

    The app should now be running on [http://localhost:3000](http://localhost:3000).

### Deployment

1. **Login to Vercel:**

    ```sh
    vercel login
    ```

2. **Deploy the project:**

    ```sh
    vercel
    ```

    Follow the prompts to deploy your project.

## Technologies Used

- **Next.js**: React framework for server-side rendering and generating static websites.
- **NextAuth.js**: Authentication library for Next.js.
- **Tailwind CSS**: Utility-first CSS framework.
- **PostgreSQL**: Relational database management system.
- **Vercel**: Cloud platform for static sites and Serverless Functions.

## Contributing

We welcome contributions to enhance this project. Please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Create a pull request to the `main` branch of the original repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
This was referenced by a YouTube tutorial - https://www.youtube.com/watch?v=v6TPcU23wP8&ab_channel=WebDevEducation
