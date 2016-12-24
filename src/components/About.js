import {h} from 'preact';  /** @jsx h */
import {Link} from 'preact-router';

export const About = () => (
  <div>
    <h1>About Me</h1>
    <div class='content'>
      <div class='callout'>
        <strong>Hello! My name is Benjamin Warfield Smith.</strong>
      </div>
      <div class='callout-sub'>
        You can call me Ben, it&#39;s fine.
      </div>
      <div class='callout'>
        I consider myself to be a pretty good <a href="https://en.wikipedia.org/wiki/Software_engineer">Software Engineer</a>.
      </div>
      <div class='callout-sub'>As a professional, sometimes I still fuck up, and that&#39;s ok.</div>
      <div class='callout'>
        I live in <a href="https://en.wikipedia.org/wiki/Lakewood,_Ohio">Lakewood, Ohio</a>, just outside Downtown <a href="https://en.wikipedia.org/wiki/Cleveland">Cleveland</a>. I am rooted here, so if you&#39;re looking to hire me, consider that.
      </div>
      <div class='callout-sub'>It&#39;s a rad town, but I don&#39;t necessarily want <strong>everyone</strong> to know that.</div>
      <div class='callout'>
        On occasion I contribute to <a href="https://en.wikipedia.org/wiki/Open-source_model">open source</a>, and some of that work can be found on <a href="https://github.com/benjaminws/">GitHub</a>,
        including the source to this <a href="https://github.com/benjaminws/benjaminwarfield">website</a>.
      </div>
      <div class='callout-sub'>
        None of this software comes with a warranty. Sorry not sorry.
      </div>
      <div class='callout'>
        You can find information about my professional works on <a href='https://www.linkedin.com/in/benjaminwarfield'>LinkedIn</a>, or on my <Link href='/work'>works page</Link>.
      </div>
      <div class='callout-sub'>
        This is not comprehensive professional resume, please <Link href="/contact">reach out</Link> if you really want get to know me professionally.
      </div>
      <div class='callout'>
        I am what could be described as a prolific twitter user, and if you&#39;re brave enough, you can follow me <a href="https://twitter.com/benjaminws">there</a>.
      </div>
      <div class='callout-sub'>
        <strong>Caution:</strong> this timeline is raw af.
      </div>
      <div class='callout'>
        I&#39;m helping to raise 3 kids, 2 dogs, and 2 cats.
      </div>
      <div class='callout-sub'>
        These wonderful creatures are absolutely my most important collaborative works.
      </div>
    </div>
  </div>
);
