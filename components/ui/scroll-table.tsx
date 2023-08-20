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

export default function ScrollTable() {
  return (
    <ScrollArea className=" h-[300px] w-full rounded-md border p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Sample Name</TableHead>
            <TableHead>Date Analyzed</TableHead>
            <TableHead>Analysis</TableHead>
            <TableHead>Species / sub-species</TableHead>
            <TableHead className="text-right">Psilocybin</TableHead>
            <TableHead className="text-right">Psilocin</TableHead>
            <TableHead className="text-right">Baeocystin</TableHead>
            <TableHead className="">Total Tryptamines</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">APE A+</TableCell>
            <TableCell>08/19/2023</TableCell>
            <TableCell>Tryp Labs - HPLC</TableCell>
            <TableCell>Cubensis</TableCell>
            <TableCell className="text-right">4.0 mg/g</TableCell>
            <TableCell className="text-right">1.0 mg/g</TableCell>
            <TableCell className="text-right">0.0 mg/g</TableCell>
            <TableCell className="text-right">5.0 mg/g</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </ScrollArea>
  );
}
