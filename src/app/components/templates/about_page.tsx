import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPosts from "../organisms/allposts";

export default function AboutPage(){
    return (
        <Section2 isFancy={true}>
            <Heading>About</Heading>
            <Post 
                title="About"
                body="Yuhuuuw"
            />
        </Section2>
    )
}