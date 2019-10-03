/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const mainCard = document.querySelector('.cards')

axios.get('https:api.github.com/users/AlbertoGalvan001')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
  });


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', 'AlbertoGalvan001'];

followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`)
    .then(response => {
      const newCards = createCard(response.data);
      profile.appendChild(newCards);
    })
})

const profile = document.querySelector('.cards');
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function createCard(array01) {

  //define  elements
  const card = document.createElement('div');
  const avatar = document.createElement('img');
  const card_info = document.createElement('div');
  const usersName = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const githubAddress = document.createElement('a');
  const githubFollowers = document.createElement('p');
  const githubFollowing = document.createElement('p');
  const userBio = document.createElement('p');
  const calendarDiv = document.createElement('div');
  const break_ = document.createElement('br');

  ///append
  card.appendChild(avatar);
  card.appendChild(card_info);
  card_info.appendChild(usersName);
  card_info.appendChild(username);
  card_info.appendChild(location);
  card_info.appendChild(profile);
  profile.appendChild(githubAddress);
  card_info.appendChild(githubFollowers);
  card_info.appendChild(githubFollowing);
  card_info.appendChild(userBio);
  card_info.appendChild(calendarDiv);
  card_info.appendChild(break_);

  //add classes
  card.classList.add("card");
  card_info.classList.add("card-info");
  usersName.classList.add("name");
  username.classList.add("username");
  calendarDiv.classList.add("calendar");


  //content
  avatar.src = array01.avatar_url;
  usersName.textContent = array01.name;
  username.textContent = array01.login;
  location.textContent = `Location: ${array01.location}`;
  githubAddress.href = array01.html_url;
  githubAddress.textContent = array01.html_url;
  githubFollowers.textContent = `Followers: ${array01.followers}`;
  githubFollowing.textContent = `Following: ${array01.following}`;
  userBio.textContent = `Bio: ${array01.bio}`;
  profile.textContent = array01.profile;

  // new GitHubCalendar(calendarDiv, username, {
  //   global_stats: true,
  //   responsive: true
  // })



  return card;

}
console.log(createCard);
/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
