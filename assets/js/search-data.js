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
  },{id: "nav-publications",
          title: "publications",
          description: "papers and reports in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
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
          description: "small progress, half-baked takes, incomplete ideas, and occasionally essays.",
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
        },{id: "post-can-astra-zero-shot-dexterous-manipulation",
        
          title: "Can Astra Zero-Shot Dexterous Manipulation?",
        
        description: "GPT 6 Astra attempts DexVerse&#39;s long-horizon coffee making task with a UR10e and Wuji hands.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/astra-makecoffee/";
          
        },
      },{id: "post-what-the-machine-can-39-t-fill-in",
        
          title: "What the Machine Can&#39;t Fill In",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/ai-meditations/";
          
        },
      },{id: "post-all-about-robotic-actuators",
        
          title: "All About Robotic Actuators",
        
        description: "From BLDC motors and FOC up through PD control, and how to model actuators in MuJoCo.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/robotic-actuators/";
          
        },
      },{id: "post-rethinking-moravec-39-s-paradox",
        
          title: "Rethinking Moravec&#39;s Paradox",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/moravec/";
          
        },
      },{id: "post-the-five-questions-of-general-robots",
        
          title: "The Five Questions of General Robots",
        
        description: "My vision statement for general purpose robots.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/robotics-big-picture-copy/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "log-025228",
          title: '025228',
          description: "",
          section: "Log",handler: () => {
              window.location.href = "/log/2026-10-18-025228/";
            },},{id: "log-031037",
          title: '031037',
          description: "",
          section: "Log",handler: () => {
              window.location.href = "/log/2026-10-18-031037/";
            },},{id: "log-123342",
          title: '123342',
          description: "",
          section: "Log",handler: () => {
              window.location.href = "/log/2026-10-18-123342/";
            },},{id: "news-my-surf-project-on-teaching-quadrupeds-to-climb-steep-terrain-with-rl-was-featured-in-cmu-news-surf-project-scales-new-heights-in-rescue-robotics",
          title: 'My SURF project on teaching quadrupeds to climb steep terrain with RL was...',
          description: "",
          section: "News",},{id: "news-our-paper-adaptation-of-generalist-robot-policies-with-minimal-data-was-accepted-to-the-rl4vla-workshop-at-rss-2026",
          title: 'Our paper Adaptation of Generalist Robot Policies with Minimal Data was accepted to...',
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
