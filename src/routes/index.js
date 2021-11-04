import { BrowserRouter, Route, Switch } from "react-router-dom"
import IndexPage from "../pages"
import HomePage from "../pages/home"
import LoginPage from "../pages/login"
import NoMatchPage from "../pages/noMatch"
import Exploring from '../pages/exploring/exploring'


const RootRoute = () => {

    return (
        <BrowserRouter>
            <Switch>

                {/* 기본 루트페이지 */}
                <Route path='/' component={IndexPage} exact key="index" />

                {/* 추가되는 페이지 */}
                <Route path='/home' component={HomePage} exact key="home" />
                <Route path='/login' component={LoginPage} exact key="loign" />
                <Route path='/exploring' component={Exploring} exact key='exploring'/>
                {/* 경로가 유효하지 않을 때 */}
                <Route path='*' component={NoMatchPage} key="noMatch" />

            </Switch>
        </BrowserRouter>
    )
}


export default RootRoute
