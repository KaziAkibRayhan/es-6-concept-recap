const friendsAge = [34, 54, 89, 77, 22, 90];
const friendsAge2 = [23, 24, 56, 21, 45, 67, 89];

const newFriendsAge = [...friendsAge,...friendsAge2];
// console.log(newFriendsAge);
const [Alom, Kalam , ...rest] = friendsAge;
console.log(Alom, Kalam, rest);