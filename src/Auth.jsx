import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { LoadingButton } from "@mui/lab/";
import { RuleInput } from "./functions/Rules";
import axios from "axios";
import Swal from "sweetalert2";
import config from "./configs/config.json";

export default () => {
  // ประกาศรับ เพื่อให้ใช้ใน function ภายในได้
  const navigate = useNavigate();

  // Set State
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    username: null,
    password: null,
  });
  const [rule, setRule] = useState({
    username: null,
    password: null,
  });

  // function กดปิดเปิด มองเห็น รหัสผ่าน
  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // element ดวงตา รหัสผ่าน
  const eyesShowPassword = () => {
    return (
      <InputAdornment position="end">
        <IconButton edge="end" onClick={onShowPassword}>
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    );
  };

  // แจ้งเตือน Error
  const alertError = (msgError) => {
    Swal.fire({
      icon: "error",
      text: msgError ?? "พบข้อผิดพลาด ไม่สามารถเข้าสู้ระบบได้ !?",
      confirmButtonColor: "#1976D2",
      confirmButtonText: "ตกลง",
    });
  };

  // function เมื่อกดปุ่ม login
  const onClickLogin = () => {
    if (!user.username && !user.password) {
      return;
    } else {
      axios
        .post(config.baseApi + "/auth/login", user)
        .then((res) => {
          if (res.data.ength == 0) {
            return Swal.fire({
              icon: "error",
              text: "ชื่อผู้ใช้ หรือ รหัสผ่าน ไม่ถูกต้อง !?",
              confirmButtonColor: "#1976D2",
              confirmButtonText: "ตกลง",
            });
          } else {
            localStorage.setItem("auth_token", res.data.token);
            let userType = res?.data?.user?.type
            navigate(userType == "admin" ? "/admin" : userType == "user" ? "/" : "/error");
          }
        })
        .catch((err) => {
          console.log(err.response.data);
          alertError(err?.response?.data);
        });
    }
  };

  // render
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
          label="ชื่อผู้ใช้"
          size="small"
          onInput={(event) =>
            setUser((state) => {
              let val = {
                ...state,
                username: event.target.value,
              };
              return val;
            }) ||
            RuleInput(
              setRule,
              event.target.value,
              "username",
              "กรุณาระบุ Username"
            )
          }
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              onClickLogin();
            }
          }}
          error={rule.username ? true : false}
          helperText={rule.username}
        ></TextField>
        <TextField
          sx={{
            width: "100%",
            my: 2,
          }}
          label="รหัสผ่าน"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: eyesShowPassword(),
          }}
          size="small"
          onInput={(event) =>
            setUser((state) => {
              let val = {
                ...state,
                password: event.target.value,
              };
              return val;
            }) ||
            RuleInput(
              setRule,
              event.target.value,
              "password",
              "กรุณาระบุ password"
            )
          }
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              onClickLogin();
            }
          }}
          error={rule.password ? true : false}
          helperText={rule.password}
        ></TextField>
        <LoadingButton
          sx={{
            width: "100%",
            my: 2,
          }}
          loadingIndicator="Loading…"
          variant="contained"
          disabled={user.username && user.password ? false : true}
          onClick={onClickLogin}
        >
          เข้าสู่ระบบ
        </LoadingButton>
      </Box>
    </Container>
  );
};
