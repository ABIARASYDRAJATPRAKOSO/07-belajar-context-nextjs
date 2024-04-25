import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPosts from "../organisms/allposts";

export default function ContactPage(){
    return (
        <Section2 isFancy={true}>
            <Heading>My Contacts</Heading>
            <Post 
                title="My Contacts:"
                body="Name/NIM:Abi Arasy Drajat Prakoso/2141720151"
                
            />
        </Section2>
    )
}