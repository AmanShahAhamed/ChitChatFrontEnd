interface IImageContainerProps {
  url: string;
}
const ImageContainer: React.FC<IImageContainerProps> = ({ url }) => {
  return <img style={imgStyle} src={url}></img>;
};

const imgStyle: React.CSSProperties = {
  height: "50vh",
  justifyContent: "center",
};

export default ImageContainer;
