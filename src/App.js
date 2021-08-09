import React from "react";

function App() {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "noName" },
  ];
  return (
    <React.Fragment>
      {profiles.map((profile, index) => {
        return <User key={index} name={profile.name} age={profile.age} />;
      })}
    </React.Fragment>
  );
}

const User = (props) => {
  return (
    <div>
      Hi, I am {props.name} and {props.age} years old!
    </div>
  );
};

User.defaultProps = {
  age: 2,
};

export default App;
