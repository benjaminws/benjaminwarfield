import {h} from 'preact';  /** @jsx h */

export const Navigation = () => (
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/" data-toggle="collapse" data-target=".navbar-collapse.in">
          @benjaminws
        </a>
      </div>

      <div class="collapse navbar-collapse" id="navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><a href="/about" data-toggle="collapse" data-target=".navbar-collapse.in">About</a></li>
          <li><a href="/contact" data-toggle="collapse" data-target=".navbar-collapse.in"> Contact</a></li>
          <li><a href="/work" data-toggle="collapse" data-target=".navbar-collapse.in">Work</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="https://github.com/benjaminws" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-github fa-lg" aria-hidden="true"></i> GitHub</a></li>
          <li><a href="https://linkedin.com/in/benjaminwarfield" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-linkedin fa-lg" aria-hidden="true"></i> LinkedIn</a></li>
          <li><a href="https://facebook.com/benjaminws" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i> Facebook</a></li>
        </ul>
      </div>
    </div>
  </nav>
);
