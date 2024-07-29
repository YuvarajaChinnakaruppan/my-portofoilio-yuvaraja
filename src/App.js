import './App.css';
import React from 'react';

const Portfolio = () => {
  var projectDetails = [
    {
      id: 1,
      name: "Glovers Scorebook",
      logoURL: "https://play-lh.googleusercontent.com/DjSq3AOk2aVzxNglHQs5AdCtY60jdPQW8tPtzOVWX_4Z2oZlRLgCJkv7QEPs-3o3xgtF=w240-h480-rw",
      playstorelink: "https://play.google.com/store/apps/details?id=com.glovers_scorebook",
      myrole: "Working as a Front-End Developer, and it is developed using React Native.",
      describe: "Glovers Scorebook is the ultimate app for managing and keeping track of multiple game scorebooks while offering live streaming capabilities.",
      detailDescription: "Since 1975 Glover's Scorebooks has been the most trusted name in tracking baseball and softball scores with their official scorebooks. Now, with the new Glover's Scorebooks App, coaches, players, and fans can connect to the game in a whole new way. The Glover's Scorebooks app is an powerful tool for coaches, providing them with comprehensive team management and scoring capabilities. With this app, coaches can efficiently handle tasks like managing team members, game schedules, and easily message players or fans. The Glover's Scorebooks app also allows coaches to keep track of game statistics, including pitch count, pitch type, pitch speed, batting roster, and many more essential statistics. With the Glover's Scorebooks app, players can stay up-to-date on their team's game schedule, locations, and receive real-time notifications from their coaches. Fans can follow their favorite teams to view their game schedules and even live stream games directly from their mobile device!"
    }, {
      id: 2,
      name: "Beach Runners",
      logoURL: "https://play-lh.googleusercontent.com/ZV2QlTiCCS_U4PFv62F5uF1KxRknr8WZKPY_A_QNswSLek0XIBX1YGjzjczK_QZGyPY=w240-h480-rw",
      playstorelink: "https://play.google.com/store/apps/details?id=com.app.beachrunners",
      myrole: "Working as a Front-End Developer, and it is developed using React Native.",
      describe: "Beach Runners is a service-based app, providing delivery of personal beach equipment to and from specific beach access points",
      detailDescription: "Quick Runs – Beach Runners are stationed (seasonally) at designated public beach access points, so you can walk right up and let the Runner take your gear from there. Order initiation and all payments are handled through the app – no cards, wallets, or cash. All you need is your phone.\n\nAdvanced Orders – App users can also schedule a Runner in advance through the app. The Runner will pick up the beach gear directly from the user’s house/hotel/condo and deliver to one of the beach access points we serve (distance limitations apply). Pre-booked return services are offered the same way."
    },
    {
      id: 3,
      name: "Budgab",
      logoURL: "https://play-lh.googleusercontent.com/mQqtyw7TCIbedojvDjsOuvdb9eg1ynwRVgUSf8o6qZBF-aBurVq3H12HXHKhSVPYg3BY=w240-h480-rw",
      playstorelink: "https://play.google.com/store/apps/details?id=com.budgab",
      myrole: "Worked on upgrading the React Native library",
      describe: "BudGab is about coming together, connecting with others who have common interests, sharing your day-to-day experiences with posts, photos, videos and stories, highlighting moments with a few close friends or the entire BudGab community.",
      detailDescription: "Learn and share about Cannabis wellness, stay up to date with lifestyle news, and hear about the latest in the industry. \n\n BudGab is the outlet for brands and vendors to promote themselves, the source for consumers to learn about them and locate nearby locations for medical or recreational use anywhere cannabis is regulated."
    },
  ];
  return (
    <div className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500 min-h-screen text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-700">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">YC</h1>
          <nav>
            <ul className="flex space-x-6">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-purple-300 transition duration-300 ease-in-out">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-10 flex flex-col md:flex33-row items-center">
        <div className="md:w-1/2 flex mb-10 justify-center">
          <div className="relative w-64 h-64">
            <div className="absolute inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pop-medium"></div>
            <img src="https://i.pinimg.com/736x/f7/1f/12/f71f1251ce6846e7433cfdf3ed5433cc.jpg" alt="Mahendran D" className="absolute inset-2 w-60 h-60 object-cover rounded-full z-10" />
          </div>
        </div>
        <div className="md:w-1/2 mb-10 justify-center items-center text-center md:mb-0">
          <h2 className="text-5xl font-bold mb-4">Yuvaraja C</h2>
          <p className="text-2xl mb-6">Software Engineer | Front-end Developer</p>
          <p className="mb-8 text-gray-300">Crafting exceptional user experiences at ConcertCare Private Limited</p>
          <div className="mb-8 text-gray-300">
            <p><strong>Outlook:</strong> yuvaraja.chinnakaruppan@concertidc.com</p>
            <p><strong>Phone:</strong> (+91) 9095158820</p>
          </div>
          <a href="#contact" className="bg-violet-700 hover:bg-violet-800 text-white py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Connect with Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white/5 py-20">
        <div className="mx-52 px-6">
          <h3 className="text-3xl font-bold mb-8 text-center">About Me</h3>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg">
            <p className="text-lg leading-loose py-5 px-5">
              As a Software Engineer at ConcertCare Private Limited, I specialize in front-end development using cutting-edge technologies like ReactJS, React Native, and Flutter. My passion lies in creating intuitive and performant user interfaces, bridging the gap between complex functionality and seamless user experiences. I'm committed to responsive web design, cross-platform mobile development, and implementing efficient state management solutions to drive innovation within our organization.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8 text-center">Professional Experience</h3>
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg transform transition duration-500 hover:scale-105">
              <h4 className="text-2xl font-bold mb-2">Front-end Developer</h4>
              <p className="text-xl mb-4 text-purple-300">ConcertCare Private Limited</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Develop responsive web applications using ReactJS and modern CSS frameworks</li>
                <li>Build cross-platform mobile apps with React Native and Flutter</li>
                <li>Implement state management solutions using Redux and MobX</li>
                <li>Collaborate with UX designers to create intuitive user interfaces</li>
                <li>Optimize application performance and reduce load times</li>
                <li>Contribute to team projects and mentor junior developers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white/5 py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8 text-center">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['ReactJS', 'React Native', 'Flutter', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Git', 'Agile', 'UI/UX Design', 'RESTful APIs'].map((skill, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-center shadow-lg transform transition duration-500 hover:scale-110 hover:rotate-3">
                <p className="text-lg font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 ">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-extrabold mb-12 text-center text-white">Featured Projects at ConcertCare</h3>
          <div className="grid md:grid-cols-2 gap-12">
            {projectDetails.map((project) => (
              <div
                key={project.name}
                className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <img src={project.logoURL} alt={project.name} className="w-16 h-16 rounded-full mr-6" />
                    <h4 className="text-2xl font-bold text-white">{project.name}</h4>
                  </div>
                  <p className="text-gray-300 mb-6 flex-grow">{project.describe}</p>
                  <div className="mb-6">
                    <span className="font-semibold text-white">My Role:</span>
                    <span className="text-gray-300 ml-2">{project.myrole}</span>
                  </div>
                  <div className='flex'>
                    <a 
                      href={project.playstorelink}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-block underline bg-gray-500 hover:bg-gray-600 text-violet-600 font-bold py-3 px-5 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    >
                      View on Play Store
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center text-white">Featured Projects at ConcertCare</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projectDetails.map((project) => (
              <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <img src={project.logoURL} alt={project.name} className="w-16 h-16 rounded-full mr-4" />
                    <h4 className="text-2xl font-bold">{project.name}</h4>
                  </div>
                  <p className="text-gray-300 mb-4 flex-grow">{project.describe}</p>
                  <div className="mb-4">
                    <span className="font-semibold">My Role:</span>
                    <span className="text-gray-300 ml-2">{project.myrole}</span>
                  </div>
              <a 
                href={project.playstorelink}
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                View on Play Store
              </a>
            </div>
          </div>
        ))}
          </div>
        </div>
      </section> */}
      {/* <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8 te xt-center">Featured Projects at ConcertCare</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projectDetails.map((project) => (
              <div key={project.id} className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">

                <img src={`${project.logoURL}`} alt={`Project ${project.name}`} className="w-full h-48 object-none" />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{project.name}</h4>
                  <p className="text-gray-300 mb-4">{project.describe}</p>
                  <div><span>My Role :</span> <span>{project.myrole}</span></div>
                  <a href="#https://play.google.com/store/apps/details?id=com.budgab" className="text-purple-400 hover:text-purple-300 transition duration-300 ease-in-out">Project Details →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="bg-white/5 py-20">
        <div className="mx-0 px-6">
          <h3 className="text-3xl font-bold mb-8 text-center">Get in Touch</h3>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <p className="text-xl mb-6 text-center">I'm dedicated to driving innovation at ConcertCare Private Limited. I'm always looking for ways to contribute more to our team and projects. Let's connect to discuss how we can enhance our collaborative efforts.</p>
            <div className="flex flex-wrap justify-center space-x-4">
              <a href="mailto:yuvaraja.chi@concerti.com" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                Outlook Mail
              </a>
              <a href="https://teams.microsoft.com/l/chat/0/0?users=yuvaraja.chi@concerti.com" target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                Microsoft Teams
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 text-center py-6">
        <p>&copy; 2024 Mahendran D. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
// import logo from './logo.svg';
// import './App.css';
// import React from 'react';

// const Portfolio = () => {
//   return (
//     <div className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500 min-h-screen text-white font-sans">
//       {/* Header */}
//       <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-700">
//         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//           <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">RJ</h1>
//           <nav>
//             <ul className="flex space-x-6">
//               {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
//                 <li key={item}>
//                   <a href={`#${item.toLowerCase()}`} className="hover:text-purple-300 transition duration-300 ease-in-out">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="container mx-auto px-6 py-10 flex flex-col md:flex33-row items-center">
//         <div className="md:w-1/2 flex mb-10 justify-center">
//           <div className="relative w-64 h-64">
//             <div className="absolute inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pop-medium"></div>
//             {/* <img src="https://i.pinimg.com/236x/35/0a/2f/350a2fb78dcb35e55ab4d84c5b5da59e.jpg" alt="Rahul J" className="absolute inset-2 w-60 h-60 object-cover rounded-full z-10" /> */}
//             <img src="https://i.pinimg.com/736x/f7/1f/12/f71f1251ce6846e7433cfdf3ed5433cc.jpg" alt="Rahul J" className="absolute inset-2 w-60 h-60 object-cover rounded-full z-10" />
//           </div>
//         </div>
//         <div className="md:w-1/2 mb-10 justify-center items-center text-center md:mb-0">
//           <h2 className="text-5xl font-bold mb-4">Mahendran D</h2>
//           <p className="text-2xl mb-6">Software Engineer | Front-end Developer</p>
//           <p className="mb-8 text-gray-300">Crafting exceptional user experiences with React Native, React, NodeJs and Flutter</p>
//           <a href="#contact" className="bg-violet-700 hover:bg-violet-800 text-white  py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
//             Get in Touch
//           </a>
//         </div>

//       </section>

//       {/* About Section */}
//       <section id="about" className="bg-white/5 py-20">
//         <div className="container mx-auto px-6">
//           <h3 className="text-3xl font-bold mb-8 text-center">About Me</h3>
//           <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg">
//             <p className="text-lg leading-relaxed py-5">
//               As a Software Engineer at ConcertCare Private Limited, I specialize in front-end development using cutting-edge technologies like ReactJS, React Native, and Flutter. With a passion for creating intuitive and performant user interfaces, I strive to bridge the gap between complex functionality and seamless user experiences. My expertise extends to responsive web design, cross-platform mobile development, and implementing efficient state management solutions.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section id="experience" className="py-20">
//         <div className="container mx-auto px-6">
//           <h3 className="text-3xl font-bold mb-8 text-center">Professional Experience</h3>
//           <div className="space-y-8">
//             <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg transform transition duration-500 hover:scale-105">
//               <h4 className="text-2xl font-bold mb-2">Front-end Developer</h4>
//               <p className="text-xl mb-4 text-purple-300">ConcertCare Private Limited</p>
//               <ul className="list-disc list-inside space-y-2 text-gray-300">
//                 <li>Developed responsive web applications using ReactJS and modern CSS frameworks</li>
//                 <li>Built cross-platform mobile apps with React Native and Flutter</li>
//                 <li>Implemented state management solutions using Redux and MobX</li>
//                 <li>Collaborated with UX designers to create intuitive user interfaces</li>
//                 <li>Optimized application performance and reduced load times</li>
//               </ul>
//             </div>
//             {/* Add more experience cards as needed */}
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="bg-white/5 py-20">
//         <div className="container mx-auto px-6">
//           <h3 className="text-3xl font-bold mb-8 text-center">Skills</h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {['ReactJS', 'React Native', 'Flutter', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'MobX', 'Git', 'Agile', 'UI/UX Design', 'RESTful APIs'].map((skill, index) => (
//               <div key={index} className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-center shadow-lg transform transition duration-500 hover:scale-110 hover:rotate-3">
//                 <p className="text-lg font-semibold">{skill}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20">
//         <div className="container mx-auto px-6">
//           <h3 className="text-3xl font-bold mb-8 text-center">Featured Projects</h3>
//           <div className="grid md:grid-cols-2 gap-8">
//             {[1, 2].map((project) => (
//               <div key={project} className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
//                 <img src={`https://via.placeholder.com/600x300?text=Project+${project}`} alt={`Project ${project}`} className="w-full h-48 object-cover" />
//                 <div className="p-6">
//                   <h4 className="text-xl font-bold mb-2">Project Title {project}</h4>
//                   <p className="text-gray-300 mb-4">Brief description of the project and technologies used.</p>
//                   <a href="#" className="text-purple-400 hover:text-purple-300 transition duration-300 ease-in-out">Learn More →</a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="bg-white/5 py-20">
//         <div className="container mx-auto px-6">
//           <h3 className="text-3xl font-bold mb-8 text-center">Get in Touch</h3>
//           <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
//             <p className="text-xl mb-6 text-center">I'm dedicated to driving innovation at Ellora Systems. I'm always looking for ways to contribute more to our team and projects. Let's connect to discuss how we can enhance our collaborative efforts.</p>
//             <div className="flex justify-center space-x-4">
//               <a href="mailto:yuvaraja.chinnakaruppan@concertidc.com" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
//                 Email Me
//               </a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
//                 LinkedIn
//               </a>
//               <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
//                 GitHub
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-black/30 text-center py-6">
//         <p>&copy; 2024 Rahul J. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Portfolio;