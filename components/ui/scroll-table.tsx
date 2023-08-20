import { NavMenu } from "@/components/ui/nav-menu";
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
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function ScrollTable() {
  return (
    <ScrollArea className=" h-[300px] w-full rounded-md border p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Date Analyzed</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Psilocybin</TableHead>
            <TableHead className="text-right">Psilocin</TableHead>
            <TableHead className="text-right">Baeocystin</TableHead>
            <TableHead className="text-right">Nor-Baeocystin</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </ScrollArea>
  );
}
