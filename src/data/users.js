// Generate 100 dummy users
const users = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    points: Math.floor(Math.random() * 1000)
  }));
  
  // Sort by points (high to low)
  users.sort((a, b) => b.points - a.points);
  
  // Add rank
  const rankedUsers = users.map((user, index) => ({
    ...user,
    rank: index + 1
  }));
  
  export default rankedUsers;
  