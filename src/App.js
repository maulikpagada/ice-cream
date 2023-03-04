import { Route, Switch } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './container/Home/Home';
import About from './container/About/About';
// import Product from './container/Product/Product';
import Services from './container/Services/Services';
import Gallery from './container/Gallery/Gallery';
import Contact from './container/Contact/Contact';
import Auth from './container/Auth/Auth';
import Fromval from './container/Fromval/Fromval';
import Layout from './admin/component/Layout/Layout';
import User from './admin/container/User/User';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import Aproduct from './admin/AProduct/Aproduct'
import { Provider } from 'react-redux';
import { configureState } from './redux/store';
import Counter from './container/counter/Counter';
import { ThemeProvider } from './context/ThemeContext';


function App() {

  const store = configureState();

  return (
    <>
      {/* <ThemeProvider>
        <Header />
        <Switch>
          <PublicRoute exact path={"/"} component={Home} />
          <PublicRoute exact path={"/about"} component={About} />
          <PrivateRoute exact path={"/product"} component={Product} />
          <PublicRoute exact path={"/services"} component={Services} />
          <PublicRoute exact path={"/gallery"} component={Gallery} />
          <PublicRoute exact path={"/contact"} component={Contact} />
          <PublicRoute exact path={"/auth"} restricted={true} component={Auth} />
          <PublicRoute exact path={"/fromval"} component={Fromval} />
        </Switch>
        <Footer />
      </ThemeProvider> */}

      <Provider store={store}>
        <Layout>
          <Switch>
            <Route exact path={"/User"} component={User} />
            <Route exact path={"/AProduct"} component={Aproduct} />
            <Route exact path={"/Counter"} component={Counter} />
          </Switch>
        </Layout>
      </Provider>
    </>
  );
}

export default App;