import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Settings() {
  return (
    <div className='settings' >
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className='settingsForm' >
          <label>Profile Picture</label>
          <div className="settingspp">
            <img src='https://www.hdwallpapers.in/download/beach_mountain_ocean_with_reflection_on_water_hd_nature-2560x1440.jpg' alt='' />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type='file' id='fileInput' style={{display:"none"}} />
          </div>
          <label >Username</label>
          <input type="text" placeholder='Enter Your Name' />
          <label >Email</label>
          <input type="email" placeholder='Enter Your Mail' />
          <label >Password</label>
          <input type="password" placeholder='Enter Your password' />
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
