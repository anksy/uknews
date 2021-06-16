# News App

## Getting Started

This is a sample news application which uses newsorg API to display news. It has frontend setup in Reactjs and backend in nodejs. Backend application is optional, can be plugged off simply changing the env variable **REACT_APP_API_BASEURL** of FE app.  

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

## Installation

## For Frontend Applicaton 

1. Get a free API Key at [https://newsapi.org](https://newsapi.org)
2. Clone the repo
   ```sh
   git clone https://github.com/anksy/uknews.git
   ```
3. Jump into frontend
   ```
   cd frontend
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Config your environment variables in `.env`. Check for env.sample

6. Finally Run project
   ```sh
   npm start
   ```

## For Backend Applicaton 

1. Get a free API Key at [https://newsapi.org](https://newsapi.org)
2. Clone the repo
   ```sh
   git clone https://github.com/anksy/uknews.git
   ```
3. Jump into backend
   ```
   cd backend
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Config your environment variables in `.env`. Check for env.sample

6. Finally Run project
   ```sh
   npm run server
   ```

## Usage

This project can be used in 2 ways. 1. Directly from Frontend and 2. Via Backend.

- If you want to run this project from frontend then configure **frontend/.env** with vairables (**REACT_APP_API_BASEURL**, **REACT_APP_NEWSAPI**)

- If you want to run this project from backend then configure **frontend/.env** with vairables (**REACT_APP_API_BASEURL**), it should point to backend app and **backend/.env** with (**NEWSAPI**).

If you opt via backend then set your env var like below:

```sh
   http://localhost:8080/news
   ```
*Appending **/news** into base url*
*Double check your **HOST** and **PORT***

## Contact

Bhupendra Singh - bbhupendra007@gmail.com

Project Link: [https://github.com/anksy/uknews](https://github.com/anksy/uknews)


