import FriendListItem from "./FriendListItem";
import friends from "../friends.json";
const FriendList = () => {
	return (
		<ul>
			{friends.map((item) => {
				return (
					<li key={item.id}>
						<FriendListItem avatar={item.avatar} name={item.name} isOnline={item.isOnline ? "Online" : "Offline"} />
					</li>
				);
			})}
		</ul>
	);
};

export default FriendList;
