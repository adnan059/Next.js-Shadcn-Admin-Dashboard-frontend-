import AppSidebar from "@/components/my_components/AppSidebar";
import "./globals.css";
import Navbar from "@/components/my_components/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  //  console.log(cookieStore);
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  // console.log("DO ==>", defaultOpen);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <main className="w-full">
              <Navbar />
              <div className="px-4">{children}</div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
