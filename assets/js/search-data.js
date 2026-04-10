// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-resume",
          title: "resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "post-rethinking-moravec-39-s-paradox",
        
          title: "Rethinking Moravec&#39;s Paradox",
        
        description: "What&#39;s stopping physical AI is the autoregressive problem.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/moravec/";
          
        },
      },{id: "post-vibes",
        
          title: "Vibes",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/deep-stuff/";
          
        },
      },{id: "post-the-five-questions-of-general-robots",
        
          title: "The Five Questions of General Robots",
        
        description: "This is my vision statement for how I think about general purpose robots.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/robotics-big-picture-copy/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-hill-climbing-quadruped",
          title: 'Hill Climbing Quadruped',
          description: "Can deep RL teach a quadrupedal robot how to climb steep cliffs?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Quadrupeds_Climbing/";
            },},{id: "projects-robotic-arm",
          title: 'Robotic Arm',
          description: "What is the math involved in inverse kinematics for a 6-DoF robotic arm? What does it take to build one from scratch?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Robotic_Arm/";
            },},{id: "projects-jepa-from-scratch",
          title: 'JEPA from Scratch',
          description: "My investigtions into models that solve the autoregressive problem.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/jepa_from_scratch/";
            },},{id: "projects-mechanistic-interpretability-for-vla-models",
          title: 'Mechanistic Interpretability for VLA models',
          description: "What can we learn about vision language action models from its weights?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mech_vla/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%65%6F%6B%73%77%61%6E%67@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/leo01110111", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/leo-wang-9672a51a5", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@LeoWang24", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
