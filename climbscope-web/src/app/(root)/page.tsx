import Hero from "../../../componenets/Hero";
import Features from "../../../componenets/Features";
import Routes from "../../../componenets/Routes1";
import Login from "../../../componenets/login";
import { db } from "../../../database/DB";
import { usersTable } from "../../../database/schema";



const Home = async() => {
  const res = await db.select().from(usersTable);
  return (
    <>
    <Hero/>
    <Features/>
    <Routes/>
    <Login/>
    </>
  )
}
export default Home;