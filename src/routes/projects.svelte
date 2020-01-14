<script>
  export const projects = {
    live: [
      {
        slug: "werick-codes",
        title: "Werick Codes",
        tags: ["svelte", "nodejs", "javascript"],
        description: "My personal blog, built with Javascript entirely.",
        images: [
          "https://res.cloudinary.com/duoxba7n1/image/upload/v1578296393/Screenshot_at_2020-01-06_10-35-34.png"
        ],
        github: "https://github.com/tesh254/werickcodes_blog",
        creationDate: "25 March 2019",
        launchDate: "2 May 2019",
        versions: [
          {
            version: 1,
            stack: [
              "nodejs",
              "nextjs",
              "javascript",
              "nodejs",
              "express",
              "react"
            ]
          },
          {
            version: 2,
            stack: ["gatsby", "nodejs", "javascript", "express", "react"]
          },
          {
            version: 3,
            stack: ["svelte", "dev.to-API"]
          }
        ],
        url: "https://werick.codes"
      },
      {
        slug: "roko-store",
        title: "Roko Store",
        tags: ["react", "nodejs", "javascript", "mongodb", "express"],
        description:
          "Online Thrift clothes consignment shop. The platform has 3 user roles: Seller, User and Admin.A Seller on successful registration could create a store and add listings they are offering to sell. Not only it will provide analytics on their store, where they could learn how they are moving their orders, return revenue and listing interaction. \n The Admin has the power to moderate the platform, fulfill orders and overall view of the platform analytics.\nStarted it earlier 2019, handling legal stuff so it can go live and onto the hands of a target customer",
        images: [
          "https://res.cloudinary.com/duoxba7n1/image/upload/v1578296975/Screenshot_at_2020-01-06_10-46-07.png",
          "https://res.cloudinary.com/duoxba7n1/image/upload/v1578296971/Screenshot_at_2020-01-06_10-45-46.png",
          "https://res.cloudinary.com/duoxba7n1/image/upload/v1578296967/Screenshot_at_2020-01-06_10-45-10.png"
        ],
        creationDate: "20 Sep 2019",
        launchDate: "16 Jan 2020",
        versions: [
          {
            version: 1,
            stack: ["react", "javascript", "nodejs", "mongodb"]
          }
        ],
        url: null
      },
      {
        slug: "p2f",
        title: "P2F",
        tags: ["react", "typescript"],
        description:
          "I built p2f when learning Typescript. Its a list of people to follow in software development, who are open to questions and advice on Twitter",
        images: [
          "https://res.cloudinary.com/duoxba7n1/image/upload/v1578298545/Screenshot_at_2020-01-06_11-12-24.png"
        ],
        creationDate: "27 August 2019",
        launchDate: "30 August 2019",
        versions: [
          {
            version: 1,
            stack: ["typescript", "react"]
          }
        ],
        github: "https://github.com/tesh254/p2f",
        url: "https://p2f.werick.codes"
      },
      {
        slug: "fnista",
        title: "Fnista",
        tags: ["laravel", "php"],
        description:
          "Fnista is a subscription app built with Laravel and stripe to handle monthly subscriptions. The project makes use of Laravel/Cashier for subscription and Eloquent for database handling",
        images: [
          "https://res.cloudinary.com/duoxba7n1/image/upload/v1578992116/Screenshot_at_2020-01-14_11-49-20.png",
          "https://res.cloudinary.com/duoxba7n1/image/upload/v1578992113/Screenshot_at_2020-01-14_11-50-21.png",
          "https://res.cloudinary.com/duoxba7n1/image/upload/v1578992113/Screenshot_at_2020-01-14_11-51-06.png",
          "https://res.cloudinary.com/duoxba7n1/image/upload/v1578992112/Screenshot_at_2020-01-14_11-49-41.png"
        ],
        creationDate: "09 January 2020",
        launchDate: "14 January 2020",
        versions: [
          {
            version: 1,
            stacks: ["laravel", "php"]
          }
        ],
        github: "https://github.com/tesh254/subscription_app",
        url: "http://fnista.herokuapp.com/"
      },
      {
        slug: "rick-and-morty-api",
        title: "Rick & Morty API",
        tags: ["express", "nodejs", "react"],
        description:
          "I am a big fan of the show and I have always had a deep interest in building a public API. So I started creating an unofficial API of the show.",
        images: [
          "https://res.cloudinary.com/duoxba7n1/image/upload/v1578299805/imageedit_1_3155408243.png",
          "https://res.cloudinary.com/duoxba7n1/image/upload/v1578299903/Screenshot_at_2020-01-06_11-35-23.png"
        ],
        creationDate: "23 Nov 2019",
        launchDate: "31 January 2020",
        versions: [
          {
            version: 1,
            stack: ["express", "nodejs", "react"]
          }
        ],
        github: "https://github.com/werickblog/rick_and_morty_api",
        url: "https://rickandmortydocs.werick.codes/"
      }
    ],
    programs: [
      {
        slug: "lakra",
        title: "Lakra",
        tags: ["go"],
        description:
          "Lakra is a basic 2D game engine built entirely with Golang. Currently the default is hard coded, but I am working on sprite editor at the moment the focus on the game editor",
        images: ["https://github.com/tesh254/lakra/raw/master/preview.png"],
        github: "https://github.com/tesh254/lakra",
        creationDate: "1 Jan 2020",
        launchDate: null,
        versions: [
          {
            version: 1,
            stack: ["go"]
          }
        ],
        url: null
      },
      {
        slug: "araknet",
        title: "Araknet",
        tags: ["go"],
        description:
          "The title derived from the Dark net application from the show 'The Startup', Araknet is a blockchain network I am building from scratch for learning purposes entirely with Golang. Currently its a CLI that allows basic peer to peer transactions, mining, proof of work. I hope to achieve peer to peer network soon.",
        images: [
          "https://res.cloudinary.com/duoxba7n1/image/upload/v1578299489/Screenshot_at_2020-01-06_11-28-09.png",
          "https://res.cloudinary.com/duoxba7n1/image/upload/v1578299489/Screenshot_at_2020-01-06_11-27-45.png"
        ],
        github: "https://github.com/tesh254/araknet",
        creationDate: "2 Jan 2020",
        launchDate: null,
        versions: [
          {
            version: 1,
            stack: ["go"]
          }
        ],
        url: null
      }
    ],
    tutorials: [
      {
        slug: "electron-app-with-react",
        title: "Electron app with React",
        github: "https://github.com/werickblog/electron_react_app",
        description:
          "Basic setup on how to create a electron desktop application, written in React",
        url: "https://dev.to/tesh254/how-to-build-electron-apps-with-react-36b"
      },
      {
        slug: "simple-dark-theme-react-app",
        title: "Simple Dark theme react app",
        github: "https://github.com/werickblog/simple_dark_theme_react_app",
        description: "How to add theming to your react app",
        url:
          "https://dev.to/tesh254/how-to-add-a-dark-mode-to-your-react-web-app-4f1"
      },
      {
        slug: "how-create-and-run-cron-jobs-in-nodejs",
        title: "How to create and run cron jobs in Nodejs",
        github: "https://github.com/werickblog/cron_jobs_with_nodejs",
        description: "Basic project on how to add cron jobs to your nodejs app",
        url:
          "https://dev.to/tesh254/how-to-create-and-run-cron-jobs-in-node-4eh0"
      },
      {
        slug: "nodejs-docker-heroku",
        title: "Node, Docker and Deployment",
        description:
          "Basic Node config on how to run nodejs apps inside a Docker container",
        github: "https://github.com/werickblog/docker_nodejs_app",
        url:
          "https://dev.to/tesh254/how-to-create-a-node-app-within-a-docker-container-2kip"
      }
    ]
  };
</script>

<style lang="scss" global>
  @import "./static/cards.scss";
</style>

<svelte:head>
  <title>Projects - Erick Wachira</title>
</svelte:head>

<section class="container">
  <section class="columns is-mobile is-multiline cards">
    {#each projects.live as project}
      <a
        href={`/live/${project.slug}`}
        class="card column is-half-mobile is-one-quarter-tablet
        is-one-fifth-desktop is-one-fifth-widescreen is-one-fifth-fullhd">
        <img src={project.images[0]} alt={project.title} />
        <span class="card-text">{project.title}</span>
      </a>
    {/each}
    {#each projects.programs as project}
      <a
        href={`/programs/${project.slug}`}
        class="card column is-full-mobile is-one-quarter-tablet
        is-one-quarter-desktop is-one-quarter-widescreen is-one-quarter-fullhd">
        <img src={project.images[0]} alt={project.title} />
        <span class="card-text">{project.title}</span>
      </a>
    {/each}
  </section>
  <span class="title">Tutorials</span>
  <section class="columns is-mobile is-multiline cards">
    {#each projects.tutorials as project}
      <section
        class="card-2 column is-full-mobile is-one-quarter-tablet
        is-one-quarter-desktop is-one-quarter-widescreen is-one-quarter-fullhd">
        <span class="card-2-title">{project.title}</span>
        <br />
        <br />
        <span class="card-2-description">{project.description}</span>
        <div class="card-2-icons">
          <a href={project.github}>
            <i class="fab fa-github" />
            repo
          </a>
          <a href={project.url ? project.url : ''}>
            <i class="fas fa-link" />
            link
          </a>
        </div>
      </section>
    {/each}
  </section>
</section>
