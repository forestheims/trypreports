import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";

export function SampleForm() {
  const formData = new FormData();

  const addSample = async (formData: FormData) => {
    "use server";
    const username = formData.get("username");
    const sample_id = formData.get("sample_id");
    const sample_name = formData.get("sample_name");
    const analytical_method = formData.get("analytical_method");
    const analytical_lab = formData.get("analytical_lab");
    const date_analyzed = formData.get("date_analyzed");
    const psilocybin_content = formData.get("psilocybin_content");
    const psilocin_content = formData.get("psilocin_content");
    const baeocystin_content = formData.get("baeocystin_content");
    const nor_baeocystin_content = formData.get("nor_baeocystin_content");
    const total_psilocybin_equivalents = formData.get(
      "total_psilocybin_equivalents",
    );
    const supabase = createServerActionClient({ cookies });
    const response = await supabase.from("psilocybe").insert({
      sample_id,
      sample_name,
      analytical_method,
      analytical_lab,
      date_analyzed,
      psilocybin_content,
      psilocin_content,
      baeocystin_content,
      nor_baeocystin_content,
      total_psilocybin_equivalents,
    });
    console.log("response", response);
  };

  return (
    <div className="p-4 m-4 border-2 rounded-lg">
      <h1 className="text-lg">Add Sample</h1>
      <form action={addSample} className="space-y-8">
        <div className="flex gap-4 flex-wrap justify-between">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input placeholder="shadcn" name="username" id="username" />
            <p className="text-sm text-muted-foreground">
              This is your public display name.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="sample_id">Sample ID</Label>
            <Input placeholder="######" name="sample_id" id="sample_id" />
            <p className="text-sm text-muted-foreground">
              ID used by the analysis lab.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="sample_name">Sample Name</Label>
            <Input
              placeholder="Sample Name"
              name="sample_name"
              id="sample_name"
            />
            <p className="text-sm text-muted-foreground">
              Name of sample submitted by client.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="analytical_method">Analytical Method</Label>
            <Input
              placeholder="HPLC"
              name="analytical_method"
              id="analytical_method"
            />
            <p className="text-sm text-muted-foreground">
              Equipment / method used for analysis.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="analytical_lab">Analytical Lab</Label>
            <Input
              placeholder="... Labs"
              name="analytical_lab"
              id="analytical_lab"
            />
            <p className="text-sm text-muted-foreground">
              Name of the lab that performed analysis.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="date_analyzed">Date Analyzed</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    // !date && "text-muted-foreground"
                  )}
                >
                  {/* <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? (
                        format(date, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )} */}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  // selected={date}
                  // onSelect={setDate}
                />
              </PopoverContent>
            </Popover>
            <p className="text-sm text-muted-foreground">
              Date the sample was analyzed.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="psilocybin_content">
              Psilocybin Content (mg/g)
            </Label>
            <Input
              placeholder="##.##"
              name="psilocybin_content"
              id="psilocybin_content"
            />

            <p className="text-sm text-muted-foreground">
              Test results for psilocybin content.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="psilocin_content">Psilocin Content (mg/g)</Label>
            <Input placeholder="##.##" name="psilocin_content" id="psilocin_content" />
            <p className="text-sm text-muted-foreground">
              Test results for psilocin content.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="baeocystin_content">
              Baeocystin Content (mg/g)
            </Label>
            <Input placeholder="##.##" name="baeocystin_content" id="baeocystin_content" />
            <p className="text-sm text-muted-foreground">
              Test results for baeocystin content.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="nor_baeocystin_content">
              Nor-Baeocystin Content (mg/g)
            </Label>
            <Input placeholder="##.##" name="nor_baeocystin_content" id="nor_baeocystin_content" />
            <p className="text-sm text-muted-foreground">
              Test results for nor-baeocystin content.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="total_psilocybin_equivalents">
              Total Psilocybin Equivalents (mg/g)
            </Label>
            <Input placeholder="##.##" name="total_psilocybin_equivalents" id="total_psilocybin_equivalents" />
            <p className="text-sm text-muted-foreground">
              Total quantified &apos;psilocybin equivalents&apos;.
            </p>
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
