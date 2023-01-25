import { Route , Switch} from 'react-router-dom';
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
import Medicines from './admin/container/Medicines/Medicines';


function App() {
  return (
    // <>
    //   <Header />
    //   <Switch>
    //   <Route exact path={"/"} component={Home}/>
    //   <Route exact path={"/about"} component={About}/>
    //   <Route exact path={"/product"} component={Product}/>
    //   <Route exact path={"/services"} component={Services}/>
    //   <Route exact path={"/gallery"} component={Gallery}/>
    //   <Route exact path={"/contact"} component={Contact}/>
    //   <Route exact path={"/auth"} component={Auth}/>
    //   <Route exact path={"/fromval"} component={Fromval}/>
    //   </Switch>
    //   <Footer />
    // </>

    <Layout>
      <Switch>
      <Route exact path={"/Medicines"} component={Medicines}/>
      </Switch>
    </Layout>

  );
}

export default App;