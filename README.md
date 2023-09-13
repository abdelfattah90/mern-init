# MERN STACK APP INIT

## Express.js, Vite, Tailwindcss

### Install Client

#### React - vite - React router - Tailwindcss

```
npm create vite@latest client -- --template react
cd client
npm install
npm i react-router-dom
```

Install tailwindcss

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configuration tailwind.config.js

```
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
```

Add Tailwind and google fonts index.css

```
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;
* {
  font-family: 'Roboto', sans-serif;
}
```

.eslinetrc.cjs file , Add to 'rules'

```
'react/prop-types': 'off',
```

App.js

```
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
```

pages/Home.jsx

```
function Home() {
  return (
    <>
      <p className='underline'>In the name of Allah the Merciful</p>
    </>
  )
}
export default Home
```

### RUN CLIENT

```
npm run dev
```

##

### Install Server

```
npm i express mongoose dotenv cors moment morgan
npm i concurrently nodemon -D --save
```

### RUN SERVER

```
npm run server
```

##

### Run Server & Client Simultaneously

```
npm run all
```
