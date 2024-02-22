import css from "../components/TransactionHistory.module.css";
const TransactionItem = ({ type, amount, currency }) => {
	return (
		<tr>
			<td className={css.column1}>{type}</td>
			<td className={css.column2}>{amount}</td>
			<td className={css.column3}>{currency}</td>
		</tr>
	);
};

export default TransactionItem;
