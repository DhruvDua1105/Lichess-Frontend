import React from 'react';

const Loader = ({ isLoading }) => {
	return (
		<div className={`sidebar-background fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 flex items-center justify-center ${isLoading ? '' : 'hidden'}`}>
			<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
		</div>
	);
};

export default Loader;
