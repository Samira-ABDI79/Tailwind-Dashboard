
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import ScrollToTop from "./ScrollToTop/ScrollToTop"
import {Home , Users ,Comments,Posts} from "./Pages"
import Products from "./Pages/Product";


function App() {
	return (
		<>
			<Router>
				<ScrollToTop>
					<Routes>
					
			
						<Route element={<Layout />}>
						
<Route path='/' element={<Home />} />
<Route path='/users' element={<Users />} />
<Route path='/comments' element={<Comments />} />
<Route path='/posts' element={<Posts />} />
<Route path='/products' element={<Products />} />




          </Route>

        </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;