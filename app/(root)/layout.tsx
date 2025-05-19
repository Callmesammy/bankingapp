import Rightbar from "./_components/right-bar";
import Sidebard from "./_components/sidebar-comp";

interface layoutProps{
    children: React.ReactNode
}

const LayoutPage = ({
    children 
}: layoutProps) => {
    return ( 
        <div className="flex w-full h-full">
        <Sidebard/>
            <main className="flex w-full h-full "> 
            {children}
            <Rightbar/>
            </main>
        </div>
     );
}
 
export default LayoutPage;