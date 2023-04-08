
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import ScrollToTop from "./ScrollToTop/ScrollToTop"
import {Home , Users ,Comments,Posts} from "./Pages"


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



          </Route>

        </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;