# Github API test

This is my solution to the github API test - due to time constraints there is a hardcoded URL that populates my solution.
I have utlised marterial UI and the octokit packages as part of this codebase.

## Contents

1. Getting started
2. Sections
   1. Components
   2. Challanges
3. If there was additional time
4. Packages

### Getting Started

To open the app code base, clone down the code base from github, as shown below.

Link to github: https://github.com/lukechaplin/Github_api

![](npmi.png)

_Remember to install npm i (or yarn) dependencies_

![](clone.png)

To run the app please use npm or yarn followed by the 'start' script command

### Sections

The below shows the structure of the components for my app.

#### Components

1.  Dialog: this is a mateial UI dialog box which is rendered as part of the datatable I use to show additional information about the repository searched for.
2.  Input: This conponent uses the material UI text field that is rendered at the top of the screen for entering the user you wish to search for on github (I did not have time to make this functional).
3.  RepoResultsTable: This component utilies the material UI datagrid component to create a table which populates with the list of repositories that exist under a certain github users account. It also is where the dialog component is called which when clicked on shows additional information about a particular repository: forks, likes, stars, issue countd and links to readmes.
    For the moment this uses a hardcoded URL which passes the results of the GET request to a helper function which consumes the data and transforms it into the relevant shape for the datagrid component to use.

#### Challanges

I decided to use the material UI and octokit packages that are mentioend in the instructions and the github API documents. Once working this has kept my code lightweight and made implementing a table with pagination and relevant filtering and search options easy. The documentation was not straight forward and required some searching and cross-googling to figure out certain issues.

    Exanples of this are:
    * Hard to find specific instrucitons in martial UI docs to implement nesting a dialog box within each row of the results
    * Getting the request functionality of the octokit package working due to 2 possible ways to use the package with differing instructions which was not clear on which instructions belonged to which functionality

### If there was additional time

If I had additional time I would implement the following:

- Finish making the Input component functional - this would hold in state the username entered which would be passed via string interpolation into the target URL for searching.
- Adding a button component that would trigger the GET request for the searched for users github account.
- I would add loading functionality - via a component or most likely using the react suspense feature while the API call is in progress
- Add error handling to the app utilising the built in react error boundry conponents.
- Add in snapshot testing.
- Add in github API call unit tests but also include as part of these an option if the API fails to run the test using mock data - this will ensure the tests are not too tightly coupled to the github API.

### Packages

├── @emotion/react@11.11.1
├── @emotion/styled@11.11.0
├── @mui/material@5.14.11
├── @mui/x-data-grid@6.16.0
├── @octokit/request@8.1.2
├── @testing-library/jest-dom@5.17.0
├── @testing-library/react@13.4.0
├── @testing-library/user-event@13.5.0
├── react-dom@18.2.0
├── react-scripts@5.0.1
├── react@18.2.0
└── web-vitals@2.1.4
