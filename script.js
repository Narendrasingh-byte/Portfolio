const PROJECTS = [
  {
    number: '01',
    title: 'BHoo-Chain — AI-Powered Land Registry System',
    desc: 'A Web3-inspired land registry platform integrating AI for fraud detection, smart property valuation, and dynamic mapping to ensure secure and transparent real estate transactions.',
    category: 'web',
    featured: true,
    accent: '#48e6d0',
    github: 'https://github.com/Narendrasingh-byte/Bhoo-Chain',
    features: [
      'Unique Property ID (UPID)',
      'AI Fraud Detection (Gemini)',
      'Smart AI Property Valuation',
      'Interactive Live Map (Leaflet)',
      'Mock Legal & Bank Dispute Checker',
      'Auto-fetch GPS Geolocation',
      'GPS Duplicate Blocker',
      'Fractional Ownership Concept',
      'Transaction Ledger'
    ],
    stack: 'React.js • CSS3 • Firebase Firestore • React-Leaflet • Google Gemini API'
  },

  {
    number: '02',
    title: 'Digital Gratitude Journal',
    desc: 'A mobile mental-wellness journaling application designed to help users record daily thoughts, gratitude entries and moods.',
    category: 'mobile',
    accent: '#8b7cff',
    github: 'https://github.com/Narendrasingh-byte/GratitudeJournal',
    features: [
      'Daily journal entries',
      'Mood selector',
      'Voice notes',
      'Read-aloud functionality',
      'Weekly reports',
      'Local data persistence',
      'Dark / Light theme',
      'Mobile-first UI'
    ],
    stack: 'React Native • Expo • JavaScript • AsyncStorage • expo-av • Expo Linear Gradient • Text-to-Speech'
  },

  {
    number: '03',
    title: 'ATM Simulator',
    desc: 'A programming and OOP-oriented simulation of common ATM workflows, demonstrating authentication, transaction handling and validation.',
    category: 'programming',
    accent: '#65d6ff',
    github: 'https://github.com/Narendrasingh-byte/ATM-Simulator',
    features: [
      'PIN authentication',
      'Balance checking',
      'Cash withdrawal',
      'Deposit',
      'Transaction handling',
      'Input validation',
      'Real-world workflow logic'
    ],
    stack: 'Programming / OOP concepts • C / Java / Python depending on implementation'
  }
];


const SKILLS = [
  {
    title: 'Programming Languages',
    featured: true,
    desc: 'Core programming strength',
    tags: ['C', 'Java', 'Python']
  },
  {
    title: 'Web Development',
    desc: 'Modern frontend stack',
    tags: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS']
  },
  {
    title: 'Mobile Development',
    desc: 'Cross-platform exploration',
    tags: ['React Native', 'Expo']
  },
  {
    title: 'Databases & Backend',
    desc: 'Data and application services',
    tags: ['Firebase', 'Firebase Firestore', 'SQL', 'AsyncStorage']
  },
  {
    title: 'Blockchain / Web3',
    desc: 'Emerging technology focus',
    tags: ['IPFS', 'Pinata', 'Web3 concepts']
  },
  {
    title: 'Tools & Platforms',
    desc: 'Everyday developer workflow',
    tags: ['Git', 'GitHub', 'VS Code', 'npm', 'EAS CLI']
  }
];


const JOURNEY = [
  'Programming Fundamentals',
  'C / Java / Python',
  'Data Structures & Algorithms',
  'Web Development',
  'React & Full-Stack Development',
  'Mobile Development',
  'Blockchain / Web3',
  'AI-powered Applications'
];


const REPOS = [
  {
    title: 'BHoo-Chain',
    desc: 'Land registry & fractional ownership platform',
    tags: ['Next.js', 'Firebase', 'IPFS'],
    github: 'https://github.com/Narendrasingh-byte/Bhoo-Chain'
  },
  {
    title: 'Digital Gratitude Journal',
    desc: 'Mobile journaling application',
    tags: ['React Native', 'Expo', 'AsyncStorage'],
    github: 'https://github.com/Narendrasingh-byte/GratitudeJournal'
  },
  {
    title: 'ATM Simulator',
    desc: 'OOP-oriented simulation of common ATM workflow',
    tags: ['OOPS Concept', 'C', 'Java'],
    github: 'https://github.com/Narendrasingh-byte/ATM-Simulator'
  }
];


const ROLES = [
  'Web Developer',
  'CSE (AI) Student',
  'AI-focused Developer',
  'Full-Stack Learner',
  'Web3 Explorer'
];


function renderSkills() {
  document.getElementById('skillsGrid').innerHTML =
    SKILLS.map(s => `
      <article class="skill-card ${s.featured ? 'featured' : ''} reveal">
        <h3>${s.title}</h3>
        <p>${s.desc}</p>

        <div class="skill-tags">
          ${s.tags.map(t => `
            <span class="skill-tag">${t}</span>
          `).join('')}
        </div>
      </article>
    `).join('');
}


function renderProjects() {
  const grid = document.getElementById('projectGrid');

  grid.innerHTML = PROJECTS.map(p => `
    <article
      class="project-card ${p.featured ? 'featured' : ''}"
      style="--visual:${p.accent}"
    >

      <div class="project-visual">
        <div class="visual-grid"></div>
        <div class="visual-glow"></div>

        <div class="visual-window">
          <div class="window-top"></div>

          <div class="window-lines">
            <i></i>
            <i></i>
            <i></i>
          </div>

          <div class="window-cards">
            <b></b>
            <b></b>
            <b></b>
          </div>
        </div>
      </div>


      <div class="project-body">

        <span class="project-number">
          PROJECT ${p.number}
        </span>

        <h3 class="project-title">
          ${p.title}
        </h3>

        <p class="project-desc">
          ${p.desc}
        </p>


        <div class="project-details">

          <div>
            <div class="detail-label">
              Key features
            </div>

            <div class="feature-list">
              ${p.features.map(f => `
                <span class="feature-chip">
                  ${f}
                </span>
              `).join('')}
            </div>
          </div>


          <div>
            <div class="detail-label">
              Technology stack
            </div>

            <p class="stack-list">
              ${p.stack}
            </p>
          </div>

        </div>


        <div class="project-actions">

          ${
            p.github
              ? `
                <a
                  href="${p.github}"
                  class="btn btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
              `
              : `
                <a
                  href="https://github.com/Narendrasingh-byte"
                  class="btn btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile ↗
                </a>
              `
          }

        </div>

      </div>

    </article>
  `).join('');
}


function renderJourney() {
  document.getElementById('journeyTrack').innerHTML =
    JOURNEY.map((x, i) => `
      <div class="journey-item reveal">

        <div class="journey-dot">
          ${String(i + 1).padStart(2, '0')}
        </div>

        <div>
          <h3>${x}</h3>

          <p>
            ${
              i === 0
                ? 'Foundation'
                : i === 7
                  ? 'Current exploration'
                  : 'Progression'
            }
          </p>
        </div>

      </div>
    `).join('');
}


function renderRepos() {
  document.getElementById('repoGrid').innerHTML =
    REPOS.map(r => `
      <article class="repo-card reveal">

        <span class="project-number">
          REPOSITORY
        </span>

        <h3>
          ${r.title}
        </h3>

        <p>
          ${r.desc}
        </p>

        <div class="repo-tags">
          ${r.tags.map(t => `
            <span>${t}</span>
          `).join('')}
        </div>


        ${
          r.github
            ? `
              <a
                href="${r.github}"
                class="btn btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
                style="margin-top:16px"
              >
                View repository ↗
              </a>
            `
            : `
              <a
                href="https://github.com/Narendrasingh-byte"
                class="btn btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
                style="margin-top:16px"
              >
                View GitHub Profile ↗
              </a>
            `
        }

      </article>
    `).join('');
}


function startTyping() {
  const el = document.getElementById('typedRole');

  let i = 0;
  let c = 0;
  let del = false;

  function tick() {
    const word = ROLES[i];

    if (!del) {
      c++;
      el.textContent = word.slice(0, c);

      if (c === word.length) {
        del = true;

        setTimeout(tick, 1300);
        return;
      }

    } else {

      c--;
      el.textContent = word.slice(0, c);

      if (c === 0) {
        del = false;
        i = (i + 1) % ROLES.length;
      }
    }

    setTimeout(tick, del ? 35 : 65);
  }

  tick();
}


function setupObserver() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  document
    .querySelectorAll('.reveal, .project-card')
    .forEach(x => observer.observe(x));
}


function setupNav() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  window.addEventListener(
    'scroll',
    () => {

      nav.classList.toggle(
        'scrolled',
        scrollY > 20
      );

      let current = '';

      document
        .querySelectorAll('section[id]')
        .forEach(s => {
          if (scrollY >= s.offsetTop - 140) {
            current = s.id;
          }
        });

      document
        .querySelectorAll('.nav-link')
        .forEach(a => {
          a.classList.toggle(
            'active',
            a.getAttribute('href') === `#${current}`
          );
        });

    },
    {
      passive: true
    }
  );


  toggle.addEventListener('click', () => {

    const open =
      links.classList.toggle('mobile-open');

    toggle.setAttribute(
      'aria-expanded',
      open
    );

  });


  links
    .querySelectorAll('a')
    .forEach(a => {

      a.addEventListener('click', () => {

        links.classList.remove(
          'mobile-open'
        );

        toggle.setAttribute(
          'aria-expanded',
          'false'
        );

      });

    });
}


function setupCursor() {
  const glow =
    document.getElementById('cursorGlow');

  if (
    matchMedia('(pointer: coarse)').matches
  ) {
    return;
  }

  addEventListener(
    'mousemove',
    e => {

      glow.style.opacity = '1';

      glow.style.left =
        e.clientX + 'px';

      glow.style.top =
        e.clientY + 'px';

    }
  );
}


function setupForm() {
  const form =
    document.getElementById('contactForm');

  const success =
    document.getElementById('formSuccess');

  form.addEventListener(
    'submit',
    e => {

      e.preventDefault();

      let valid = true;

      [
        'name',
        'email',
        'subject',
        'message'
      ].forEach(id => {

        const input =
          document.getElementById(id);

        const error =
          document.querySelector(
            `[data-for="${id}"]`
          );

        error.textContent = '';

        if (!input.value.trim()) {

          error.textContent =
            'This field is required.';

          valid = false;

        } else if (
          id === 'email' &&
          !/^\S+@\S+\.\S+$/.test(
            input.value
          )
        ) {

          error.textContent =
            'Enter a valid email.';

          valid = false;
        }

      });


      if (valid) {

        success.classList.add('show');

        form.reset();
      }

    }
  );
}


function init() {

  renderSkills();
  renderProjects();
  renderJourney();
  renderRepos();

  startTyping();

  setupNav();
  setupCursor();
  setupForm();
  setupObserver();

  document.getElementById('year').textContent =
    new Date().getFullYear();
}


document.addEventListener(
  'DOMContentLoaded',
  init
);