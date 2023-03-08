import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Skeleton,
} from "@mui/material";

const placeholderArray = new Array(12).fill(undefined);

const Placeholder = () => {
  return (
    <>
      {placeholderArray.map((_, idx) => (
        <Grid item xs={2} sm={4} md={4} key={idx}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <Skeleton variant="rounded" width={345} height={345} />
              <CardContent>
                <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "0.875rem" }} />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default Placeholder;
