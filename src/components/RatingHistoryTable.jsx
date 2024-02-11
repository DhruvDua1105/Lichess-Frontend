import React from 'react';

const RatingHistoryTable = ({ ratingHistory }) => {
	return (
		<div className="">
			<table className="min-w-full divide-y mt-6">
				<thead className="gradient-background">
					<tr>
						<th scope="col" className="px-4 py-2 text-left text-s font-montserrat font-semibold text-gray-800 uppercase">Game Mode</th>
						<th scope="col" className="px-4 py-2 text-left text-s font-montserrat font-semibold text-gray-800 uppercase">Date</th>
						<th scope="col" className="px-4 py-2 text-left text-s font-montserrat font-semibold text-gray-800 uppercase">Ratings</th>
					</tr>
				</thead>
				<tbody className="fields-background">
					{ratingHistory
						.filter(entry => entry.points.length > 0)
						.map((entry, index) => (
							<React.Fragment key={index}>
								{entry.points.map((point, index2) => (
									<tr key={index2} className="fields-background">
										{index2 === 0 && (
											<td rowSpan={entry.points.length} className="border border-gray-400 px-4 py-2">{entry.name}</td>
										)}
										<td className="border border-gray-400 px-4 py-2">
											{new Date(point[0], point[1], point[2]).toLocaleDateString()}
										</td>
										<td className="border border-gray-400 px-4 py-2">{point[3]}</td>
									</tr>
								))}
							</React.Fragment>
						))}
				</tbody>

			</table>
		</div>
	);
};

export default RatingHistoryTable;
