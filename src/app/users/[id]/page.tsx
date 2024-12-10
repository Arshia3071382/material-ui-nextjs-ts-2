import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";
import { User } from "@/app/ui/UsersCard";

interface Props {
  params: {
    id: string;
  };
}

const UserPage = async ({ params }: Props) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
    
  );
  const user: User = await res.json();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="linear-gradient(135deg, #6D83F2 30%, #90CAF9 90%)"
      padding={2}
    >
      <Card
        sx={{
          maxWidth: 400,
          width: "100%",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
          borderRadius: 3,
          bgcolor: "#fff",
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <Avatar
            sx={{
              width: 80,
              height: 80,
              margin: "0 auto",
              marginBottom: 2,
              bgcolor: "#6D83F2",
              color: "#fff",
              fontSize: "2rem",
            }}
          >
            {user.name[0]}
          </Avatar>
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#333" }}
          >
            {user.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ marginBottom: 1 }}
          >
            ID: {user.id}
          </Typography>
          <Typography variant="body1" color="#555">
            Email: {user.email}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserPage;