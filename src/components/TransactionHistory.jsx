import TransactionItem from "./TransactionItem";
import transactions from "../transactions.json";
import css from "../components/TransactionHistory.module.css";

const TransactionHistory = () => {
	return (
		<table className={css.table}>
			<thead className={css.thead}>
				<tr>
					<th className={css.ttitle}>Type</th>
					<th className={css.ttitle}>Amount</th>
					<th className={css.ttitle}>Currency</th>
				</tr>
			</thead>
			{transactions.map((item) => {
				return (
					<tbody className={css.line} key={item.id}>
						<TransactionItem type={item.type} amount={item.amount} currency={item.currency} />
					</tbody>
				);
			})}
		</table>
	);
};

export default TransactionHistory;
