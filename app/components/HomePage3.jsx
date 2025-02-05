import React from "react";

export default function HomePage3() {
  return (
    <div className="home-page-3">
      <div className="left-overlay"></div>
      <div className="testimonial-main-div flex justify-center flex-column width-100 align-center">
        <div className="testimonial-heading">Our Services</div>
        <div className="scroll">
          <ul className="services-section flex justify-center align-center">
            <li className="services-div">Manufacturing</li>
            <li className="services-div">Maintainance</li>
            <li className="services-div">Reconditioning</li>
            <li className="services-div">Gear customization</li>
            <li className="services-div">Bulk Production</li>
            <li className="services-div">Gear Broaching</li>
          </ul>

          <ul
            className="services-section flex justify-center align-center"
            aria-hidden="true"
          >
            <li className="services-div">Manufacturing</li>
            <li className="services-div">Maintainance</li>
            <li className="services-div">Reconditioning</li>
            <li className="services-div">Gear customization</li>
            <li className="services-div">Bulk Production</li>
            <li className="services-div">Gear Broaching</li>
          </ul>
        </div>
        <div className="testimonial-section">
          <div className="outerdiv">
            <div className="innerdiv">
              <div className="div1 eachdiv">
                <div className="userdetails">
                  <div className="imgbox">
                    <img
                      src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg"
                      alt=""
                    />
                  </div>
                  <div className="detbox">
                    <p className="name">Daniel Clifford</p>
                    <p className="designation">★★★★★</p>
                  </div>
                </div>
                <div className="review">
                  <h4>
                    Steelman gear cutters are a solid choice for general gear
                    cutting.
                  </h4>
                  <p>
                    “ We’ve used them for a variety of projects, from smaller
                    gears to larger, high-torque applications, and they have
                    performed well. The cutters offer precision and a good
                    finish, though I’ve found that for certain materials (like
                    hardened steel), they require more frequent re-sharpening.
                    Still, they’ve held up well in our shop and provide great
                    value overall. ”
                  </p>
                </div>
              </div>
              <div className="div2 eachdiv">
                <div className="userdetails">
                  <div className="imgbox">
                    <img
                      src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg"
                      alt=""
                    />
                  </div>
                  <div className="detbox">
                    <p className="name">Jonathan Walters</p>
                    <p className="designation">★★★★★</p>
                  </div>
                </div>
                <div className="review">
                  <h4>The team was very supportive and kept me motivated</h4>
                  <p>
                    “ I started as a total newbie with virtually no coding
                    skills. I now work as a mobile engineer for a big company.
                    This was one of the best investments I’ve made in myself. ”
                  </p>
                </div>
              </div>
              <div className="div3 eachdiv">
                <div className="userdetails">
                  <div className="imgbox">
                    <img
                      src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg"
                      alt=""
                    />
                  </div>
                  <div className="detbox">
                    <p className="name dark">Kira Whittle</p>
                    <p className="designation">★★★★★</p>
                  </div>
                </div>
                <div className="review dark">
                  <h4>Such a life-changing experience. Highly recommended!</h4>
                  <p>
                    “ Before joining the bootcamp, I’ve never written a line of
                    code. I needed some structure from professionals who can
                    help me learn programming step by step. I was encouraged to
                    enroll by a former student of theirs who can only say
                    wonderful things about the program. The entire curriculum
                    and staff did not disappoint. They were very hands-on and I
                    never had to wait long for assistance. The agile team
                    project, in particular, was outstanding. It took my learning
                    to the next level in a way that no tutorial could ever have.
                    In fact, I’ve often referred to it during interviews as an
                    example of experience. It certainly helped me land a job as
                    a full-stack 100% recommend! ”
                  </p>
                </div>
              </div>
              <div className="div4 eachdiv">
                <div className="userdetails">
                  <div className="imgbox">
                    <img
                      src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg"
                      alt=""
                    />
                  </div>
                  <div className="detbox">
                    <p className="name dark">Jeanette Harmon</p>
                    <p className="designation">★★★★★</p>
                  </div>
                </div>
                <div className="review dark">
                  <h4>An overall wonderful and rewarding experience</h4>
                  <p>
                    “ Thank you for the wonderful experience! I now have a job I
                    really enjoy, and make a good living while doing something I
                    love. ”
                  </p>
                </div>
              </div>
              <div className="div5 eachdiv">
                <div className="userdetails">
                  <div className="imgbox">
                    <img
                      src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg"
                      alt=""
                    />
                  </div>
                  <div className="detbox">
                    <p className="name">Patrick Abrams</p>
                    <p className="designation">★★★★★</p>
                  </div>
                </div>
                <div className="review">
                  <h4>
                    Awesome teaching support from TAs who did the bootcamp
                    themselves. Getting guidance from them and learning from
                    their experiences was easy.
                  </h4>
                  <p>
                    “ Steelman gear cutters are a solid choice for general gear
                    cutting. We’ve used them for a variety of projects, from
                    smaller gears to larger, high-torque applications, and they
                    have performed well. The cutters offer precision and a good
                    finish, though I’ve found that for certain materials , they
                    require more frequent re-sharpening. Still, they’ve held up
                    well in our shop and provide great value overall. ”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
