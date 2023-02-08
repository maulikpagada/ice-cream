import { Route, Switch } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './container/Home/Home';
import About from './container/About/About';
import Product from './container/Product/Product';
import Services from './container/Services/Services';
import Gallery from './container/Gallery/Gallery';
import Contact from './container/Contact/Contact';
import Auth from './container/Auth/Auth';
import Fromval from './container/Fromval/Fromval';
import Layout from './admin/component/Layout/Layout';
import User from './admin/container/User/User';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import { configuerState } from './redux/store';
// import Aproduct from './admin/AProduct/Aproduct'


function App() {

  const store = configuerState();
  return (
    <>
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

      {/* <Layout>
        <Switch>
          <Route exact path={"/User"} component={User} />
          <Route exact path={"/AProduct"} component={Aproduct} />
        </Switch>
      </Layout> */}
    </>



  );
}

export default App;