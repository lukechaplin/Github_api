import Button from "@mui/material/Button";

export default function ButtonComponent({ onPress }) {
  return (
    <Button onClick={onPress} variant="contained">
      Press to search
    </Button>
  );
}
