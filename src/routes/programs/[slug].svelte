<script context="module">
  export async function preload({ params }) {
    const projects = [
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
      class="product-details column is-half-mobile is-one-quarter-tablet
      is-one-fifth-desktop is-one-fifth-widescreen is-one-fifth-fullhd">
      <p class="project-description">{project.description}</p>
      <section class="project-actions">
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
        class="column is-one-quarter-mobile is-one-quarter-tablet is-one-quarter-desktop
        is-one-quarter-widescreen is-one-quarter-fullhd"
        src={image}
        alt={project.title} />
    {/each}
  </section>
</section>
