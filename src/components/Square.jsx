const square = (props) => {
  const handleClick = () => {
    if (!props.value) {
      props.setPiece(props.index);
    }
  };

  return (
    <div class="square" onClick={handleClick}>
      {props.value}
    </div>
  );
};

export default square;
