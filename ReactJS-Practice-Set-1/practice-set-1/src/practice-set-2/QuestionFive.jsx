const Phones = ({ gadgetsList }) => {
    return (
      <div className={"Component"}>
        <h1>List of Phones</h1>
        <ul>
          {gadgetsList
            .filter(({ name }) => name === "mobile")
            .map(({ id, name, description, price }) => (
              <li>
                <p>{name}</p>
                <p>INR {price}</p>
                <p>{description}</p>
              </li>
            ))}
        </ul>
      </div>
    );
  };
  
  export default Phones;
  