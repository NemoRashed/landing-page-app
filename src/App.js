import "./App.css";

function App() {
  return (
    <>
      <header>
        <a href="#" class="logo">
          <span>best</span>App
        </a>

        <input type="checkbox" id="menu-bar" />
        <label for="menu-bar" class="fas fa-bars"></label>

        <nav class="navbar">
          <a href="#home">home</a>
          <a href="#features">features</a>
          <a href="#about">about</a>
          <a href="#review">review</a>
          <a href="#pricing">pricing</a>
          <a href="#contact">contact</a>
        </nav>
      </header>

      <section class="home" id="home">
        <div class="content">
          <h3>
            best mobile app <span>showcase</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus suscipit porro nam libero natus error consequatur sed
            repudiandae eos quo?
          </p>
          <a href="#" class="btn">
            download now
          </a>
        </div>

        <div class="image">
          <img src="home-img.png" alt="" />
        </div>
      </section>

      <section class="features" id="features">
        <h1 class="heading">app features</h1>

        <div class="box-container">
          <div class="box">
            <img src="f-icon1.png" alt="" />
            <h3>amazing UI design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              minus recusandae autem, repellendus fugit quaerat provident
              voluptatum non officiis ratione.
            </p>
            <a href="#" class="btn">
              read more
            </a>
          </div>

          <div class="box">
            <img src="f-icon2.png" alt="" />
            <h3>soft and smooth animations</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              minus recusandae autem, repellendus fugit quaerat provident
              voluptatum non officiis ratione.
            </p>
            <a href="#" class="btn">
              read more
            </a>
          </div>

          <div class="box">
            <img src="f-icon3.png" alt="" />
            <h3>freindly interactions</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              minus recusandae autem, repellendus fugit quaerat provident
              voluptatum non officiis ratione.
            </p>
            <a href="#" class="btn">
              read more
            </a>
          </div>
        </div>
      </section>

      <section class="about" id="about">
        <h1 class="heading">about the app</h1>

        <div class="column">
          <div class="image">
            <img src="about-img.png" alt="" />
          </div>

          <div class="content">
            <h3>Easy And Perfect Solution For Your Business App</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              placeat deserunt saepe repudiandae veniam soluta minima dolor hic
              aperiam iure.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium, quaerat. Dolorem ratione saepe magni quo inventore
              porro ab voluptates eos, nam eius provident accusantium, quia
              similique est, repellendus et reiciendis.
            </p>
            <div class="buttons">
              <a href="#" class="btn">
                {" "}
                <i class="fab fa-apple"></i> app store{" "}
              </a>
              <a href="#" class="btn">
                <i class="fab fa-google-play"></i> google-play
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="newsletter">
        <h3>Subscribe For New Features</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed
          aliquam quibusdam neque magni magnam est laborum doloribus, facere
          dolores.
        </p>
        <form action="">
          <input type="email" placeholder="enter your email" />
          <input type="submit" value="Subscribe" />
        </form>
      </div>

      <section class="review" id="review">
        <h1 class="heading">people's review</h1>

        <div class="box-container">
          <div class="box">
            <i class="fas fa-quote-right"></i>
            <div class="user">
              <img src="pic1.png" alt="" />
              <h3>nemo rashed</h3>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="comment">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus et, perspiciatis nisi tempore aspernatur accusantium
                sed distinctio facilis aperiam laborum autem earum repellat,
                commodi eum. Ullam cupiditate expedita officiis obcaecati?
              </div>
            </div>
          </div>

          <div class="box">
            <i class="fas fa-quote-right"></i>
            <div class="user">
              <img src="pic2.png" alt="" />
              <h3>nemo rashed</h3>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <div class="comment">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus et, perspiciatis nisi tempore aspernatur accusantium
                sed distinctio facilis aperiam laborum autem earum repellat,
                commodi eum. Ullam cupiditate expedita officiis obcaecati?
              </div>
            </div>
          </div>

          <div class="box">
            <i class="fas fa-quote-right"></i>
            <div class="user">
              <img src="pic3.png" alt="" />
              <h3>nemo rashed</h3>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <div class="comment">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus et, perspiciatis nisi tempore aspernatur accusantium
                sed distinctio facilis aperiam laborum autem earum repellat,
                commodi eum. Ullam cupiditate expedita officiis obcaecati?
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pricing" id="pricing">
        <h1 class="heading">Our Pricing Plans</h1>

        <div class="box-container">
          <div class="box">
            <h3 class="title">basic</h3>
            <div class="price">
              $10<span>/monthly</span>
            </div>
            <ul>
              <li>
                <i class="fas fa-check"></i> 1000+ downloads
              </li>
              <li>
                <i class="fas fa-check"></i> No transaction fees
              </li>
              <li>
                <i class="fas fa-times"></i> unlimited storage
              </li>
              <li>
                <i class="fas fa-times"></i> 5 downloads
              </li>
            </ul>
            <a href="#" class="btn">
              check out
            </a>
          </div>

          <div class="box">
            <h3 class="title">standard</h3>
            <div class="price">
              $15<span>/monthly</span>
            </div>
            <ul>
              <li>
                <i class="fas fa-check"></i> 1000+ downloads
              </li>
              <li>
                <i class="fas fa-check"></i> No transaction fees
              </li>
              <li>
                <i class="fas fa-check"></i> unlimited storage
              </li>
              <li>
                <i class="fas fa-times"></i> 5 downloads
              </li>
            </ul>
            <a href="#" class="btn">
              check out
            </a>
          </div>

          <div class="box">
            <h3 class="title">premium</h3>
            <div class="price">
              $25<span>/monthly</span>
            </div>
            <ul>
              <li>
                <i class="fas fa-check"></i> 1000+ downloads
              </li>
              <li>
                <i class="fas fa-check"></i> No transaction fees
              </li>
              <li>
                <i class="fas fa-check"></i> unlimited storage
              </li>
              <li>
                <i class="fas fa-check"></i> 5 downloads
              </li>
            </ul>
            <a href="#" class="btn">
              check out
            </a>
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <div class="image">
          <img src="contact-img.png" alt="" />
        </div>

        <form action="">
          <h1 class="heading">contact us</h1>

          <div class="inputBox">
            <input type="text" required />
            <label>name</label>
          </div>

          <div class="inputBox">
            <input type="email" required />
            <label>email</label>
          </div>

          <div class="inputBox">
            <input type="number" required />
            <label>phone</label>
          </div>

          <div class="inputBox">
            <textarea required name="" id="" cols="30" rows="10"></textarea>
            <label>message</label>
          </div>

          <input type="submit" class="btn" value="send message" />
        </form>
      </section>

      <div class="footer">
        <div class="box-container">
          <div class="box">
            <h3>about us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              pariatur rerum consectetur architecto ad tempora blanditiis quo
              aliquid inventore a.
            </p>
          </div>

          <div class="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">features</a>
            <a href="#">about</a>
            <a href="#">review</a>
            <a href="#">pricing</a>
            <a href="#">contact</a>
          </div>

          <div class="box">
            <h3>follow us</h3>
            <a href="#">facebook</a>
            <a href="#">instagram</a>
            <a href="#">pinterest</a>
            <a href="#">twitter</a>
          </div>

          <div class="box">
            <h3>contact info</h3>
            <div class="info">
              <i class="fas fa-phone"></i>
              <p>
                +065 *** *** <br />
                +063 *** ***
              </p>
            </div>
            <div class="info">
              <i class="fas fa-envelope"></i>
              <p>
                example@gmail.com <br />
                example@gmail.com
              </p>
            </div>
            <div class="info">
              <i class="fas fa-map-marker-alt"></i>
              <p>hargeisa, somaliland -063*******8</p>
            </div>
          </div>
        </div>

        <h1 class="credit">&copy; copyright @ 2022 by nemo rashed</h1>
      </div>
    </>
  );
}

export default App;
