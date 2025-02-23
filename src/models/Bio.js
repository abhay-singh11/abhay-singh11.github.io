var m = require('mithril')

var Bio = {
  pic: '../assets/profile-pic.jpg',

  biography: [
    'Abhay is a Postdoctoral Researcher in the',
    ' Applied Mathematics and Plasma Physics Group',
    ' at Los Alamos National Laboratory (LANL)',
    '.',
  ],

  research: [
    ' His research interests lie at the intersection of robotics and operations research.',
    ' In particular, his workspans a range of topics, including global optimization,',
    ' vehicle routing problems, and training large language model (LLM) agents to address,',
    ' critical and recurring challenges.',
    ' His expertise lies in the areas of mathematical programming,',
    ' deterministic and stochastic optimization, heuristics, and',
    ' approximation algorithms. He applies these techniques to solve',
    ' problems that arise in the domains of vehicular routing,',
    ' robotics, autonomous systems and supply chain. '
  ],

  cv: '../assets/Resume_AbhaySingh.pdf',

  email: 'mailto:abhay@lanl.gov',

  github: 'https://github.com/abhay1220',

  scholar: 'https://scholar.google.com/citations?user=rbA21awAAAAJ&hl=en',

  linkedin: 'https://www.linkedin.com/in/abhay-singh11/',

  theoryInterests: [
    'Mathematical Programming', 'Global Optimization', 'Dynamics and Control',
    'Approximation Algorithms', 'Reinforcement Learning'
  ],

  appliedInterests: [
    'Autonomous Systems', 'Robotics', 'Vehicle Routing Problems',
    'Transportation Systems', 'Supply Chain Systems'
  ],

  //   softwares: [
  //     'He also loves to write production-quality code, even for his research
  //     work.', ' He writes production code in C++, Kotlin, Python and Julia.',
  //     ' He extensively uses gnuplot for plotting.',
  //     ' He has written code in C, C++, Java, Julia, Kotlin, and Python for
  //     his ', 'research work. Furthermore, he also maintains and/or develops a
  //     number of Julia packages.', ' Some of them are ', m('a', {
  //       href: 'https://github.com/kaarthiksundar/Dubins.jl',
  //       class: 'link dark-gray hover-dark-blue',
  //       target: '_blank',
  //       rel: 'noopener noreferrer'
  //     },
  //       'Dubins.jl'),
  //     ' and ',
  //     m('a', {
  //       href: 'https://github.com/sujeevraja/PolyhedralRelaxations.jl',
  //       class: 'link dark-gray hover-dark-blue',
  //       target: '_blank',
  //       rel: 'noopener noreferrer'
  //     },
  //       'PolyhedralRelaxations.jl'),
  //     '.'
  //   ]
}

          module.exports = Bio