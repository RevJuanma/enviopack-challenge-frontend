import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/user/userSlice";
import CustomButton from "../components/CustomButton/CustomButton";
import {
  Alert,
  Box,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { APP_STRINGS } from "../constants/appStrings";

const Login = () => {
  const { LOGIN } = APP_STRINGS;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {LOGIN.LOGIN}
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label={LOGIN.USERNAME}
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label={LOGIN.PASSWORD}
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <CustomButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Log In"}
          </CustomButton>
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {LOGIN.ERROR_CREDENTIALS}
            </Alert>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
