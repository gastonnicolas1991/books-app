# books-app

Books app is a simple app to query an API (faked in this case) a list of books and detailed information.

## Installation

```bash

unzip the file
cd app/server
npm run i
npm run start
cd ..
cd client
npm run i
npm run start

```
We should see the client running on: http://localhost:3000/
We should see the server running on: http://localhost:3004/

## Responsive
There are three sizes: mobile (default), tablet (up to 480px) and desktop (up to 1280px).

## Tooling

- Storybook
- Prettier
- ESlint
- React.js 
- Styled Components
- Axios
- Redux Sagas
- React Router 
  
## Storybook

Components were built isolated in Storybook. The idea is them to be as dummiest as possible and inject behavior from its context, in the client project.

```bash
cd app/client
npm run storybook

```
We should see it running on: http://localhost:6006/

## Unit Testing

cd app/client
npm run test

## Services 

1) Get The list of books -> API/items
2) Get the detail of an specific book ->  API/items/{id}

## Notes 

- Make sure you have Node.js up to version 12 cause previous versions could have issues with some libraries
- Server should be running while using client to have an available API.
- The offset and limit params should be sent to the requestByGet in the list of books request, but as I did not implemented the pagination on the client side, I did not send those parameters either. Should be extended to fulfill those requirements.
