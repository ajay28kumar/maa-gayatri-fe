import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    Home,
    Billing,
    Login,
    EditStocks
} from '../Page';
import Header from '../Component/Headers';


const PageRouter = () => {
   return (
   <BrowserRouter>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="invoice" element={<Billing />} />
            <Route path="edit-stocks" element={<EditStocks />}/>
            <Route path="edit-stocks/:itemId" element={<EditStocks />}/>
        </Routes>
    </BrowserRouter>)
}

export default PageRouter;