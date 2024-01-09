import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          {/* <Typography>Home</Typography> */}
          <Tab label="Home" LinkComponent={NavLink} to="/" textColor="white" />
          <Tabs textColor="white" sx={{ ml: "auto" }}>
            <Tab LinkComponent={NavLink} to="/add" label="Add New Book" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
