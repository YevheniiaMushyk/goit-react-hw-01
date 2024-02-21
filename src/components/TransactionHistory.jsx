import TransactionItem from "./TransactionItem";
import transactions from "../transactions.json";

const TransactionHistory = () => {
	return (
		<table>
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>
			{transactions.map((item) => {
				return (
					<tbody key={item.id}>
						<TransactionItem type={item.type} amount={item.amount} currency={item.currency} />
					</tbody>
				);
			})}
		</table>
	);
};

export default TransactionHistory;
