import ProfileCard from './components/prof-card'

import './App.css'

function App() {

  const profiles = [
    {
      name: "Isaac Gartz",
      age: 27,
      title: "Web Developer",
      bio: "I'm a web developer and travel enthusiast. I love to travel and explore new places. I'm also a big fan of food and live music.",
      phone: "+1 234 567 890",
      email: "isaac@gmail.com",
      avatar: "https://media.licdn.com/dms/image/v2/D4E03AQFx28Hgo2w9Hw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1679089964826?e=1749081600&v=beta&t=vPyDQg4IIFoOYk77uFbUCz-_RzEQqNYYNy6DS71ivUI",
      
    },
    {
      name: "John Doe",
      age: 30,
      title: "Software Engineer",
      bio: "I'm a software engineer. I love to code and build new projects.",
      phone: "+1 234 567 890",
      email: "john@gmail.com",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    },
    {
      name: "Jane Doe",
      age: 25,
      title: "UI/UX Designer",
      bio: "I'm a UI/UX designer. I love to design and build new projects.",
      phone: "+1 234 567 890",
      email: "jane@gmail.com",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    }
  ];

  return (
    <>
      <h1>Profile Cards</h1>
      <div className="profile-cards">
        {profiles.map((profile) => (
          <ProfileCard key={profile.name} {...profile} />
        ))}
      </div>
    </>
  )
}

export default App;
