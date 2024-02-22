import FriendListItem from "./FriendListItem";
import css from "../components/FriendListItem.module.css";
import friends from "../friends.json";
const FriendList = () => {
	return (
		<ul className={css.list}>
			{friends.map((item) => {
				return (
					<li className={css.item} key={item.id}>
						<FriendListItem avatar={item.avatar} name={item.name} isOnline={item.isOnline ? "Online" : "Offline"} />
					</li>
				);
			})}
		</ul>
	);
};

export default FriendList;
