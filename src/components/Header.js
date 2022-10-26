import './Header.css';

function AppHeader(){
    return(
      <div className='Header'>
        <header className='Top-header'>
          <h4 className='Top-Text'>Engineering Library</h4>
        </header>
        <div className="navbar-icon">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

    );
}

export default AppHeader;

