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
            <main> 
            {children}
            </main>
        </div>
     );
}
 
export default LayoutPage;