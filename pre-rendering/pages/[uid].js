function UserIdPage(props) {
  return <h1>{props.id}</h1>;
}

export default UserIdPage;

// add getserversideprops
// add getserversideprops

export async function getServerSideProps(context) {
  const { params } = context;

  const userId = params.uid;

  return {
    props: {
      id: "userid-" + userId,
    },
  };
}
