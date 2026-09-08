import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import WebIcon from '@mui/icons-material/Web';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';

const navIcons = [
  <HomeIcon key="home" />,
  <InfoIcon key="about" />,
  <MiscellaneousServicesIcon key="services" />,
  <WebIcon key="portfolio" />,
  <PhoneForwardedIcon key="contact" />,
];

const SideNav = ({ openDrawer, closeDrawer, navItems = [] }) => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1.5,
        }}
      >
        <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
          MENU
        </Typography>
        <IconButton onClick={closeDrawer} aria-label="close menu">
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      <List>
        {navItems.map((item, index) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component="a"
              href={item.href}
              onClick={closeDrawer}
            >
              <ListItemIcon>{navIcons[index]}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer open={openDrawer} onClose={closeDrawer}>
      {DrawerList}
    </Drawer>
  );
};

export default SideNav;
