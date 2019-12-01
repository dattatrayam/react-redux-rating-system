import React from 'react';
import BookDashboard from '../containers/book-dashboard'


function App() {
	return (
		<div className="container">
			<div className="container-body">
				<div className="header">
					<h3>Book Rating System</h3>
				</div>

				<div className="bookList">
					<BookDashboard />
				</div>
			</div>
		</div>
	);
}

export default App;


//https://github.com/dcaramelo/react-redux-simple-example


//https://medium.com/front-end-developers/react-redux-tutorial-d1f6c6652759