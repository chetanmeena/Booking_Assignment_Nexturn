import Description from "../../components/Description/Description"
import Header from "../../components/Header/Header.component"
import MailList from "../../components/mailList/MailList"
import NavBar from "../../components/NavBar/NavBar"

const Home = () =>{
    return(
        <div>
        <NavBar />
        <Description />
        <Header />
        <MailList />
        </div>
    )
}
export default Home
