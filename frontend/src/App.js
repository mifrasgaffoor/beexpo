import "antd/dist/antd.min.css";
import { createBrowserHistory } from "history";
import EventInfo from "./pages/Event/EventInfo";
import PostedEvent from "./pages/Event/PostedEvent";
import PostEvent from "./pages/Event/PostEvent";
import Profile from "./pages/Profile/Company/Profile";
import Login from "./components/Login";
import UserRegister from "./components/UserRegister";
import StudentDefaultLayout from "./Layout/StudentDefaultLayout";
import EventHome from "./pages/Event/EventHome";
import PostedProject from "./pages/Project/PostedProject";
import PostProject from "./pages/Project/PostProject";
import EventPayment from "./pages/Event/EventPayment";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StudentProfile from "./pages/Profile/Student/StudentProfile";
import AllJobs from "./pages/Job/AllJobs";
import PostJob from "./pages/Job/PostJob";
import PostedJob from "./pages/Job/PostedJob";
import AppliedJobs from "./pages/Job/AppliedJobs";
import AppliedProject from "./pages/Project/AppliedProject";

import PostedBlog from "./pages/Blog/PostedBlog";
import AdminDefaultLayout from "./Layout/AdminDefaultLayout";
import Dashboard from "./components/Admin/Dashboard";
import ManageUser from "./components/Admin/ManageUser";
import UserManage from "./pages/Admin/UserManage";
import AllProject from "./pages/Project/AllProject";
import ProjectInfo from "./pages/Project/ProjectInfo";
import FindMentor from "./pages/Mentor/FindMentor";
import EditEvent from "./pages/Event/EditEvent";
import user from "./components/user";
import CompanyDefaultLayout from "./Layout/CompanyDefaultLayout";
import MentorDefaultLayout from "./Layout/MentorDefaultLayout";

import BlogHomePage from "./pages/Blog/BlogHomePage";
import ForgotPassword from "./components/ForgotPassword";
function App() {
  const history = createBrowserHistory();
  const data = JSON.parse(localStorage.getItem("user"));
  console.log(data);

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          {/* anyone one can access */}
          <Route path="/" exact component={StudentProfile} />
          <Route path="/userregister" exact component={UserRegister} />
          <Route path="/login" exact component={Login} />
          {/* students only aceess  */}
          <Route path="/student" exact component={StudentDefaultLayout} />
          <Route path="/studentprofile" exact component={StudentProfile} />
          <Route path="/getallevents" exact component={EventHome} />
          <Route path="/eventInfo/:id" exact component={EventInfo} />
          <Route
            path="/eventinfo/EventPayment/:id"
            exact
            component={EventPayment}
          />

          <Route path="/getalljobs" exact component={AllJobs} />
          <Route path="/appliedJobs" exact component={AppliedJobs} />
          <Route path="/getallProjects" exact component={AllProject} />
          <Route path="/appliedProjects" exact component={AppliedProject} />
          <Route path="/bloghomepage" exact component={BlogHomePage} />
          <Route path="/postedBlog" exact component={PostedBlog} />
          <Route path="/projectInfo" exact component={ProjectInfo} />
          <Route path="/findMentor" exact component={FindMentor} />
          {/* companies only aceess  */}
          <Route path="/company" exact component={CompanyDefaultLayout} />
          <Route path="/companyprofile" exact component={Profile} />
          <Route path="/postevent" exact component={PostEvent} />
          <Route path="/postedevent" exact component={PostedEvent} />
          <Route path="/postjob" exact component={PostJob} />
          <Route path="/postedjob" exact component={PostedJob} />
          <Route path="/postproject" exact component={PostProject} />
          <Route path="/postedproject" exact component={PostedProject} />
          <Route path="/eventedit/:id" exact component={EditEvent} />
          {/* mentor only aceess  */}
          <Route path="/mentor" exact component={MentorDefaultLayout} />
          {/* admin only aceess  */}
          <Route path="/admin" exact component={AdminDefaultLayout} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/manageuser" exact component={UserManage} />
          <Route path="/user" exact component={user} />
          <Route path="/forgotpassword" exact component={ForgotPassword} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
