import { useState, useCallback, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button, Container, Grid, Typography } from "@mui/material";
import Card from "./card";
import Modal from "./detailedView";
import Error from "./error";
import useApi from "../api";
import Placeholder from "./placeholder";

const App = () => {
  const [details, setDetails] = useState<any>(null);
  const [forceUpdate, setForceUpdate] = useState({});

  const { getList } = useApi();
  const {
    data: list,
    isError,
    isLoading,
  } = useQuery({ queryKey: ["list"], queryFn: getList });

  const handleClose = useCallback(() => {
    setDetails(null);
  }, []);

  const handleClick = useCallback((item: any) => {
    setDetails(item);
  }, []);

  const handleForceUpdate = useCallback(() => {
    setForceUpdate({});
  }, []);

  const grid = useMemo(() => {
    return list?.map((item: any) => (
      <Grid item xs={2} sm={4} md={4} key={item.transaction_minted}>
        <Card onClick={() => handleClick(item)} {...item} />
      </Grid>
    ));
  }, [list]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" textAlign="center" marginY="1rem">
        NFT List - CloneX
      </Typography>
      {isError ? (
        <Error onClick={handleForceUpdate} />
      ) : (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {isLoading ? <Placeholder /> : grid}
          <Button
            href="https://opensea.io/collection/clonex"
            variant="contained"
            target="_blank"
            style={{ marginTop: "1rem" }}
          >
            View more
          </Button>
        </Grid>
      )}
      <Modal onClose={handleClose} details={details} />
    </Container>
  );
};

export default App;
