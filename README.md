Author
ITBIN-2211-0193
I.R.G.S.Chamikara Herath

Weather Dashboard
A responsive web-based Weather Dashboard that allows users to search for a city and view current weather conditions together with a five-day forecast.
The application uses the OpenWeather API to retrieve real-time weather information and is integrated with GitHub for version control, GitHub Actions for continuous integration and deployment, and Vercel for production hosting.
Features
* Search weather by city name 
* Display current temperature 
* Display "feels like" temperature 
* Display humidity 
* Display wind speed 
* Display weather description 
* Display weather condition icon 
* Display five-day weather forecast 
* Responsive user interface 
* Error handling for invalid city searches and API failures 
* Automated CI validation using GitHub Actions 
* Automated production deployment using GitHub Actions and Vercel 
Technologies Used
* HTML5 
* CSS3 
* JavaScript 
* OpenWeather API 
* Node.js 
* npm 
* Git 
* GitHub 
* GitHub Actions 
* Vercel 
Project Structure
weather-dashboard-devops-assignment/
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
│
├── src/
│   ├── index.html
│   ├── scripts/
│   │   ├── app.js
│   │   └── config.js
│   └── styles/
│       └── style.css
│
├── dist/
├── .env
├── .gitignore
├── CI.md
├── package.json
├── package-lock.json
└── README.md
API Configuration
The application requires an OpenWeather API key.
The API key is kept in the local configuration and should not be committed to GitHub.
Make sure the API key is excluded from version control using .gitignore.
Example:
const API_KEY = "YOUR_API_KEY";
Replace YOUR_API_KEY with your own OpenWeather API key in the local configuration file.
Important: Never publish your actual API key in the repository, README, screenshots, or GitHub Actions workflow.
Running the Project Locally
Clone the repository:
git clone https://github.com/savindhayachamikara/weather-dashboard-devops-assignment.git
Navigate into the project:
cd weather-dashboard-devops-assignment
Install dependencies:
npm install
Configure the OpenWeather API key in the local configuration file.
Start a local web server or use the project's development setup to open the application.
Available npm Commands
Lint
npm run lint
Checks the JavaScript syntax.
Test
npm test
Runs the project's test command.
Build
npm run build
Creates the production build in the dist directory.
Continuous Integration
The project uses GitHub Actions for Continuous Integration.
The CI workflow is located at:
.github/workflows/ci.yml
The workflow runs when changes are pushed to:
* main 
* develop 
* feature branches 
It also runs for pull requests targeting:
* main 
* develop 
The CI pipeline performs:
1. Repository checkout 
2. Node.js 22 setup 
3. Dependency installation using npm ci 
4. JavaScript lint check 
5. Test execution 
6. Application build 
Continuous Deployment
The project uses GitHub Actions to automatically deploy the application to Vercel.
The deployment workflow is located at:
.github/workflows/deploy.yml
The deployment workflow runs automatically when changes are pushed to the main branch.
The deployment process performs:
1. Checkout repository 
2. Setup Node.js 22 
3. Install dependencies 
4. Build the application 
5. Install the Vercel CLI 
6. Deploy the production application to Vercel 
Vercel authentication is handled securely using GitHub repository secrets.
The following GitHub secrets are used:
VERCEL_TOKEN
VERCEL_PROJECT_ID
No secret values are stored directly in the workflow file.
CI/CD Pipeline
The project follows this automated workflow:
Developer
    │
    ▼
Git Feature Branch
    │
    ▼
Pull Request
    │
    ▼
Merge to Main
    │
    ▼
GitHub Actions CI
    │
    ├── Install Dependencies
    ├── Lint
    ├── Test
    └── Build
    │
    ▼
GitHub Actions CD
    │
    ▼
Vercel Production Deployment
    │
    ▼
Live Weather Dashboard
Version Control Workflow
Git branches were used to separate development work from the production branch.
Main branches used in the project:
* main — production branch 
* develop — development branch 
* feature/weather-dashboard — weather dashboard feature branch 
The feature was developed on the feature branch and merged into main through a pull request.
Deployment
The application is deployed to Vercel.
Production URL:
https://weather-dashboard-devops-assignment-delta.vercel.app/
Verification
The project was successfully verified locally using:
npm run lint
npm test
npm run build
The GitHub Actions CI workflow completed successfully.
The GitHub Actions deployment workflow also completed successfully, and the application is available through the Vercel production deployment.
Documentation
Additional CI documentation is available in:
CI.md
Repository
GitHub repository:
https://github.com/savindhayachamikara/weather-dashboard-devops-assignment


