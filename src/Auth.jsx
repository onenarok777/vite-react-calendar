import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Box } from "@mui/system";
import {
  Card,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";

export default () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    username: null,
    password: null,
  });

  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onClickLogin = () => {
    console.log(user);
  };

  const eyesShowPassword = () => {
    return (
      <InputAdornment position="end">
        <IconButton edge="end" onClick={onShowPassword}>
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    );
  };

  return (
    <Container className="min-vh-100 d-flex">
      <Box
        sx={{
          width: "30rem",
          height: 450,
          borderRadius: 5,
        }}
        className="m-auto"
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
          }}
        >
          เข้าสู่ระบบ
        </Typography>
        <hr />
        <TextField
          sx={{
            width: "100%",
            my: 2,
            rouded: 2,
          }}
          label="username"
          size="small"
          onInput={(event) =>
            setUser((state) => {
              let val = {
                username: event.target.value,
                password: state.password,
              };
              return val;
            })
          }
        ></TextField>
        <TextField
          sx={{
            width: "100%",
            my: 2,
          }}
          label="password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: eyesShowPassword(),
          }}
          size="small"
          onInput={(event) =>
            setUser((state) => {
              let val = {
                username: state.username,
                password: event.target.value,
              };
              return val;
            })
          }
        ></TextField>
        <LoadingButton
          sx={{
            width: "100%",
            my: 2,
          }}
          loadingIndicator="Loading…"
          variant="contained"
          onClick={onClickLogin}
        >
          เข้าสู่ระบบ
        </LoadingButton>
      </Box>
    </Container>
  );
};
