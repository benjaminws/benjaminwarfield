import {h} from 'preact';  /** @jsx h */

export const Work = () => (
  <div>
    <h1>About My Work</h1>
    <div class='content'>
      <div class='callout'>
      Introduction
      </div>
      <div class='callout-sub'>
       <p>I am an experienced Software Engineer and Technical Lead, with a focus on Systems Architecture and Software Delivery of web applications.</p>
      </div>
      <div class='callout'>
       Toolbox
      </div>
      <div class='callout-sub'>
       <p>I&#39;m very much a "right tool for the job" kind of person, but here are a few things I like to work with.</p>
      </div>
      <div class='callout'>
       Languages I reach to
      </div>
      <div class='callout-sub'>
      <p>I&#39;ll almost always go to <a href="https://www.python.org/">Python</a> (2 & 3) or <a href="https://golang.org/">Golang</a> for serious backend work, and <a href="https://www.javascript.com/">JavaScript</a> (<a href='https://nodejs.org/'>node.js</a>, <a href='https://en.wikipedia.org/wiki/ECMAScript'>ES5 & ES6</a>) for most front-end applications. I&#39;ll write languages targeting the <a href='http://java.net'>JVM</a> where appropriate as well, having written and maintained applications using <a href='http://java.net'>Java</a>, <a href='http://www.groovy-lang.org/'>Groovy</a>, <a href='http://jruby.org/'>JRuby</a>, and <a href='http://clojure.org/'>Clojure</a> for instance. I&#39;m also deeply familiar with <a href='https://www.ruby-lang.org/'>Ruby</a>.</p>
      </div>
      <div class='callout'>
      Tools I reach to
      </div>
      <div class='callout-sub'>
       <p>I prefer to use <a href='http://boto.cloudhackers.com/en/latest/'>Boto</a> (2 & 3), <a href='https://aws.amazon.com/sdk-for-go/'>AWS SDK for Go</a>, <a href='https://aws.amazon.com/sdk-for-java/'>AWS SDK for Java</a> when doing cloudy things. I like <a href='http://flask.pocoo.org/docs/0.10/'>Flask</a> (python), <a href='https://golang.org/pkg/net/http/'>"net/http"</a> (go) and <a href='https://ratpack.io/'>ratpack</a> (java) for building APIs. You can do so much with data using <a href='https://www.postgresql.org/'>PostgreSQL</a> and <a href='https://aws.amazon.com/redshift/'>Redshift</a>. <a href='https://www.ansible.com/'>Ansible</a> is my goto for configuration management, but I’m also very familiar with <a href='https://www.chef.io/chef/'>chef</a> & <a href='https://puppet.com/'>puppet</a>. I love <a href='https://www.hashicorp.com/'>Hashicorp</a> Tooling for a number of infrastructure needs. <a href='https://facebook.github.io/react/'>React</a> or <a href='https://github.com/developit/preact'>Preact</a> are my favorite for rich for front-end applications. I usually use <a href='http://www.vim.org/'>VIM</a>, <a href='https://atom.io/'>Atom</a>, or <a href='https://www.jetbrains.com/idea/'>IntelliJ IDEA</a> CE for text and code editing.</p>
      </div>
      <div class='callout'>
      Sr. Software Engineer @ <a href="https://www.timshel.com/">Timshel</a>
      </div>
      <div class='callout-sub'>
      <p>
      I was part of the initial team hired to greenfield a new platform to support the needs of a presidential campaign. I helped build and lead our DevOps team. I was a key engineer in the launch of the campaign website for Hillary Clinton. Our team built and managed a highly scalable infrastructure on Amazon Web Services using modern tools and principles.
      <br/><br/>
      Being one of the first onboard, I was tasked with designing and building initial iterations of the infrastructure, including our deployment pipeline, configuration management, as well as tooling to support immutable deployments of microservices & front-end web applications. Most of our tooling is built in Python, Golang, Java/Groovy, and React.
      <br/><br/>
      As a group we are driven to empower developers to be responsible for all aspects of their application, from code on their machine, to deployments, metrics, and dashboards. The tooling we provide allows developers to bootstrap an application and deploy it within minutes, with minimal effort or configuration. Applications are scalable, monitorable, and deployed redundantly by default.
      <br/><br/>
      Throughout the campaign I was key in supporting the engineering team for Hillary Clinton, who used our tooling extensively. As we grew I assisted in mentoring other engineers on good practices and helped guide them on technology decisions.
      </p>
      </div>
      <div class='callout'>
       Systems Administrator @ <a href="https://www.python.org/psf/">The PSF</a>
      </div>
      <div class='callout-sub'>
       <p>I worked closely with other PSF team members to stabilize the PSF infrastructure, largely focused on the infrastructure around the PyPI software repository services.</p>
      </div>
      <div class='callout'>
        Sr. Systems Engineer @ <a href="https://www.dreamhost.com/">DreamHost</a>
      </div>
      <div class='callout-sub'>
       <p>As lead infrastructure engineer for the dreamhost.com website I implemented a new deployment strategy utilizing system packages, and source control tagging. I worked to implement a CDN to scale static assets. Subsequently I built tooling to manage the assets, as well as interactions with the CDN APIs.
       <br/><br/>
       I was also responsible for DreamHosts large scale logging infrastructure, implementing ELK (ElasticSearch Logstash Kibana) before ELK was a thing. This included designing and implementing a new deployment strategy for the cluster.
       <br/><br/>
       While here I implemented testing and continuous integration of configuration management code, written in Chef, using Test Kitchen and ServerSpec.
       </p>
      </div>
      <div class='callout'>
       Software & DevOps Consultant @ <a href="http://the-refinery.io/">Designing Interactive</a>
      </div>
       <div class='callout-sub'>
       <p>
       As one of the first hires at this successful design firm, I wrote a lot of web applications, helped to establish standards, and had a lot of face-time with our clients. Our backend applications were largely developed in Ruby on Rails or Sinatra, while our front-end mostly utilized Backbone and Ember. I was a key engineer in making design decisions to best meet client needs.
       <br/><br/>
       As an early adopter of DevOps principles, I pushed them pretty hard internally and where applicable to client needs. The merits of this approach were recognized and adopted by several of our large clients, and worked well with Designing Interactives design first principles.
       </p>
      </div>
      <div class='callout'>
       DevOps Lead @ <a href="https://web.shootq.com/">Pictage</a>
      </div>
      <div class='callout-sub'>
       <p>
       As DevOps lead I was responsible for infrastructure and operations for a newly acquired product, <a href="https://web.shootq.com/">ShootQ</a>.
       <br/><br/>
       I led a team to coordinate and execute moving the entire infrastructure for the product from a virtualization host, to a company owned data center. I led this same team to execute infrastructure, application, and data work to move all applications from MySQL to PostgreSQL.
       <br/><br/>
       I designed and implemented configuration management of infrastructure using Chef, and also built an improved deployment pipeline for application code.
       <br/><br/>
       I worked to integrate with existing Web Operations team tooling and processes, while introducing new tooling and processes to them.
       </p>
      </div>
      <div class='callout'>
       Systems Administrator @ <a href="http://www.americangreetings.com/">American Greetings</a>
      </div>
      <div class='callout-sub'>
       <p>
       As System Administrator I was responsible for a number of services, including management of NetApp filers and Falconstor appliances. I was responsible for build, configuration, and maintenance of Linux web servers, application servers, and payment processing nodes. I also worked closely with our cluster of F5 BigIP load balancers, and Content Delivery Networks on Akamai and Level 3.
       <br/><br/>
       In working tightly with our development teams, I was able to help improve our development environment stability and lower deployment times, assisting with implementing and developing new technology solutions in a more timely manner.
       <br/><br/>
       I was key in development of new configuration management scripts in Perl/Python/Shell, further scaling and automating the management of our large installation. I also assisted in on-call, networking issues, and hardware installation at remote data centers.
       </p>
      </div>
    </div>
  </div>
);
