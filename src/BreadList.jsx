import Bread from "./Bread";

const BreadList = (props) => {
  return ( 
    <>
    {props.breads.map(bread =>
      <Bread key={bread.name} bread={bread}/>
      )}
    </>
  );
}

export default BreadList;