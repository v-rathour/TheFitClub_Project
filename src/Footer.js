import React from 'react'
import Logo from './image/logo (1).png'
export default function Footer() {
  return (
    <React.Fragment>
        <footer>
          <div className="icon">
                <li>
                    <label htmlFor="icon">
                    <i class="fa-brands fa-instagram"></i>
                    </label>
                </li>
                <li>
                    <label htmlFor="icon">
                     <i class="fa-brands fa-github"></i>
                    </label>
                </li>
                <li>
                    <label htmlFor="icon">
                    <i class="fa-brands fa-linkedin-in"></i>
                    </label>
                </li>
            </div>
            <div>
                <img src={Logo} alt="" />
            </div>
        </footer>
    </React.Fragment>
  )
}
