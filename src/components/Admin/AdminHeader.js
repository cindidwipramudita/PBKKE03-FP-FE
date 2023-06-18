import React from "react";

const AdminHeader = () => {
  const welcomeString = () => {
    const numericDate = new Date().getHours();
    if (numericDate >= 0 && numericDate <= 11) return "Good Morning!";
    else if (numericDate >= 12 && numericDate <= 17) return "Good Afternoon!";
    else if (numericDate >= 18 && numericDate <= 23) return "Good Evening!";
    else return "";
  };

  return (
    <nav className="navbar navbar-expand fixed-top be-top-header">
      <div className="container-fluid">
        <div className="be-navbar-header">
          <a className="navbar-brand" href="pass-dashboard.php"></a>
        </div>
        <div className="page-title">
          <span>
            {welcomeString()}
            {/* Menggantikan kode PHP dengan fungsi JavaScript */}
            {/* Menggunakan fungsi welcomeString() untuk mendapatkan ucapan selamat */}
          </span>
        </div>
        <div className="be-right-navbar">
          <ul className="nav navbar-nav float-right be-user-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                {/* <img src={`assets/img/profile/${row.pass_dpic}`} alt="Avatar" /> */}
                {/* Menggantikan kode PHP dengan penulisan JSX */}
                {/* Menggunakan backticks (`) dan ${} untuk menggabungkan string dan variabel */}
                {/* <span className="user-name">{row.pass_uname}</span> */}
              </a>
              <div className="dropdown-menu" role="menu">
                <a className="dropdown-item" href="pass-profile.php">
                  <span className="icon mdi mdi-face"></span>
                  Account
                </a>
                <a className="dropdown-item" href="pass-logout.php">
                  <span className="icon mdi mdi-power"></span>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminHeader;
