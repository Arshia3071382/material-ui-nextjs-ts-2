"use client";
import { Menu as MenuIcon, Close } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <>
      <AppBar
        position="static"
        dir="rtl"
        color="transparent"
        elevation={1}
        sx={{ py: 0.5 }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Image
              src="./tapsi.svg"
              width={102}
              height={60}
              alt="alibaba logo"
            />

            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              fontFamily={"Tahoma"}
            >
              <MenuItem>ویدیو</MenuItem>
              <MenuItem>پشتیبانی</MenuItem>
              <MenuItem>امور سهام</MenuItem>
              <MenuItem>تپسی‌پک</MenuItem>
              <MenuItem>فرصت های شغلی</MenuItem>
              <MenuItem>وبلاگ</MenuItem>
              <MenuItem>
                <Button
                  sx={{
                    backgroundColor: "#fe5722",
                    color: "white",
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    fontWeight: "bold",
                  }}
                >
                  دانلود تپسی
                </Button>
              </MenuItem>
            </Box>

            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                size="large"
                color="inherit"
                onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                {anchorEl ? <Close /> : <MenuIcon />}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <MenuItem>ویدیو</MenuItem>
                <MenuItem>پشتیبانی</MenuItem>
                <MenuItem>امور سهام</MenuItem>
                <MenuItem>تپسی‌پک</MenuItem>
                <MenuItem>فرصت های شغلی</MenuItem>
                <MenuItem>وبلاگ</MenuItem>
                <MenuItem>
                  <Button
                    sx={{
                      backgroundColor: "#fe5722",
                      color: "white",
                      px: 3,
                      py: 1,
                      borderRadius: 2,
                      fontFamily: "Tahoma",
                      fontWeight: "bold",
                    }}
                  >
                    دانلود تپسی
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "400px",
          overflow: "hidden",
        }}
      >
        <Image
          src="./banner.webp.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </Box>
    </>
  );
};

export default Header;
