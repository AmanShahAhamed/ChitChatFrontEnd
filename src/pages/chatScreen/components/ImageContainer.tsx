const ImageContainer: React.FC = () => {
  return <img style={imgStyle} src="logo.jpg"></img>;
};

const imgStyle: React.CSSProperties = {
  height: "50vh",
  justifyContent: "center",
};

export default ImageContainer;
