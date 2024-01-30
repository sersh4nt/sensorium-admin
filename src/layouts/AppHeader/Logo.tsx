import myImage from "../../assets/images/logo.png";
import { Image } from "@mantine/core";

const Logo: React.FC = () => {
  return <Image src={myImage} h={30} w={100} />;
};

export default Logo;
