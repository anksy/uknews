# News App

## Getting Started 

This is a sample news application which uses newsorg API to display news. It has frontend setup in Reactjs and backend in nodejs. Backend application is optional, can be plugged off simply changing the env variable *REACT_APP_API_BASEURL* of FE app.  


## Installation

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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Usage

- Configure **frontend/.env** with vairables (**REACT_APP_API_BASEURL**, **REACT_APP_NEWSAPI**)

If you opt via backend then set your env var like below:

```sh
   http://localhost:8080/news
   ```
*Appending **/news** into base url*
*Double check your **HOST** and **PORT***

## Contact

Bhupendra Singh - bbhupendra007@gmail.com

Project Link: [https://github.com/anksy/uknews](https://github.com/anksy/uknews)

