const Bread = (props) => {
  return ( 
    <>
    <div className="bread-element">
      <div className="bread-header">
        <h2>{props.bread.name}</h2>
        <h4>difficulty: {props.bread.difficulty}</h4>
      </div>
      <div className="bread-ingredients">
        {props.bread.ingredients.map(ingredient =>
          <ul>
            <li>
              {ingredient}
            </li>
          </ul>
        )}
      </div>
    </div>
    </>
  );
}

export default Bread;