"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { MushroomAnalysis } from "@/types/sample";

export default function ScrollTable() {
  const [samples, setSamples] = useState<MushroomAnalysis | any>([{}]);

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClientComponentClient();
      const { data, error } = await supabase.from("psilocybe").select();
      if (data) {
        setSamples(data);
      }
    };
    fetchData();
  }, []);

  return (
    <ScrollArea className=" h-[300px] w-full rounded-md border p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Sample ID</TableHead>
            <TableHead>Sample name</TableHead>
            <TableHead>Date Analyzed</TableHead>
            <TableHead>Analysis</TableHead>
            <TableHead className="text-right">Psilocybin</TableHead>
            <TableHead className="text-right">Psilocin</TableHead>
            <TableHead className="text-right">Baeocystin</TableHead>
            <TableHead className="">Total Psilocybin Equivalents</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {samples[0].id &&
            samples.map((sample: any) => {
              console.log("Sample:", sample);
              return (
                <TableRow key={sample.id}>
                  <TableCell className="font-medium">
                    {sample.sample_id}
                  </TableCell>
                  <TableCell>{sample.sample_name}</TableCell>
                  <TableCell>{sample.date_analyzed}</TableCell>
                  <TableCell>
                    {sample.analytical_method} by
                    {sample.analytical_lab}
                  </TableCell>
                  <TableCell className="text-right">
                    {sample.psilocybin_content}
                  </TableCell>
                  <TableCell className="text-right">
                    {sample.psilocin_content}
                  </TableCell>
                  <TableCell className="text-right">
                    {sample.baeocystin_content}
                  </TableCell>
                  <TableCell className="text-right">
                    {sample.total_psilocybin_equivalents}
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </ScrollArea>
  );
}
