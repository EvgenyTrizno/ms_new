import { MobileHeader } from "@/widgets/components/MobileHeader";
import { Layout } from "../Layout";
import { MobileMenu } from "@/widgets/components/MobileMenu";
import { NoteCalendar } from "@/entities/Note/ui/NoteCalendar";
import { Calendar } from "@/widgets";

const CalendarPage = () => {
    return (
        <Layout>
            <MobileHeader />
            <MobileMenu />
        </Layout>
    );
};

export default CalendarPage;
