import React, { Component, Suspense } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Spinner from "./components/Spinner";
import TopNav from "./components/Navs/TopNav";
import ScrollToTop from "./components/common/ScrollToTop";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import connect from "react-redux/lib/connect/connect";
import Feedback from "feeder-react-feedback"; // import Feedback component
import "feeder-react-feedback/dist/feeder-react-feedback.css";

const Home = React.lazy(() => import('./views/Home'));
const CatDetails = React.lazy(() => import('./views/CatDetails'));

/** Private Route (for check authentication)*/
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        // this should be the sms/mms token saved from api
        localStorage.getItem('token') ? (
          children
        ) :
          <Redirect to={
            { pathname: "/login", state: { from: location } }
          } />
      }
    />
  )
}


class Routes extends Component {
  render() {
    return (
      <div>

        <Suspense fallback={
          <div className="circle-loader">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }>


          <Spinner />
          <TopNav />
          <div className="main-app">
            <div className="">
              <div className="">

                <Switch>
                  <ScrollToTop>
                    {/** home component route */}
                    <Route exact path="/(|home)">
                      <Home />
                    </Route>
                    {/** CatDetails component route */}
                    <Route exact path="/category/details/:id">
                      <CatDetails />
                    </Route>
                    <PrivateRoute path="/path">
                      <div>Privet-Route</div>
                    </PrivateRoute>
                  </ScrollToTop>
                </Switch>
              </div>
            </div>
          </div>
          <Footer />
          {/*Global toast for messages*/}
          <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={3000} />
          <Feedback primaryColor={'#007ad9'} hoverBorderColor={'#007ad9'} projectId="5f3fbd99f8511a000408ddea" />
        </Suspense>
      </div>
    );
  }
}


const mapDispatchToProps = {};

const mapStateToProps = ({ MenuReducer }) => {
  const { menu } = MenuReducer;
  return { menu }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Routes));

