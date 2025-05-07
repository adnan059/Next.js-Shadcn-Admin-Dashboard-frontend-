import CardList from "@/components/my_components/CardList";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/my_components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import AppLineChart from "@/components/my_components/AppLineChart";
import Link from "next/link";

export default function SingleUserPage() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href={"/"}>Dashboard</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href={"/users"}>Users</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>John Doe</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* single user page container */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8 ">
        {/* -------- left side -------- */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* user badges container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <div className="flex gap-4 mt-4">
              {/* badge 1 */}
              <HoverCard>
                <HoverCardTrigger className="cursor-default">
                  <BadgeCheck
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
                    size={36}
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed, temporibus.
                  </p>
                </HoverCardContent>
              </HoverCard>
              {/* badge 2 */}
              <HoverCard>
                <HoverCardTrigger className="cursor-default">
                  <Shield
                    className="rounded-full bg-green-500/30 border-1 border-green-500/50 p-2"
                    size={36}
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed, temporibus.
                  </p>
                </HoverCardContent>
              </HoverCard>

              {/* badge 3 */}
              <HoverCard>
                <HoverCardTrigger className="cursor-default">
                  <Candy
                    className="rounded-full bg-amber-500/30 border-1 border-amber-500/50 p-2"
                    size={36}
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed, temporibus.
                  </p>
                </HoverCardContent>
              </HoverCard>

              {/* badge 4 */}
              <HoverCard>
                <HoverCardTrigger className="cursor-default">
                  <Citrus
                    className="rounded-full bg-red-500/30 border-1 border-red-500/50 p-2"
                    size={36}
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed, temporibus.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          {/* information container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">User Information</h1>

              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>

            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile Completion
                </p>
                <Progress value={65} />
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span>john.doe</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>john.doe@mail.com</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold">Phone:</span>
                <span>+123456</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold">Location:</span>
                <span>Jackson Heights, NY, USA</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold">Role:</span>
                <Badge>Admin</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Joined On March 9, 2025
            </p>
          </div>

          {/* card list container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>

        {/* ------- right side --------- */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* user card container */}
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src={"/images/user.png"} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">John Doe</h1>
            </div>

            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              facilis debitis veniam sint at sapiente atque quod non hic aut.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
              velit!
            </p>
          </div>

          {/* chart container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Activity</h1>
            <AppLineChart />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
