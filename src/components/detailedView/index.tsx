import { FC } from "react";
import {
  Link,
  Box,
  DialogTitle,
  DialogContentText,
  DialogContent,
  Dialog,
  Button,
  Typography,
} from "@mui/material";
import { PartialData } from "types";
import Image from "../image";

const OPENSEA_URL = "https://opensea.io/assets/ethereum";

const Modal: FC<Props> = ({ onClose, details }) => {
  const { name, description } = (details?.metadata as PartialData) || {};
  if (!details) {
    return null;
  }

  const href = `${OPENSEA_URL}/${details.token_address}/${details.token_id}`;

  return (
    <Dialog
      open={!!details}
      onClose={onClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title">
        <Link href={href} target="_blank" underline="none">
          {name}
        </Link>
      </DialogTitle>
      <DialogContent>
        <Image data={details.metadata} style={{ marginBottom: "1rem" }} />
        <DialogContentText id="dialog-description">
          {description}
        </DialogContentText>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt="1rem"
        >
          <Typography>Contract address</Typography>
          <Link
            href={`https://etherscan.io/address/${details.token_address}`}
            target="_blank"
            underline="none"
            maxWidth={100}
            noWrap
          >
            {details.token_address}
          </Link>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt="1rem"
        >
          <Button href={href} variant="contained" target="_blank">
            Purchase
          </Button>
          <Button onClick={onClose} variant="outlined">
            Close
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

interface Props {
  onClose: () => void;
  details: {
    token_address: string;
    token_id: string;
    metadata: PartialData;
  };
}

export default Modal;
