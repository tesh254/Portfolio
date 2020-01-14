<script>
  export let stacks = [
    {
      stack: "React",
      level: 80,
      color: "#46b5d1",
      type: "Library"
    },
    {
      stack: "Svelte/Sapper",
      level: 60,
      color: "#ef4339",
      type: "Framework"
    },
    {
      stack: "Typescript",
      level: 60,
      color: "#10316b",
      type: "Language"
    },
    {
      stack: "Javascript",
      level: 100,
      color: "#f6da63",
      type: "Language"
    },
    {
      stack: "Nodejs",
      level: 90,
      color: "#007944",
      type: "Runtime"
    },
    {
      stack: "Python",
      level: 70,
      color: "#293a80",
      type: "Language"
    },
    {
      stack: "Go",
      level: 80,
      color: "#5edfff",
      type: "Language"
    },
    {
      stack: "Laravel/PHP",
      level: 70,
      color: "#ff5d6c",
      type: "Framework"
    }
  ];
</script>

<style lang="scss" global>
  @import "./static/stacks.scss";
</style>

<svelte:head>
  <title>Stacks & Work - Erick Wachira</title>
</svelte:head>
<section class="columns is-mobile is-multiline stacks">
  {#each stacks as stack}
    <section
      class="column is-full-mobile is-one-quarter-tablet is-one-quarter-desktop
      is-one-quarter-widescreen is-one-quarter-fullhd stack">
      <span class="stack-title">{stack.stack}</span>
      <progress max="100" value={`${stack.level}`} />
    </section>
  {/each}
</section>

<section class="work">
  <h1 class="title">Work</h1>

  <div class="work-list">
    <span class="work-list-date">Dec 2018 - Nov 2019</span>
    <br>
    <span class="work-list-company">Andela Kenya</span>
    <br>
    During my time in Andela, I did:
    <ul class="work-list-desc">
      <li>
        Collaborate with developers and performance engineers to enhance
        supportability and identify performance bottlenecks
      </li>
      <li>
        Design, implement and monitor web pages and sites for continuous
        improvement
      </li>
      <li>
        Collaborate on all stages of systems development life-cycle, from
        requirements gathering to production releases
      </li>
      <li>
        Analyze requirements and design, develop and implement software
        applications for internal company departments e.g. HR and Operations
      </li>
      <li>
        Coordinate with project management staff on application development
        timelines and project scope
      </li>
      <li>
        Build and test scalable, highly available and modular software products
      </li>
      <li>
        Consult with engineering team members to determine system loads and
        develop improvement plans
      </li>
      <li>
        Worked closely with said departments to establish problem specifications
        and system designs
      </li>
    </ul>
  </div>
</section>
