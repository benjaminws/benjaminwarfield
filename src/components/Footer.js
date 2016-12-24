import {h} from 'preact';  /** @jsx h */
import {Link} from 'preact-router';

export const Footer = () => (
  <div class="content">
    <footer class="footer">
      <div class="container">
        <p class="text-center"><Link href="/about">About</Link> - <Link href="/contact">Contact</Link> - &copy; {new Date().getFullYear()} Benjamin Warfield Smith</p>
      </div>
    </footer>
  </div>
);
