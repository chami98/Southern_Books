import Header from "./header";
import SideBar from './sideBar';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { BASE_URL } from './../constants';

const headerHeight = 55;
const sideBarWidth = 250;

const Layout = ({ children, hideSideBar }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(BASE_URL + "/categories").then((result) => {
        
        const payload = {
            categories: [
              { name: "All Categories", id: undefined },
              ...result.data,
            ],
          }

          dispatch({
              type : "SET_CATEGORIES",
              payload : payload
          })
    });
    }, [])

    return ( 
        <div>
            <Header />
            { !hideSideBar && <div style={{ 
                position: "fixed",
                top: headerHeight,
                height: `calc(100% - ${headerHeight}px)`,
                width: sideBarWidth,
            }}>
                <SideBar />
            </div>}
            
            <div style={{marginTop: headerHeight, marginLeft: hideSideBar ? 0 : sideBarWidth}}>
                {children}
            </div>
        </div>
     );
}
 
export default Layout;