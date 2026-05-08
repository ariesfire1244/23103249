 <script type="text/babel">

    function App()
     
      return (
        <div>

        
          <header>
            <h1>Notification</h1>

            <nav>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>

          <section className="hero">
            <div>
              <h2>
                Hi, I'm <span>Your Name</span>
              </h2>

              <p>
                Frontend Developer | React Developer | Web Designer
              </p>

              <a href="#projects" className="btn">
                View Projects
              </a>
            </div>
          </section>

   
          <section id="about">
            <h2 className="section-title">About Me</h2>

            <div className="about">
              <p>
                I am a passionate web developer who loves creating modern,
                responsive, and beautiful websites using HTML, CSS, JavaScript,
                and React.
              </p>
            </div>
          </section>

        
          <section id="Notification">
            <h2 className="section-title">Notification</h2>

            <div className="Notification">

              <div className="id">
                <p>Notification ID: 12345</p>
              </div>

              <div className="type">
                <p>Type of Notification: Weather Alert</p>
              </div>

              <div className="message">
                <p>Message: Severe thunderstorm warning in your area.</p>
              </div>
                 <div className="timestamp">
                <p>Timestamp: 2026-06-01 14:30:00</p>
            </div>
            </div>
            <App />
          </section>

         
          <section id="notify_all">
            <h2 className="notify">notify all</h2>

            <div className="contact">
              <p>Email: yourmail@gmail.com</p>
              <p>message : Notify all users</p>

              <a href="mailto:yourmail@gmail.com" className="btn">
                Send Notification
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer>
            <p>23103249 Vijaya Singh| All Rights Reserved</p>
          </footer>

        </div>
      );
    

    ReactDOM.render(<App />, document.getElementById('root'));
  </script>