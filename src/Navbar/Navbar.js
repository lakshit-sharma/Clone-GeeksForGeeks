import React from 'react'
import geeksLogo from "./assets/geeksLogo.png";
export default function Navbar() {
  return (
    <div className="navbar1">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">      
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </a>
          <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">DSA to Development</a></li>
            <li><a class="dropdown-item" href="#">GATE Courses</a></li>
            <li><a class="dropdown-item" href="#">Newly launched</a></li>
            <li><a class="dropdown-item" href="#">Full Stack Development</a></li>
            <li><a class="dropdown-item" href="#">Data Science Program</a></li>
            <li><a class="dropdown-item" href="#">All Courses</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tutorials
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Data Structures & Algorithm</a></li>
            <li><a class="dropdown-item" href="#">ML & Data Science</a></li>
            <li><a class="dropdown-item" href="#">Interview Corner</a></li>
            <li><a class="dropdown-item" href="#">Languages</a></li>
            <li><a class="dropdown-item" href="#">Web Development</a></li>
            <li><a class="dropdown-item" href="#">Gate</a></li>
            <li><a class="dropdown-item" href="#">CS Subjects</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Jobs
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Get Hired</a></li>
            <li><a class="dropdown-item" href="#">Accenture is hiring</a></li>
            <li><a class="dropdown-item" href="#">Student Leadership Program</a></li>
            <li><a class="dropdown-item" href="#">All Job Updates</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Practice
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Build your AI Agent</a></li>
            <li><a class="dropdown-item" href="#">Problem of the Day</a></li>
            <li><a class="dropdown-item" href="#">Practice Coding Problems</a></li>
            <li><a class="dropdown-item" href="#">GfG SDE Sheet</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contests
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Accenture Hackathon</a></li>
            <li><a class="dropdown-item" href="#">GfG Weekly</a></li>
            <li><a class="dropdown-item" href="#">All Contests and Events</a></li>
          </ul>
        </li>
      </ul>
      <div class="container">
    <a class="navbar-brand" href="#">
      <img src={geeksLogo} alt="GeeksForGeeks" width="40" height="40" />
    </a>
  </div>
      <form class="d-flex" role="search">
        {<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />}
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
