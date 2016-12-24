import {h} from 'preact';  /** @jsx h */
import {Link} from 'preact-router';

export const Footer = () => (
  <footer class="footer">
    <div class="container">
      <p class="text-center"><Link href="/about">About</Link> - <Link href="/contact">Contact</Link> - &copy; {new Date().getFullYear()} Benjamin Warfield Smith</p>
    </div>
  </footer>
);
