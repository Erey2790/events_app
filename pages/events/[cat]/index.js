const EventsCatPage = () => {
  return (
    <div>
      <h1>Events in London</h1>
      <div>
        <a href="/events/london/ev1">
          <img /> <h2> Event 1 </h2>
        </a>
        <a href="">
          <img /> <h2> Event 2 </h2>
        </a>
        <a href="">
          <img /> <h2> Event 3 </h2>
        </a>
        <a href="">
          <img /> <h2> Event 4 </h2>
        </a>
        <a href="">
          <img /> <h2> Event 5 </h2>
        </a>
        <a href="">
          <img /> <h2> Event 6 </h2>
        </a>
      </div>
    </div>
  );
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");

  const data = allEvents.filter((ev) => ev.city === id);
  console.log(data);
  return {
    props: { data },
  };
}
