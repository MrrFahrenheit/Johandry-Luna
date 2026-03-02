import type { INavMap } from "../../models/interfaces/INavMap";
import HouseIcon  from "../../assets/images/House.png";

export const TopNavBarMap:Array<INavMap> = [
    {
        id: 1,
        label: "Home",
        path: "/",
        icon:HouseIcon
    },
    {
        id: 2,
        label: "Projects",
        path: "/projects"
    },
    {
        id: 3,
        label:"About Me",
        path: "/about"
    }
]