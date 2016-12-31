import {h} from 'preact';  /** @jsx h */
import {Link} from 'preact-router';

export const Footer = () => (
  <footer class="footer">
    <div class="container">
      <p class="text-center"><a href="https://twitter.com/benjaminws"><i class="fa fa-twitter fa-lg" aria-hidden="true"></i></a> - <a href="https://facebook.com/benjaminws"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i></a> - <Link href="/about">About</Link> - <Link href="/contact">Contact</Link> - &copy; {new Date().getFullYear()} Benjamin Warfield Smith</p>
    </div>
  </footer>
);
