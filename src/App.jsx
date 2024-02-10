import Header from './components/Header.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './components/pages/AboutPage.jsx';
import Home from './components/Home.jsx';
import Footer from './components/pages/Footer.jsx';
import NotFound from './components/pages/NotFound.jsx';
import { GithubProvider } from './context/github/GithubContext.js';
import { AlertProvider } from './context/alert/AlertContext.js';
import AlertFeedback from './components/shared/AlertFeedback.jsx';
import User from './components/users/User.jsx';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <div className="App">
          <Router>
            <Header />
            <AlertFeedback />
            <Routes>
              <Route path='/' element={
                <>
                  <Home />
                </>
              } />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/users/:login' element={<User />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </AlertProvider>
    </GithubProvider>
  );
}
export default App;
