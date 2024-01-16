# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

This Vite project is structured to facilitate easy development and maintainability. 
Here is a basic overview of the code base 


./src folder - Contains the main source code of the application, including Vue/React components, JavaScript modules, CSS files, and other assets. It is divided into subfolder


API folder - This contains all the API calls


Components folder - This folder houses all the components used

    BarChart component folder - react arrow function for bar chart

    Graph Folder contains files related to Charts such as

    Chart Filters for applying filter to charts

    ChartComponent is the main head for all things charts where both graphs are returned

    todo later GraphComponent to optimize the chart intoone chart later on 

    Header Folder for Logout Button and header function which contains other functions

    LineChart for current linechart component

    Table component which I used for practice for filters 

    
    and varios diffent buttons and basic components
    
auth folder contains functions that can be performed for authorization related 


conf folder fetches constant values used in appwrite


Pages store the path all the pages used in website


Store contains properties related to redux


vite.config.js: The Vite configuration file where you can customize the build and dev server settings.

package.json: Lists the dependencies of the project and defines scripts for common tasks.
.env file consist of appwrite ID are not to be shared

RUNNING LOCALLY
follow the following steps to  set up and run the project on your local machine:
1.git clone [repository-url]

2.npm install

3.npm run dev

4.Application should now be running on 'http://localhost:5173/'
