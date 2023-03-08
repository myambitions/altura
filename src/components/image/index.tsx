import { FC } from "react";
import CardMedia from "@mui/material/CardMedia";
import { normalizeImage } from "../../helpers";

const Image: FC<Props> = ({ data, ...props }) => {
  const img = normalizeImage(data.animation_url || data.image);

  return data.animation_url ? (
    <video autoPlay loop width="100%" {...props}>
      <source src={img} type="video/webm" />
      <source src={img} type="video/mp4" />
      <CardMedia component="img" image={img} alt={data.name} {...props} />
    </video>
  ) : (
    <CardMedia component="img" image={img} alt={data.name} {...props} />
  );
};

interface Props {
  data: {
    animation_url?: string;
    image: string;
    name: string;
  };
  style?: {};
}

export default Image;
