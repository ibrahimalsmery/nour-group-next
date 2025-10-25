import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import admins from './admins.json';

type Admin = {
    name: string;
    email: string;
}

export async function saveAdminCookie(user: Admin) {
    const cookieStore: any = await cookies();
    cookieStore.set("admin", JSON.stringify({
        name: user.name,
        email: user.email,
    }), {
        httpOnly: true,
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30    
    });
}


export async function getAdminFromCookie(): Promise<Admin | null> {
    const cookieStore: any = await cookies();
    const adminCookie = cookieStore.get("admin");
    if (adminCookie) {
        return JSON.parse(adminCookie.value) as Admin;
    }
    return null;
}

export async function clearAdminCookie() {
    const cookieStore: any = await cookies();
    cookieStore.delete("admin");
}

// handle login
export async function login(formdata: FormData) {
    "use server";
    const data = Object.fromEntries(formdata.entries());
    const user = admins.find((admin) => admin.email === data.email && admin.password === data.password);
    if (user) {
        await saveAdminCookie(user)
        redirect("/auth");
    } else {
        redirect("/login?error_message=Login Failed");
    }

}
// handle logout
export async function logout(formdata: FormData) {
    "use server";
    await clearAdminCookie();
    redirect("/login");
}

// check if admin is logged in
export async function isAdminLoggedIn(): Promise<boolean> {
    const admin = await getAdminFromCookie();
    return admin !== null
}

// if admin login redirect to auth page
export async function redirectIfAdminLoggedIn() {
    const loggedIn = await isAdminLoggedIn();
    console.log(loggedIn);
    if (loggedIn) {
        redirect("/auth");
    } else {
        redirect("/login");
    }
}