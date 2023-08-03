import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="title-container">
        <h1>
          Junior Web Designer (Remote)
          <br /> Interview Questions
        </h1>
        <h2>Candidate:Ylexis Butler</h2>
      </div>
      <div className="grid-row">
        <div className="grid-item scarlet  ">
          <h1>1</h1>
          <h3>Are you currently employed?</h3>
          <textarea>
            I am currently in between jobs and actively looking for a new
            opportunity.
          </textarea>
        </div>
        <div className="grid-item beige">
          <h1>2</h1>
          <h3>What appeals to you about web design? </h3>
          <textarea>
            What appeals to me most about web design is the ability to create
            something of use to someone else. That to me is so rewarding because
            not only do I get to use my abilities to create, but it’s utilized
            in a way to positively impact the experiences of other people.
          </textarea>
        </div>
        <div className="grid-item green">
          <h1>3</h1>
          <h3>What was the best web design project you’ve worked on?</h3>
          <textarea>
            The Snap Still web app is probably the best web design project I’ve
            worked on thus far because my filmmaking buddies are able to use it
            for their film projects. Snap Still is a site, providing filmmakers
            and creatives alike with a platform to create mood boards during the
            planning phases of their projects. It allows users to be able to
            manage all of their boards in one place as well. The mocks were
            created in Figma, and the tech stack used includes React,Javascript,
            and CSS to style.
          </textarea>
        </div>
        <div className="grid-item white">
          <h1>4</h1>
          <h3>Do you specialize in any web design area?</h3>
          <textarea>
            In terms of specialization, I specialize in React and Javascript,
            but I am actively learning other sectors in web development to be
            well rounded within the field.
          </textarea>
        </div>
        <div className="grid-item yellow">
          <h1>5</h1>
          <h3>Can you explain what responsive web page design means?</h3>
          <textarea>
            Responsive design is basically an approach to web design that
            ensures web apps respond to differences in screen sizes
            appropriately. An example would be considering how a website would
            look on a tablet vs. a desktop screen vs a phone. The goal is to
            have that be a seamless experience for a user.
          </textarea>
        </div>
        <div className="grid-item blue">
          <h1>6</h1>
          <h3>
            Imagine a client giving constructive criticism about your work. How
            would you respond?
          </h3>
          <textarea>
            I would respond positively. Ultimately my job is to be of service to
            the client. Along with that, constructive criticism is ultimately
            given to improve something, and I do not believe a person can truly
            grow in their profession without it. Growth and progression is
            always the goal for me. So if I am working for a client, and they
            have constructive criticism, I am all ears so that we can work
            together to accomplish the goal they have in mind.
          </textarea>
        </div>
        <div className="grid-item green">
          <h1>7</h1>
          <h3>Can you describe how to optimize websites for speed?</h3>
          <textarea>
            There are a few ways that I am aware of how to optimize websites for
            speed. One way is code splitting. Code splitting is basically
            sending less code to the browser. This includes avoiding being
            repetitive , and using async loading,as it doesn’t require images,
            etc. to load only after the page has loaded. It also includes
            removing comments/ console.logs and unnecessary spaces in code.For
            React it can involve conditionally importing heavy code with
            React.lazy(). And also using dev tools to monitor web performance
            and make the necessary changes if needed in code.
          </textarea>
        </div>
        <div className="grid-item purple">
          <h1>8</h1>
          <h3>
            How do you determine what color scheme to use in your web design?
          </h3>
          <textarea>
            In personal projects I go with colors that exude the theme/mood I’m
            aiming for. I am also sure to use colors that complement one another
            as well. Two sites I like to use to help with choosing color schemes
            are canva.com and coolors.co.
          </textarea>
        </div>
        <div className="grid-item scarlet">
          <h1>9</h1>
          <h3>What are your Favorite design tools to use?</h3>
          <textarea>
            For web design, my favorite design tools are Figma and Canva. Both
            allow me to design the full layout of the site in detail.
            Particularly, what I like about Figma is that I can share the
            project I am working on with someone, and they can see the
            unfinished version without either of us having to download anything.
            I also like that I, or a person who has access to the project can
            make comments on it as well. In Canva, I love how all of the graphic
            elements, and potential graphic elements I can use are in one space.
            They also have everything from tools aiding in color scheme, to
            having the ability to create animations to include in projects.
          </textarea>
        </div>
        <div className="grid-item white">
          <h1>10</h1>
          <h3>Do you have experience producing UX designs?</h3>
          <textarea>
            I do have experience producing UX designs, as I’ve created designs
            in Figma and Adobe XD to turn into functional web apps.
          </textarea>
        </div>
        <div className="grid-item beige">
          <h1>11</h1>
          <h3>What training courses developed your programming skills?</h3>
          <textarea>
            --The Scrimba Bootcamp/Front End Developer Career Path----- Udemy
            Complete Web development Boot Camp with Dr.Angela Yu----- Free Code
            Camp:Responsive Web Design,JavaScript Algorithms and Data
            Structures, Front End Development Library Certification, Data
            Visualization, Relational Database Certification.-----The Odin
            Project-----Youtube
          </textarea>
        </div>
        <div className="grid-item purple">
          <h1>12</h1>
          <h3>
            What experience do you have using HTTP and HTTP/2 in your design?
          </h3>
          <textarea>
            I've used Netlify and Github Pages to deploy sites,and HTTP and
            HTTP/2 is how data communicates on the web. It’s how data such as
            images, documents, videos,etc. are shared between the client and the
            server. It allows sites I have deployed to be accessed by users and
            how users are able to interact with them. I know HTTP/2 has improved
            performance as well.
          </textarea>
        </div>
        <div className="grid-item green">
          <h1>13</h1>
          <h3>
            Will you be able to devote 30 to 40 hours of your time weekly for
            the company?
          </h3>
          <textarea>Yes.</textarea>
        </div>
        <div className="grid-item yellow">
          <h1>14</h1>
          <h3>
            How long would you expect to work for us if hired and how much will
            you request per hour if you are hired?
          </h3>
          <textarea>4 years and $48/hr</textarea>
        </div>
        <div className="grid-item blue">
          <h1>15</h1>
          <h3>
            How do you stay current with the latest design trends, software
            developments, and technological tools?
          </h3>
          <textarea>
            I like to listen to the Scrimba podcast and attend their live
            workshops as well via youtube.I also checkout the Free Code Camp
            blog, and follow a good amount of developers on tik tok.
          </textarea>
        </div>
        <div className="grid-item white">
          <h1>16</h1>
          <h3>Why are you the best web designer for this position?</h3>
          <textarea>
            I believe I’m best fit for the web designer position due to my
            knowledge, skills and experiences that directly align with the
            requirements and responsibilities of the role. Beyond my technical
            abilities, I enjoy working in collaborative environments with a team
            of people. I love the idea of contributing to something as well as
            having the opportunity to learn from those around me. My background
            in graphic design and filmmaking has often exposed me to
            collaborative projects, and working with a team to achieve a shared
            goal. While most of my coursework has predominantly focused on
            front-end applications, I am currently studying backend technologies
            through Free Code Camp to broaden my skill set, so that I’m able to
            contribute and in an effective way across the spectrum of web
            development. The field of web development is ever-changing and ever
            evolving, and that’s one of the things that I really like about it.
            My love for learning and trying my hand at new technologies keeps me
            curious and wanting to learn more about the industry.This is what
            allows me to stay up to date with the latest tech trends. In
            addition to this, in my experience of film editing and graphic
            design, I have worked with diverse visual and audio formats and made
            them compatible web formats. In summary, I strongly believe that my
            qualifications, skills, and experiences align well with the
            requirements for the web designer role at Certilytics. I am
            confident in my abilities to make a valuable contribution to the
            company’s ongoing success. I am also enthusiastic about the chance
            of learning from the talented team at Certilytics and further refine
            my expertise in the field.
          </textarea>
        </div>
        <div className="grid-item scarlet">
          <h1>17</h1>
          <h3>Can you handle all these duties effectively?</h3>
          <textarea>
            Yes, I am confident that I can handle all of these duties
            effectively. Thank you for considering my candidacy and I look
            forward to the possibility of working together.
          </textarea>
        </div>
        <div className="grid-item beige"></div>
        <div className="grid-item white">
          <div className="thanks">
            <h1>Thank</h1>
          </div>
        </div>
        <div className="grid-item white">
          <div className="thanks">
            <h1>You!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
