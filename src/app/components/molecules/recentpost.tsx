import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function RecentPosts(){
    return(
        <Section2 isFancy = {true}>
            <Heading>Posting Terbaru</Heading>
        <Post title="Cita Rasa Lisbon"
              body="'...those pasteis de nata!"
            />
        <Post 
        title="buenos aires dalam irama tango"
        body="saya menyukainya"
        />
        </Section2>
    )
}