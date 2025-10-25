import { getAdminFromCookie, logout } from "@/app/lib/data/admin/adminController";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function auth() {
    const cs = await cookies();
    if (!cs.has("admin")) {
        redirect("/login");
    }

    let data = await getAdminFromCookie();


    return (
        <>
            <h1>Auth Page</h1>
            <h1>{data?.name}</h1>
            <form action={logout}>
                <button className="btn btn-error text-white">logout</button>
            </form>
        </>
    );
}

export default auth;