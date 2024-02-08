import React, { useContext, useState, Fragment } from "react";
import { Wrapper } from "../../styles";
import { MainStore } from "../../store";
import pageCatlog from "../../config/page.json";
import iconCatlog from "../../config/icon.json";
import urlCatlog from '../../config/url.json'
import { ShowIcon } from "../icon";

/*
Navigation Bar
   - Used for top of the screen
   - Used to Navigate 
*/
const Navbar = ({ colors }) => {
  const [isMenuTabActive, setMenuTabActive] = useState(false);
  const { globalState, setGlobalState } = useContext(MainStore);
  const { activePage } = globalState;

  const onTabActive = "font-mono font-bold";
  const onTabInActive = `font-mono`;

  const activatePage = (e, pageCatlog) => {
    // Update only for other link - not for same link
    if (pageCatlog !== activePage) {
      setGlobalState({
        ...globalState,
        activePage: pageCatlog,
      });
    }
  };

  /* NAVIGATION UTILS */
  const NavContent = () => (
    <Fragment>
      <div
        role="button"
        className={activePage === pageCatlog.home ? onTabActive : onTabInActive}
        onClick={(e) => {
          activatePage(e, pageCatlog.home);
        }}
      >
        <span style={{ color: colors.pink }}>#</span>
        <span
          style={activePage === pageCatlog.home ? { color: colors.white } : {}}
        >
          home
        </span>
      </div>
      <div
        role="button"
        className={
          activePage === pageCatlog.work ? onTabActive : onTabInActive
        }
        onClick={(e) => {
          activatePage(e, pageCatlog.work);
        }}
      >
        <span style={{ color: colors.pink }}>#</span>
        <span
          style={activePage === pageCatlog.work ? { color: colors.white } : {}}
        >
          works
        </span>
      </div>
      <div
        role="button"
        className={
          activePage === pageCatlog.about ? onTabActive : onTabInActive
        }
        onClick={(e) => {
          activatePage(e, pageCatlog.about);
        }}
      >
        <span style={{ color: colors.pink }}>#</span>
        <span
          style={activePage === pageCatlog.about ? { color: colors.white } : {}}
        >
          about-me
        </span>
      </div>
      <div
        role="button"
        className={
          activePage === pageCatlog.contact ? onTabActive : onTabInActive
        }
        onClick={(e) => {
          activatePage(e, pageCatlog.contact);
        }}
      >
        <span style={{ color: colors.pink }}>#</span>
        <span
          style={
            activePage === pageCatlog.contact ? { color: colors.white } : {}
          }
        >
          contacts
        </span>
      </div>
    </Fragment>
  );
  
  const openInNewTab= (url) =>{
    window.open(url, "_blank")
  }
  const SocialMediaContent= () =>(
    <div className="flex md:flex-col justify-evenly md:h-[150px]">
      <div role="button" onClick={()=>openInNewTab(urlCatlog.email)}>
        <ShowIcon iconName={iconCatlog.email}/>
      </div>
      <div role="button" onClick={()=>openInNewTab(urlCatlog.github)}>
        <ShowIcon iconName={iconCatlog.github}/>
      </div>
      <div role="button" onClick={()=>openInNewTab(urlCatlog.linkedin)}>
        <ShowIcon iconName={iconCatlog.linkedin}/>
      </div>
    </div>
  )

  // For Big Screen
  const MaxScreenNav = () => (
    <div className="flex justify-around" style={{ color: colors.gray }}>
      <NavContent />
    </div>
  );

  // For small screen
  const MinScreenNav = () => (
    <div role="button" onClick={() => setMenuTabActive(~isMenuTabActive)}>
      {isMenuTabActive ? (
        <ShowIcon iconName={iconCatlog.close} />
      ) : (
        <ShowIcon iconName={iconCatlog.menu} />
      )}
    </div>
  );
  const MinScreenNavContent = () => (
    <div
      className="flex flex-col justify-evenly md:hidden h-screen"
      style={{ color: colors.gray,backgroundColor : colors.dark_blue }}
    >
      <NavContent />
      <SocialMediaContent />
    </div>
  );

  return (
    <Wrapper>
      {/* Max screen Socialmedia Icons*/}
      <div className="hidden md:block flex justify-center fixed left-4 top-0">
        <div className="bg-black w-[2px] h-[190px] ml-4">
        </div>
        <SocialMediaContent />
      </div>
      <div className="flex inline-block relative py-4" style={{backgroundColor : colors.dark_blue}}>
        {/* Left Side with LOGO & NAME */}
        <div className="md:w-1/5 font-mono">Nirmal Kumar</div>
        {/* Right Side with Nav Button */}
        <div className="hidden md:block md:w-4/5 ">
          <MaxScreenNav />
        </div>
        <div className="block md:hidden absolute right-0">
          <MinScreenNav />
        </div>
      </div>

      {/* In Small Screen when nav tab active */}
      {isMenuTabActive ? <MinScreenNavContent /> : null}
    </Wrapper>
  );
};

export default Navbar;
