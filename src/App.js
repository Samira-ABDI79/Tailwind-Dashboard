
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import ScrollToTop from "./ScrollToTop/ScrollToTop"
import {Home , Users} from "./Pages"
function App() {
	return (
		<>
			<Router>
				<ScrollToTop>
					<Routes>
					
			
						<Route element={<Layout />}>
						
<Route path='/' element={<Home />} />
<Route path='/' element={<Users />} />

          </Route>

        </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;