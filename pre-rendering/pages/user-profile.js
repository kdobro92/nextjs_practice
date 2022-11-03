function UserProfilepage(props) {
  return <h1>{props.username}</h1>;
}

export default UserProfilepage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  console.log(req);
  console.log(res);

  return {
    props: { username: "Max" },
  };
}
