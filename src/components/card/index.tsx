import { FC } from "react";
import { CardActionArea, Typography, CardContent, Card } from "@mui/material";
import Image from "../image";

const NFTCard: FC<Props> = ({ onClick, metadata }) => {
  return (
    <Card sx={{ maxWidth: 345 }} onClick={onClick}>
      <CardActionArea>
        <Image data={metadata} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" noWrap>
            {metadata.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {metadata.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

interface Props {
  onClick: (item: unknown) => void;
  metadata: {
    name: string;
    image: string;
    description: string;
    compiler?: string;
    animation_url?: string;
  };
}

export default NFTCard;
