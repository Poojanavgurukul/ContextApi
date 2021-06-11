import NewBookForm from "./Components/BookForm";
import BookList from "./Components/BookLists";
import NavBar from "./Components/Navgbar";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import EditBook from "./Components/EditBook";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <ThemeContextProvider>
        <AuthContextProvider>
          <BookContextProvider>
            <NavBar />
                <Route exact path='/'>
                  <BookList />
                  </Route>
                <Route path='/add'>  
                  <NewBookForm />
               </Route>
               <Route path='/edit/:id'>  
                  <EditBook />
               </Route>
          </BookContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
