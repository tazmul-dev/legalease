import { getUserSession } from "@/lib/core/session";
import { LayoutSideContentLeft,  House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

export async function DashboardSidebar() {
    const user = await getUserSession()
    const lawyerLinks = [
        {  href: "/dashboard/layer", label: "Hiring Hestory" },
        { href: "/dashboard/layer/manageProfile", label: "Maneg profile" },
       
    ];
    const userLinks = [
        {  href: "/dashboard/user", label: "Hiring Hestory" },
        {  href: "/dashboard/user/update-profile", label: "Update-profile" },
        {  href: "/dashboard/user/comment", label: "Comment" },
      
       
    ];
    const adminLinks = [
        {  href: "/dashboard/admin/manage-users", label: "manage-users" },
        { href: "/dashboard/admin/all-transactions", label: "All-transactions" },
        { href: "/dashboard/admin/analytics", label: "Analytics" },
       
    ];
    const navLinksMap = {
        user: userLinks,
        layer: lawyerLinks,
        admin: adminLinks
    }
     const navItems = navLinksMap[user?.role || 'user'];


    const navContent = <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
            <Link
                key={item.label}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                href={item.href}
            >
                {/* <item.icon className="size-5 text-muted" /> */}
                {item.label}
            </Link>
        ))}
    </nav>

    return (
        <>
            <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
                {navContent}
            </aside>
            <Drawer>
                <Button className="lg:hidden" variant="secondary">
                    <LayoutSideContentLeft />
                    Sidebar
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                {navContent}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    );
}