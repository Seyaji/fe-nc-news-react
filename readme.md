# Seyaji - NC News React App

See it live at: https://ncvibe.netlify.app/

Technologies used:
- React
- Styled Components
- Axios
- Webpack

## Setup instructions

1. Clone, fork or download this repo as a ZIP file to run it locally.

2. In the /fe-nc-news-seyaji directory use `npm install` to install the dependencies.

3. To run the project locally use `npm run start` , this will start the webpack dev server and run the project on http://localhost:8080/

## Build Options

- To create your own build for deployment use `npm run build` and then choose a filename for the build output.


## Config Options

- If you want to use a different port then change the port in the webpack.config.js file to the desired port.

```javascript
   devServer: {
   historyApiFallback: true,
   port: 8080, // <--- change this 
   },
```