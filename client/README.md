# Hakitech

Hakitech empowers users to harness solar energy efficiently. By providing real-time monitoring, personalized insights, and a user-friendly dashboard, Hakitech aims to optimize energy consumption and promote sustainable energy practices. This project is designed to help users manage and maximize their solar energy usage, contributing to a greener and more sustainable future.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following software installed:

- Node.js (version 14.x or higher)
- npm (version 6.x or higher) or yarn (version 1.x or higher)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/gr33pp/hakitech.git
   cd hakitech
   ```

2. **Create a `.env` File:**

   In the root directory of the project, create a `.env` file.

3. **Copy the Example Environment Variables:**

   Copy the contents of the `.env.example` file into your newly created `.env` file and replace the placeholder values with your actual configuration.

   ```plaintext
   REACT_APP_WEATHER_API_KEY=your-weather-api-key-here
   REACT_APP_WEATHER_API_URL=https://your-weather-api-url-here.com
   REACT_APP_API_URL=https://your-api-url-here.com
   ```

4. **Install Dependencies:**

   Install the required dependencies using npm or yarn.

   ```bash
   npm install
   # or
   yarn install
   ```

5. **Run the Development Server:**

   Start the development server to view your project locally.

   ```bash
   npm start
   # or
   yarn start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Deployment

To deploy the project to a live environment, follow these steps:

1. **Build the Project:**

   ```bash
   npm run build
   # or
   yarn build
   ```

   This will create an optimized production build in the `build` directory.

2. **Deploy the `build` Directory:**

   Deploy the contents of the `build` directory to your preferred hosting service (e.g., Netlify, Vercel, GitHub Pages).

### Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Sass](https://sass-lang.com/) - A CSS preprocessor that adds power and elegance to the basic language

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgments

Thanks to everyone who contributed to this project and to the open-source community for their invaluable resources and support.
