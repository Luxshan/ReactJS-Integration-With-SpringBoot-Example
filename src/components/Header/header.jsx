import React, { Component } from "react";

//import "../css/util.css";
//import "../css/main.css";
//import "../vendor/jquery/jquery-3.2.1.min.js";
//import "../vendor/animsition/js/animsition.min.js";
//import "../css/dropdown.css";

//import "../css/header.css";
class Header extends Component {
   
    render() {
        return (
        <div id="main-wrapper">

        
        <header class="topbar">
            <nav class="navbar top-navbar navbar-expand-md navbar-dark">
                <div class="navbar-collapse">
                   
                    <ul class="navbar-nav mr-auto">
                        
                        <li class="nav-item"> <a class="nav-link nav-toggler d-block d-md-none waves-effect waves-dark" href="javascript:void(0)"><i class="ti-menu"></i></a> </li>
                        <li class="nav-item"> <a class="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark" href="javascript:void(0)"><img src="bug.png" width="50px" height="50px"/></a> </li>
                        
                        <li class="nav-item"> <form class="app-search d-none d-md-block d-lg-block">
                                <input type="text" class="form-control" placeholder="Search & enter" />
                            </form>
                        </li>
                    </ul>
                    
                    <ul class="navbar-nav my-lg-0">
                        
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-envelope" aria-hidden="true"></i>
                                <div class="notify"> <span class="heartbit"></span> <span class="point"></span> </div>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right mailbox animated bounceInDown">
                                <ul>
                                    <li>
                                        <div class="drop-title">Notifications</div>
                                    </li>
                                   
                                </ul>
                            </div>
                        </li>
                        
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle waves-effect waves-dark" href="" id="2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                <div class="notify"> <span class="heartbit"></span> <span class="point"></span> </div>
                            </a>
                            <div class="dropdown-menu mailbox dropdown-menu-right animated bounceInDown" aria-labelledby="2">
                                <ul>
                                    <li>
                                        <div class="drop-title">You have 4 new messages</div>
                                    </li>
                                    
                                </ul>
                            </div>
                        </li>
						
                        <li class="nav-item right-side-toggle"> <a class="nav-link  waves-effect waves-light" href="javascript:void(0)"><i class="fa fa-cog" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </nav>
        </header>        
        
                
        </div>
        );
    }

}

export default Header;