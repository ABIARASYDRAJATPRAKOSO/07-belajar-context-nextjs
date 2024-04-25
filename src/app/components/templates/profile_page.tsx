import Head from "next/head";
import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import RecentPosts from "../molecules/recentpost";
import AllPosts from "../organisms/allposts";

export default function ProfilePage(){
    return(
        <Section2 isFancy={true}>
            <Heading>Profil Saya</Heading>
            <Post
                title="Hello Traveler"
                body="Baca tentang petualangan saya"
            />
            <AllPosts/>
        </Section2>
    )
}