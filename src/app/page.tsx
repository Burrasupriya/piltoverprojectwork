import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './globe.css';
import { Button } from '../components/ui/button'; // Adjust the import path as needed

const Home = () => {
  return (
    <div>
    <div className="navbar">
      <div className="logo">
        <Image src="/logo.jpg" alt="College Logo" width={100} height={100} />
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/about" passHref>
              <Button asChild variant="link">About</Button>
            </Link>
          </li>
          <li>
            <Link href="/contact_us" passHref>
              <Button asChild variant="link">Contact</Button>
            </Link>
          </li>
          <li>
            <Link href="/student" passHref>
              <Button asChild variant="link">Students</Button>
            </Link>
          </li>
          <li className="dropdown">
            <span style={{ fontSize: '15px', cursor: 'pointer' }}>Departments</span>
            <div className="dropdown-content">
              <ul>
                <li><a href="#">CSE</a></li>
                <li><a href="#">IT</a></li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="/login" passHref>
              <Button asChild variant="link">Login</Button>
            </Link>
          </li>
          <li>
            <Link href="/signup" passHref>
              <Button asChild variant="link">Signup</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className="content">
      <div className="sidebar">
        <h3>Locations</h3>
        <ul>
          <li>
            <Link href="/hyderabad" passHref>
              <span>Hyderabad</span>
            </Link>
          </li>
          <li>
            <Link href="/bhimavaram" passHref>
              <span>Bhimavaram</span>
            </Link>
          </li>
        </ul>
      </div>
        <div className="main-content">
          <Image src="/vishnu.jpg" alt="Vishnu Educational Society" width={600} height={400} />
          <Button variant="default" size="default" className="mt-4">Learn More</Button>
          <Button variant="outline" size="sm" className="mt-4 ml-2">Contact Us</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
