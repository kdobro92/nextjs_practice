function UserProfilepage(props) {
  return <h1>{props.username}</h1>;
}

export default UserProfilepage;

export async function getServerSideProps(context) {
  return {
    props: { username: "Max" },
  };
}
