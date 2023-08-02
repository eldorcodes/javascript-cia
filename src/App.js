import logo from './logo.svg';
import './App.css';

function App() {

  // Instructions:
// Given the pre-written code in this file, please write an implementation
// of the sendAverageNotifications function where indicated by the TODO comment
// below. The function you write should find the average high score of all
// the users in both groups and then send a notification to each user containing 
// a message that indicates their score and whether it is equal to, above or below
// the average.

const getUsersFromA = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve([
              { userId: 1, highScore: 73 },
              { userId: 2, highScore: 63 },
              { userId: 3, highScore: 95 },
          ])
      }, 1000);
  });
};

const getUsersFromB = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve([
              { userId: 4, highScore: 51 },
              { userId: 5, highScore: 85 },
          ])
      }, 1500);
  });
};

const sendNotification = (userId, message) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          console.log(`Notification sent to user ${userId}: ${message}`);
          resolve();
      }, 500);

        })
};

const sendAverageNotifications = async () => {
  // TODO: Write the function here
let users = await getUsersFromA()
let usersFromB = await getUsersFromB()
let combinedUsers = users.concat(usersFromB)
var total = 0;
var count = 0;
combinedUsers.forEach((user) => {
  total += user.highScore;
  count++;
})
 let average = total / count 
combinedUsers.forEach((user) => {
  if(user.highScore > average){
   sendNotification(user.userId,`Your score is ${user.highScore} which is above the average ${average}`)
  }else if(user.highScore < average){
   sendNotification(user.userId,`Your score is ${user.highScore} which is below the average ${average}`)
  }else {
   sendNotification(user.userId,`Your score is ${user.highScore} which is equal to average ${average}`)
  }
})
return average

}

(async () => {
  const p1 = performance.now();
  try {
      const average = await sendAverageNotifications();
      console.log(`average = ${average}`);
  } catch (e) {
      console.error(e);
  } finally {
      const p2 = performance.now();
      console.log(`took ${(p2 - p1) / 1000} seconds`);
  }
})();


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>JavaScript Coding Chellenge</h3>
      </header>
    </div>
  );
}

export default App;
