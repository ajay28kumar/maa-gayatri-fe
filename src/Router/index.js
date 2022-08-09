import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    Home,
    Billing,
    Login,
    Stocks
} from '../Page';
import Header from '../Component/Headers'

const PageRouter = () => {
   return (
   <BrowserRouter>
   <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="invoice" element={<Billing />} />
            <Route path="stocks" element={<Stocks />} />
        </Routes>
    </BrowserRouter>)
}

export default PageRouter;