"use client";
import React, { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Card } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      {/* calendar */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      {/* list */}
      <ScrollArea className="h-[400px] mt-4 ">
        <div className="flex flex-col gap-4">
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>

          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item2" />
              <label htmlFor="item2" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>

          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item3" />
              <label htmlFor="item3" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>

          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item4" />
              <label htmlFor="item4" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>

          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item5" />
              <label htmlFor="item5" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>

          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item6" />
              <label htmlFor="item6" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>

          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item7" />
              <label htmlFor="item7" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>

          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item8" />
              <label htmlFor="item8" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>

          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item9" />
              <label htmlFor="item9" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>

          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item10" />
              <label htmlFor="item10" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
