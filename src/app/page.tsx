import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "next/link";
import UserCards from "./ui/UsersCard";
export default function Home() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          borderRadius: "15px",
          p: 4,
          m: 4,
        }}
      >
        <Button variant="contained" color="info">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            href="/users/new"
          >
            Regiser User
          </Link>
        </Button>
        <UserCards />
      </Box>
    </Container>
  );
}
