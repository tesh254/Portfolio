<script context="module">
  export async function preload({ params }) {
    const projects = [
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
    ];
    const { slug } = params;

    const project = projects.filter(item => item.slug === slug)[0];

    if (project.slug) {
      return { project };
    } else {
      this.error(404, "Project not found");
    }
  }
</script>

<script>
  export let project;
</script>

<style lang="scss" global>
  @import "./static/project.scss";
</style>

<svelte:head>
  <title>{project.title}-Erick Wachira</title>
</svelte:head>

<section class="project-holder">
  <section class="project columns is-mobile is-multiline">
    <img
      class="project-image column is-half-mobile is-one-quarter-tablet
      is-one-fifth-desktop is-one-fifth-widescreen is-one-fifth-fullhd"
      src={project.images[0]}
      alt={project.title} />
    <section
      class="product-details column is-full-mobile is-one-quarter-tablet
      is-one-fifth-desktop is-one-fifth-widescreen is-one-fifth-fullhd">
      <p class="project-description">{project.description}</p>
      <section class="project-actions">
        <a href={project.url} class="project-demo">Demo</a>
        <a href={project.github} class="project-repo">
          <i class="fab fa-github" />
          Github
        </a>
      </section>
    </section>
  </section>
  <span class="title">Screenshots</span>
  <section class="screenshots columns is-mobile is-multiline">
    {#each project.images as image}
      <img
        class="column is-full-mobile is-one-quarter-tablet
        is-one-quarter-desktop is-one-quarter-widescreen is-one-quarter-fullhd"
        src={image}
        alt={project.title} />
    {/each}
  </section>
</section>
