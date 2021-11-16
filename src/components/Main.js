import auth from "../js/auth";

const Main = props => {
    return (
        <div>
            Main Page
            <button onClick={() => {
                auth.logout(() => {
                    props.history.push("/")
                })
            }}>
                Logout
            </button>
        </div>
    )
}

export default Main;