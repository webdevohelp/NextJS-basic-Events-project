import Head from 'next/head';
import { getFeaturedEvents } from '../helpers/api-utils';
import EventList from '../components/events/event-list';

function HomePage(props) {
    return (
        <div>
            <Head>
                <title>Home</title>
                <meta name="description" content="Events app for Rishikesh!" />
            </Head>
            <EventList items={props.events} />
        </div>
    );
}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();
    return {
        props: {
            events: featuredEvents,
        },
        revalidate: 1800,
    };
}

export default HomePage;
