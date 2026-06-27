import { requireRole } from "@/lib/core/session";

const adminLayout = async({children}) => {
    await requireRole('admin');
    return children;
};

export default adminLayout;