var m = require('mithril');

module.exports = {
  view : function() {
    return m('div', {class: 'pl2 ml4 relative nt6-ns nt2'}, [
        m('h3', {class: 'f3 f2-ns fw6 black-70 mt0'}, 'Projects'),
        m('div', {class: 'project mt0'}, [
            m('h2', {class: 'f4 f3-ns fw6 black-70'}, 'Assisted Path Planning in an Impeded Environment'),
            m('div', {class: 'w-60'}, [
                m('div', {class: 'video-container'}, [
                    m('video', {controls: true, width: '100%'}, [
                        m('source', {src: '../../assets/projects/ASPP/ScoutEx2cut.mp4', type: 'video/mp4'}),
                        'Your browser does not support the video tag.'
                    ])
                ])
            ]),
            m('div', {class: 'w-60 mt3'}, [ // Description container with 100% width and top margin
                m('p', {class: 'f5 f4-ns lh-copy tj'},
                    'We have developed a Multi-Agent Path Planning algorithm with asynchronous motion for applications such as emergency vehicle escort missions, autonomous warehouse operations, and any other application where an assisting agent can be used to improve the efficiency of the primary one. An example here shows an emergency vehicle (ambulance or fire truck) trying to reach the destination. While going through the traffic, the vehicle may have to slow down. But with the assistance of a drone, that can warn the traffic in advance, the vehicle can reach the destination faster.\n\n' +
                    'We have generalized the permanent labeling algorithm for multiple agents to optimally solve the NP - hard Assisted Shortest Path Planning(ASPP) problem. The algorithm was further improved by including search filters based on the A * algorithm. We have also developed a Monte Carlo Tree Search (MCTS) based anytime algorithm for the ASPP to generate good feasible solutions within any given time limit.\n\n' + 'This work is published in',                         
                    m('a', {href:
                        'https://ieeexplore.ieee.org/abstract/document/10230292',
                        target: '_blank', class: 'link blue'}, ' IEEE Transaction on Automation Science and Engineering, 2023.')
                )
            ]),
        ]),
        m('div', {class: 'project mt4 pt4'}, [
            m('h2', {class: 'f4 f3-ns fw6 black-70'}, 'Vehicle Detection and Tracking Using Thermal Cameras in Adverse Visibility Conditions'),
            m('div', {class: 'w-60'}, [
                m('div', {class: 'video-container'}, [
                    m('iframe', {
                        width: '100%', height: '550',
                        src: 'https://www.youtube.com/embed/J4EtQSkiTvE?vq=hd720', frameborder: '0',
                        allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture', allowfullscreen: true
                    }),
                ])
            ]),
            m('div', {class: 'w-60 mt3'}, [ // Description container with 100% width and top margin
                m('p', {class: 'f5 f4-ns lh-copy tj'},
                    'Perception is a particularly challenging problem in adverse weather conditions such as sudden changes in lighting, smoke, fog, snow, and rain. In this work, we demonstrate that the addition of LongWave Infrared (LWIR)/thermal cameras to the sensor stack on a self-driving vehicle can address some of the challenges in adverse visibility conditions.\n\n' +
                    'We trained a machine learning-based image detector on thermal image data and used it for vehicle detection. For vehicle tracking, Joint-Probabilistic Data Association (JPDA) and Multiple Hypothesis Tracking (MHT) approaches were explored where the thermal camera information was fused with a front-facing radar.\n\n' + 'This work is published in ',
                    m('a', {href: 'https://www.mdpi.com/1424-8220/22/12/4567', target: '_blank', class: 'link blue'}, 'Sensors, 2022.')
                )
            ])
        ])
    ]);
  }
};
