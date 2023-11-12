import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function ButtonComponent({ onPress }) {
  return (
    <Box sx={{ mx: 60.5, width: 200, p: 2 }}>
      <Button onClick={onPress} variant="contained">
        Press to search
      </Button>
    </Box>
  );
}
