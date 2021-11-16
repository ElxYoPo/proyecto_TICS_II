import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HistoryIcon from '@mui/icons-material/History';
import InventoryIcon from '@mui/icons-material/Inventory';
import ListItemIcon from '@mui/icons-material/List';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon/>,
        link: "/home",
    },
    {
        title: "Perfil",
        icon: <PersonIcon/>,
        link: "/perfil",
    },
    {
        title: "Inventario",
        icon: <InventoryIcon/>,
        link: "/inventario",
    },
    {
        title: "Despacho",
        icon: <LocalShippingIcon/>,
        link: "/despacho",
    },
    {
        title: "Historial",
        icon: <HistoryIcon/>,
        link: "/historial",
    },
    {
        title: "Usuarios",
        icon: <ListItemIcon/>,
        link: "/usuarios",
    }
];

