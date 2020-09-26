import React, {useState} from 'react'
import { AiOutlineBell } from 'react-icons/ai'
import DropdownMenu from 'react-dd-menu'
import { RiOpenArmFill } from 'react-icons/ri'



const Header = () => {

    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open);
      }
    
      const close = () => {
        setOpen(false);
      }
    
      const click = () => {
        console.log('You clicked an item');
      }

      const menuOptions = {
        isOpen: open,
        close: close,
        toggle: <RiOpenArmFill onClick={toggle}/>,
        align: 'center'
      };

    return (
        <div className="dashboard-header">
            <div className="logo-wrap ">
                <span>bridgero</span>
                <input type="text" placeholder="Search..." style={{ marginLeft: '2rem' }} />
            </div>

            <div className="user-wrap">
                <AiOutlineBell /> 

                <DropdownMenu {...menuOptions}>
                  <li id="profile" onClick={click}>
                    Profile
                  </li>
                  <li id="settings" onClick={click}>
                    Settings
                  </li>
                  <li id="logout" onClick={click}>
                    Logout
                  </li>

                  <li><small>Version x.x.x</small></li>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default Header
